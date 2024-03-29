import Ticket, { ticket_data } from "@/components/Ticket"
import styles from './test.module.css'
import Container from "@/components/std/Container"

export default function Test() {
  const data1: ticket_data = {
    type: "info",
    img: "./pen.png",
    description_info: {
      employer: "Иванов. Б.Р.",
      product: "Ручка",
      count: 100,
      price: 100,
      status: "pending",
    }
  }

  const data2: ticket_data = {
    type: "accept",
    img: "./pen.png",
    description_info: {
      employer: "Иванов. Б.Р.",
      product: "Ручка",
      count: 100,
      price: 100,
      status: "pending",
    },
    accept_id: 2
  }

  const data3: ticket_data = {
    type: "form",
    img: "./pen.png",
    description_info: {
      product: "Ручка",
      price: 100
    }
  }

  return(
    <Container>
      <div className={styles.wrapper}>
        <Ticket {...data1}/>

        <Ticket {...data2}/>

        <Ticket {...data3}/>
      </div>
    </Container>
  )
}