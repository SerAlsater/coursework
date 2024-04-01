import Image, { StaticImageData } from "next/image"
import Card from "../std/Card"

import styles from './ticket.module.css'
import AcceptActions from "./AcceptActions"
import TicketForm from "./TicketForm"

import test_img from "./pen.svg"

export type ticket_data = {
  type: "info" | "accept" | "form"
  img: string,
  description_info: {
    product: string,
    price: number,
    employer?: string,
    count?: number,
    status?: "pending" | "accepted" | "rejected"
  },
  accept_id?: number,
  form_actions?: {
    onSend: (count?: number) => void
  }
}

export default function Ticket(props: ticket_data) {

  return (
    <Card style="gray" className={styles.wrapper + " " + (props.type == "form" && styles.form_wrapper)}>
      <div className={styles.flex_wrapper}>
        <Image src={`${process.env.NEXT_PUBLIC_API_URL}${props.img}`} alt="ticket_img" className={styles.image} height={250} width={250}/>
        <div className={styles.description}>
          {
            props.type == "form" ? 
            <><h3>{props.description_info.product}</h3><h3>{props.description_info.price}р</h3></>
            :
            <>
            {Object.keys(props.description_info).map(key => 
              <div className={styles.desc_item} key={"item_" + key}>
                <h3>{key}</h3>
                {/*@ts-ignore*/}
                <h3>{props.description_info[key]}</h3>
              </div>
            )}
            {
              props.type == "info" &&
              <>
              <hr className={styles.hr}/>
              <div className={styles.desc_item}>
                <h3>Стоимость</h3>
                {/*@ts-ignore*/}
                <h3>{props.description_info.price * props.description_info.count}р</h3>
              </div>
              </>
            }
            </>
          }
        </div>
        {
          (props.type == "accept" && props.accept_id) && <AcceptActions id={props.accept_id} summ={props.description_info.price * (props.description_info.count || 1)}/>
        }
      </div>
      {
        (props.type == "form" && props.form_actions) && <TicketForm onSend={props.form_actions.onSend}/>
      }
    </Card>
  )
}