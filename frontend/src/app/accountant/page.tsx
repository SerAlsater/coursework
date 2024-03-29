import Header from "@/components/Header"
import styles from "./accountant.module.css"
import download from "./download_data.svg"
import accept from "./accept.svg"
import Image from "next/image"
import pens from "./pens.jpg"


export default function Accountant() {
    return (
        <div>
            <Header/>
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

                    <div className={styles.Applications_card}>
                        <div >
                            {/* <Image className={styles.photo} src={pens} alt=""/> */}
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
                    </div>
                </div>
            </div>
            
        </div>
    )
}