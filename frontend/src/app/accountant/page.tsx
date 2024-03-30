import Header from "@/components/Header"
import styles from "./accountant.module.css"
import download from "./download_data.svg"
import accept from "./accept.svg"
import Image from "next/image"
import pens from "./pens.jpg"
import Ticket from "@/components/Ticket"


export default function Accountant() {
    return (
        <div>
            <div className={styles.container}>
                <div>
                    <h1 className={styles.Status}> Статус на: Январь</h1>
                </div>

                <div className={styles.Bill}>
                    <div>
                        <h1 className={styles.Bill_word}>Счет</h1>
                    </div>
                    <div>
                        <input type="text" placeholder="100000" className={styles.Input_Bill}/>                    
                    </div>
                    <div>
                        <button className={styles.Save_bill}>Сохранить</button>
                    </div>
                </div>

                <div className={styles.Funds}>
                    <div >
                        <h1 className={styles.Funds_spent}>Средства потрачено</h1>
                    </div>

                    <div >
                        <input type="text" placeholder="" className={styles.Show_spent} disabled/>
                    </div>

                    <div className={styles.Download_data}>
                        <Image src={download} alt="" className={styles.download_data_img} />
                        <button className={styles.download_data_btn}>Скачать статистику за месяц</button>
                    </div>
                </div>


                <div className={styles.Applications}>
                    <div >
                        <h1 className={styles.Applications_accept}>
                            Подтвержденные заявки
                        </h1>
                    </div>

                    
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