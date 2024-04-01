"use client"

import Header from "@/components/Header"
import styles from "./departmen.module.css"
import Image from "next/image"
import accept from "./accept.svg"
import decline from "./decline.svg"
import pens from "./pens.jpg"
import Ticket, { ticket_data } from "@/components/Ticket"
import { useRouter } from "next/navigation"
import { getCookie } from "cookies-next"
import { useEffect, useState } from "react"
import { ticket } from "@/types/form"
import axios from "axios"

export default function Department() {

    type api_ticket = {
        id: number,
        attributes: ticket
    }

    const router = useRouter();

    const cookie_user = getCookie('user_data');
    if (!cookie_user) {
        router.push('/auth/login')
    }
    if (cookie_user) {
        const data = JSON.parse(cookie_user);
        if (data.Role != "department") router.push('/' + data.Role);
	}

    const [tickets, set_tickets] = useState<Array<api_ticket>>([]);
    const [balance, set_balance] = useState(0);

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

        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/tickets?populate=deep`, config).then((response) => {
            set_tickets(response.data.data);
        })

    }, [router])

    const active_tickets: JSX.Element[] = [];
    const history_tickets: JSX.Element[] = [];

    tickets.forEach((ticket) => {

        const product = ticket.attributes.product.data.attributes;
        const user = ticket.attributes.worker?.data.attributes;

        if (ticket.attributes.Status == "pending") {
            active_tickets.push(
            <Ticket type={"accept"} img={product.Image.data.attributes.url} accept_id={ticket.id} description_info={{
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
        <div>
            <div className={styles.container}>
                <div className={styles.budget_balance}>
                    <h1 className={styles.budget_balance_word}>Остаток бюджета</h1>
                    <input type="text" placeholder="1000" className={styles.budget_balance_value} disabled value={balance}/>
                </div>
            </div>

            {active_tickets}

            <div className={styles.Applications_accept}>
                <h1>Все заявки</h1>
            </div>
            {history_tickets}

        </div>
        
    )
}