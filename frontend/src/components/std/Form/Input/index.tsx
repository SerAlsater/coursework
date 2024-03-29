import { field } from "@/types/form"
import styles from "./input.module.css"

type props = {
  setting : field
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
}

export default function Input(props: props) {

  if (props.setting.type === 'textarea') {
    return (
      <textarea
        className={styles.textarea}
        name={props.setting.name}
        placeholder={props.setting.placeholder+(props.setting.required ? "*" : "")}
        onChange={props.onChange}
        required={props.setting.required}
      />
    )
  } else {
    return (
      <input
        className={styles.input}
        name={props.setting.name}
        type={props.setting.type}
        placeholder={props.setting.placeholder+(props.setting.required ? "*": "")}
        onChange={props.onChange}
        required={props.setting.required}
        min={1}
      />
    )
  }
}