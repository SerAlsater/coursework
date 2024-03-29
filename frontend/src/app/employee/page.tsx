import Header from "@/components/Header"
import add from "./add.svg"
import styles from "./employee.module.css"
import Image from "next/image"
import clock from "./clock.svg"
import photo from "./pns.jpg"
import accept from "./accept.svg"

export default function Employee() {
    return (
        <div className={styles.main}>
            <Header/>

            {/* <div className={styles.Applications}>
                    <div >
                        <h1 className={styles.My_Applications}>
                            Мои заявки
                        </h1>
                    </div>

                    <div className={styles.Await_Applications_card}>
                        <div>
                            <Image className={styles.photo} src={"./pens.jpg"} alt=""/>
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
                                <Image src={clock} alt=""/>
                                <h4>Ожидает ответа</h4>
                            </div>
                            
                        </div>
                        
                    </div>
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
                    <div className={styles.found_applic}>
                        <div className={styles.photo_name}>
                            <Image alt="" src={photo} className={styles.photo_find}/>
                            <div className={styles.name_appl}>
                                <h3>Ручка</h3>
                                <h3>100р</h3>
                            </div>
                        </div>
                        <div className={styles.count_much}>
                            <input type="text" className={styles.count_input}/>
                            <button className={styles.plus_count}>
                                <Image src={add} alt="" className={styles.add_img}/>
                            </button>
                        </div>
                    </div>
                </div>


                <div className={styles.Applications}>
                    <div >
                        <h1 className={styles.History_Applications}>
                            История заявок
                        </h1>
                    </div>

                    <div className={styles.Accept_Applications_card}>
                        <div>
                            <Image className={styles.photo} src={"./pens.jpg"} alt=""/>
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
                </div> */}

        </div>
    )
}