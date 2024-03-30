import Header from "@/components/Header"
import add from "./add.svg"
import styles from "./employee.module.css"
import Image from "next/image"
import clock from "./clock.svg"
import pens from "./pns.jpg"
import accept from "./accept.svg"
import Ticket from "@/components/Ticket"

export default function Employee() {
    return (
        <div className={styles.main}>

            <div className={styles.Applications}>
                    <div >
                        <h1 className={styles.My_Applications}>
                            Мои заявки
                        </h1>
                    </div>
                    <Ticket type={"info"} img={""} description_info={{
                        product: "Pen",
                        price: 100,
                        employer: "Иванов И. И.",
                        count: 100,
                        status: "accepted"
                    }}/>
            </div>

                <div className="">
                    <h1 className={styles.create_application}>
                        Создать заявку
                    </h1>
                    <div>
                        <input type="text" placeholder="Поиск" name="" id="" className={styles.find_application}/>
                    </div>
                </div>

                <div className={styles.Found_applications}>
                <Ticket type={"form"} img={""} description_info={{
                    product: "Pen",
                    price: 100,
                    employer: "Иванов И. И.",
                    count: 100,
                    status: "accepted"
                }}/>
                </div>


                <div className={styles.Applications}>
                    <div >
                        <h1 className={styles.History_Applications}>
                            История заявок
                        </h1>
                    </div>

                    <Ticket type={"info"} img={""} description_info={{
                    product: "Pen",
                    price: 100,
                    employer: "Иванов И. И.",
                    count: 100,
                    status: "accepted"
                }}/>
                </div>

        </div>
    )
}