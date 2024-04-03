"use client"

import Input from "@/components/std/Form/Input"
import add_img from "./add.svg"
import styles from "./ticket_form.module.css"
import Form from "@/components/std/Form"

type form_actions = {
  onSend: (count?: number) => void
}

export default function TicketForm(props: form_actions) {
  return (
    <div className={styles.form}>
      <Form 
        fields={[{
          name: "count",
          type: "number",
          placeholder: "Введите количество",
          required: true
        }]} 
        button_style={"primary"}
        button_text={"+"}
        curr_lang={"ru"}
        action={props.onSend}
        className={styles.form}
        success={<p>Заявка принята</p>}
        btn_className={styles.btn}
      />
    </div>
  )
}