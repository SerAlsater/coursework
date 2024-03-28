import Header from "../components/Header"
import styles from "./departmen.module.css"
import Image from "next/image"
import accept from "./accept.svg"
import decline from "./decline.svg"

export default function Department() {
    return (
        <div>
            <Header/>
            <div className={styles.container}>
                <div className={styles.budget_balance}>
                    <h1 className={styles.budget_balance_word}>Остаток бюджета</h1>
                    <input type="text" placeholder="1000" className={styles.budget_balance_value} disabled/>
                </div>
            </div>

            <div className={styles.Applications}>
                    <div >
                        <h1 className={styles.Applications_accept}>
                            Ожидают подтверждения
                        </h1>
                    </div>

                    <div className={styles.Applications_card}>
                        <div className={styles.photo}>
                            <img src="./pens.jpg"/>
                        </div>
                        <div className={styles.data_about_goods}>
                            <div className={styles.worker}>
                                <h4>Сотрудник</h4>
                                <h4>Иванов Иван Иванович</h4>
                            </div>

                            <div className={styles.goods}>
                                <h4>Товар</h4>
                                <h4>Ручка</h4>
                            </div>

                            <div className={styles.count}>
                                <h4>Количество</h4>
                                <h4>100</h4>
                            </div>

                            <div className={styles.price}>
                                <h4>Цена</h4>
                                <h4>1000</h4>
                            </div>

                            <div className={styles.summ}>
                                <h4>Сумма</h4>
                                <h4>10000</h4>
                            </div>

                            <div className={styles.status}>
                                <h4>Статус</h4>
                                <Image src={accept} alt=""/>
                                <h4>Подтверждена</h4>
                            </div>
                            
                        </div>
                        <div className={styles.buttons}>
                            <button className={styles.Accept}>
                                <Image className={styles.Accept_mark} src={accept} alt=""/>
                            </button>
                            <button className={styles.Decline}>
                                <Image className={styles.Decline_mark} src={decline} alt=""/>
                            </button>
                        </div>
                        
                    </div>
                </div>
        </div>
        
    )
}