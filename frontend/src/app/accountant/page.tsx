"use client"
import styles from "./accountant.module.css"
import download from "./download_data.svg"
import accept from "./accept.svg"
import Image from "next/image"
import pens from "./pens.jpg"
import Ticket from "@/components/Ticket"
import { getCookie } from "cookies-next"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import axios from "axios"
import { ticket } from "@/types/form"
import * as XLSX from "xlsx";


export default function Accountant() {

    type api_ticket = {
        id: string,
        attributes: ticket
    }

    const router = useRouter();

    const cookie_user = getCookie('user_data');
    if (!cookie_user) {
        router.push('/auth/login')
    }
    if (cookie_user) {
        const data = JSON.parse(cookie_user);
        if (data.Role != "accountant") router.push('/' + data.Role);
	}

    const [balance, set_balance] = useState(0);
    const [tickets, set_tickets] = useState<Array<api_ticket>>([]);
    const [spended, set_spended] = useState(0);

    const config = {
        headers: {
          "Authorization": "Bearer " + process.env.NEXT_PUBLIC_API_KEY,
          "Content-Type": "application/json"
        }
    }

    useEffect(() => {

        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/budget`, config).then((response) => {
            set_balance(response.data.data.attributes.Budget);
        })

        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/tickets?populate=deep&filters[Status][$eq]=accepted`, config).then((response) => {
            set_tickets(response.data.data);

            let summ = 0;
            response.data.data.forEach((item: api_ticket) => {
                summ += item.attributes.Count * item.attributes.product.data.attributes.Price;
                console.log(summ);
            })
            set_spended(summ);
        })

    }, [])

    const ticket_arr = tickets.map((ticket) => {

        const product = ticket.attributes.product.data.attributes;
        const user = ticket.attributes.worker?.data.attributes;

        return (
            <Ticket type={"info"} img={product.Image.data.attributes.url} description_info={{
                product: product.Name,
                price: product.Price,
                employer: user?.FIO,
                count: ticket.attributes.Count,
                status: ticket.attributes.Status
            }}/>
        )
    })

    const send = () => {
        const data = JSON.stringify({data: {Budget: Number(balance)}});
        console.log(data)
        axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/budget`, data, config).then(res => router.refresh())
    }

    const createFile = () => {
        const workbook = XLSX.utils.book_new();
        const worksheet = XLSX.utils?.json_to_sheet(tickets.map(ticket => {
            return {
                Created: ticket.attributes.createdAt,
                Confirmed: ticket.attributes.updatedAt,
                Worker: ticket.attributes.worker?.data.attributes.FIO,
                Product: ticket.attributes.product.data.attributes.Name,
                Price: ticket.attributes.product.data.attributes.Price + "р",
                Count: ticket.attributes.Count,
                Summ: ticket.attributes.product.data.attributes.Price * ticket.attributes.Count + "р"
            }
        }));
        XLSX.utils.book_append_sheet(workbook, worksheet, "Stats");
        XLSX.writeFile(workbook, `Stats.xlsx`);
    }

    return (
        <div>
            <div className={styles.container}>
                <div>
                    <h1 className={styles.Status}> Статус на: {((new Date()).toLocaleString('default', { month: 'long' })).toUpperCase()}</h1>
                </div>

                <div className={styles.Bill}>
                    <div>
                        <h1 className={styles.Bill_word}>Счет</h1>
                    </div>
                    <div>
                        <input type="text" placeholder="100000" className={styles.Input_Bill} value={balance} onChange={(e: any) => {set_balance(e.target.value)}}/>                    
                    </div>
                    <div>
                        <button className={styles.Save_bill} onClick={send}>Сохранить</button>
                    </div>
                </div>

                <div className={styles.Funds}>
                    <div >
                        <h1 className={styles.Funds_spent}>Средства потрачено</h1>
                    </div>

                    <div >
                        <input type="text" placeholder="" className={styles.Show_spent} disabled value={spended}/>
                    </div>

                    <div className={styles.Download_data}>
                        <Image src={download} alt="" className={styles.download_data_img} />
                        <button className={styles.download_data_btn} onClick={createFile}>Скачать статистику за месяц</button>
                    </div>
                </div>


                <div className={styles.Applications}>
                    <div >
                        <h1 className={styles.Applications_accept}>
                            Подтвержденные заявки
                        </h1>
                    </div>

                    
                </div>
                {ticket_arr}
            </div>
            
        </div>
    )
}