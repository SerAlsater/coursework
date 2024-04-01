"use client"
import Button from '@/components/std/Button'
import styles from './accept_actions.module.css'
import Image from 'next/image'

import accept_img from './accept.svg'
import decline_img from './decline.svg'
import axios from 'axios'
import { useRouter } from 'next/navigation';


type form_actions = {
  id: number,
  summ: number,
}

export default function AcceptActions(props: form_actions) {

  const router = useRouter();

  const config = {
    headers: {
      "Authorization": "Bearer " + process.env.NEXT_PUBLIC_API_KEY,
      "Content-Type": "application/json"
    }
}

  const update = (status: "accept" | "reject") => {
    const data = {data: {Status: status == "accept" ? "accepted" : "rejected"}};
    axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/tickets/${props.id}`, data, config).then(res => {

      if (status == "accept") {
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/budget`, config).then((response) => {

          let new_budget = response.data.data.attributes.Budget - props.summ;
  
          axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/budget`, JSON.stringify({data: {Budget: new_budget}}), config).then(res => router.push('/auth/login'));
  
        })
      }
    })
  }

  const accept = () => {
    update('accept');
  }

  const reject = () => {
    update('reject');
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