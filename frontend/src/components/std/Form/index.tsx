"use client"

import { useState } from "react"

import Button from "../Button"
import Input from "./Input"

import styles from "./form.module.css"

import form_labels from "./labels.json"
import get_labels from "@/functions/get_labels"

import send_message from "./send_msg"
import CloseImg from "./close"
import { field } from "@/types/form"

type props = {
  fields: field[],
  button_style: "transparent" | "primary" | "secondary" | "white",
  button_text: string,
  curr_lang: string
  action?: () => void,
  success?: React.ReactNode,
  id?: string,
  className?: string,
  btn_className?: string
}

export default function Form(props: props) {

  const labels = get_labels(form_labels, props.curr_lang)

  let input_values : any = {}
  props.fields.map(field => {
    input_values[field.name] = "";
  })

  const [form_data, set_form_data] = useState(input_values)

  const handle_change = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    event.preventDefault();
    const {name, value} = event.target;

    set_form_data((prev : any) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const inputs = props.fields.map((field, index) => {
    return <Input onChange={handle_change} setting={field} key={'form_input_'+field.name+index}/>
  })

  const [show_answer, set_show_answer] = useState("");
  const [sended, set_sended] = useState(false);

  const handle_submit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    set_sended(true);

    let errored = []
    const email_regexp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

    //@ts-ignore
    const target = (e.target as typeof e.target).childNodes.forEach((node: HTMLInputElement) => {
      if (node.required && form_data[node.name] === "") {
        errored.push(node.name)
      }

      (node.type == "email" && !email_regexp.test(form_data[node.name])) && errored.push(node.name)
    });

    
    if (errored.length == 0) {
      set_sended(false);
      props.action && props.action();

      set_show_answer(prev => {
        return("success");
      })
    }
  }

  return (
  <form className={styles.form + " " + (sended && styles.sended) + " " + (props.className && props.className)} id={props.id} onSubmit={handle_submit} noValidate>
    {inputs}
    <Button type="submit" style={props.button_style} className={styles.form_btn + " " + (props.btn_className && props.btn_className)}>{props.button_text}</Button>
    {
      show_answer &&
      <div className={styles.answer}>
        <button className={styles.close} onClick={() => {set_show_answer(prev => "")}}>
          <CloseImg/>
        </button>
        {
          show_answer == "error" &&
          <div className={styles.message_block}>
            <h2>{labels.error}</h2>
            <p className={styles.message_desc}>{labels.error_desc}</p>
          </div>
        }
        {
          show_answer == "success" &&
          (
            props.action ?
            props.success :
            <div className={styles.message_block}>
              <h2>{labels.thanks}</h2>
              <p className={styles.message_desc}>{labels.contact}</p>
            </div>
          )
        }
      </div>
    }
  </form>
  )
}