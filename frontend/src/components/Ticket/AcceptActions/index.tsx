"use client"
import Button from '@/components/std/Button'
import styles from './accept_actions.module.css'
import Image from 'next/image'

import accept_img from './accept.svg'
import decline_img from './decline.svg'

type form_actions = {
  id: number,
}

export default function AcceptActions(props: form_actions) {

  const accept = () => {
    console.log(props.id);
  }

  const reject = () => {
    console.log(props.id);
  }

  return (
    <div className={styles.wrapper}>
      <Button onClick={accept} style='transparent' className={styles.btn + " " + styles.accept}>
        <Image src={accept_img} alt='accept' className={styles.image}/>
      </Button>
      <Button onClick={reject} style='transparent' className={styles.btn + " " + styles.reject}>
        <Image src={decline_img} alt='reject' className={styles.image}/>
      </Button>
    </div>
  )
}