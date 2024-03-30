import Header from "@/components/Header"
import styles from "./departmen.module.css"
import Image from "next/image"
import accept from "./accept.svg"
import decline from "./decline.svg"
import pens from "./pens.jpg"
import Ticket, { ticket_data } from "@/components/Ticket"

export default function Department() {
    const Ticket_data: ticket_data = {
        type: "accept",
        img: "./accept.svg",
        description_info: {
            product: "pens",
            price: 10,
            employer: "Иванов И. И.",
            count: 100,
            status: "pending",
        },
        accept_id: 1,
    }
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.budget_balance}>
                    <h1 className={styles.budget_balance_word}>Остаток бюджета</h1>
                    <input type="text" placeholder="1000" className={styles.budget_balance_value} disabled/>
                </div>
            </div>

            <Ticket {...Ticket_data}/>

            <div className={styles.Applications_accept}>
                <h1>Все заявки</h1>
            </div>
            <Ticket type={"info"} img={""} description_info={{
                product: "Pen",
                price: 100,
                employer: "Иванов И. И.",
                count: 100,
                status: "rejected"
            }}/>

        </div>
        
    )
}