"use client"
import styles from "./employee.module.css"
import Ticket from "@/components/Ticket"
import { useRouter } from "next/navigation"
import { getCookie } from "cookies-next"
import { useEffect, useState } from "react"
import { product, user } from "@/types/form"
import axios from "axios"

export default function Employee() {

    const router = useRouter();
    

    type user_data = {
        id: number,
        attributes: user
    }

    //@ts-ignore
    const [user_data, set_user] = useState<user_data>({id: 0, attributes: {}});
    const [all_products, set_products] = useState<Array<product>>([]);
    const [filter, set_filter] = useState("");

    const config = {
        headers: {
          "Authorization": "Bearer " + process.env.NEXT_PUBLIC_API_KEY,
          "Content-Type": "application/json"
        }
    }

    useEffect(() => {

        const cookie_user = getCookie('user_data');
        if (!cookie_user) {
            router.push('/auth/login')
        }
        if (cookie_user) {
            const data = JSON.parse(cookie_user);
            if (data.Role != "employee") router.push('/' + data.Role);
        }

        //@ts-ignore
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/workers?filters[Login][$eq]=${JSON.parse(cookie_user).Login}&populate=deep`, config).then((response) => {
            set_user(response.data.data[0]);
        })

        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products?populate=deep`, config).then(res => {
            set_products(res.data.data);
        })

    }, [router])

    const handle_change = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const {name, value} = event.target;
    
        set_filter(value);
      }

    const tickets = user_data.attributes.tickets?.data;
    const active_tickets: JSX.Element[] = [];
    const history_tickets: JSX.Element[] = [];

    const product_forms = all_products.filter((product) => filter == "" || product.attributes.Name.includes(filter)).map((product) => {

        const onSend = (count?: number) => {

            const data = JSON.stringify(
                {
                    data: {
                        Count: count || 1, 
                        product: product.id, 
                        worker: user_data.id,
                        Status: "pending"
                    }
                }
            )

            axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/tickets`, data, config).then(res => router.push("/auth/login"));
        }

        return (
            <Ticket 
            type={"form"}
            img={product.attributes.Image.data.attributes.url}
            description_info={{
                product: product.attributes.Name,
                price: product.attributes.Price,
            }}
            form_actions={{onSend}}/>
        )
    })

    tickets?.forEach((ticket) => {

        const product = ticket.attributes.product.data.attributes;
        const user = ticket.attributes.worker?.data.attributes;

        if (ticket.attributes.Status == "pending") {
            active_tickets.push(
            <Ticket type={"info"} img={product.Image.data.attributes.url} description_info={{
                product: product.Name,
                price: product.Price,
                employer: user?.FIO,
                count: ticket.attributes.Count,
                status: ticket.attributes.Status
            }}/>)
        }
        else {
            history_tickets.push(
                <Ticket type={"info"} img={product.Image.data.attributes.url} description_info={{
                    product: product.Name,
                    price: product.Price,
                    employer: user?.FIO,
                    count: ticket.attributes.Count,
                    status: ticket.attributes.Status
                }}/>
            )
        }
    })

    return (
        <div className={styles.main}>

            <div className={styles.Applications}>
                    <div >
                        <h1 className={styles.My_Applications}>
                            Мои заявки
                        </h1>
                    </div>
                    {active_tickets}
            </div>

                <div className="">
                    <h1 className={styles.create_application}>
                        Создать заявку
                    </h1>
                </div>

                <input type="text" className={styles.find_application} placeholder="Начните вводить имя" value={filter} onChange={handle_change}/>

                <div className={styles.Found_applications}>
                {product_forms}
                </div>


                <div className={styles.Applications}>
                    <div >
                        <h1 className={styles.History_Applications}>
                            История заявок
                        </h1>
                    </div>

                    {history_tickets}
                </div>

        </div>
    )
}