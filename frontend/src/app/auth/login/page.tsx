"use client"
import { hasCookie, setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { ChangeEventHandler, useState } from "react";
import axios, { AxiosError } from "axios";
import Header from "@/components/Header";
import styles from "./auth.module.css"
export default function login() {
    return (
        <div className={styles.main}>
            <Header/>
            <div className={styles.container}>
                <div className={styles.authorize}>
                    <h1 className={styles.EnterWord}>Вход</h1>
                    
                    <div className={styles.Login}>
                        <h3 className={styles.LoginWord}>Логин</h3>
                        <input type="text" className={styles.LoginInput}/>
                    </div>

                    <div className={styles.Password}>
                        <h3 className={styles.PasswordWord}>Пароль</h3>
                        <input type="password" className={styles.PasswordInput}/>    
                    </div>    

                    <button className={styles.Button}>Вход</button>    
                    
                </div>
            </div>
            
        </div>
    )
}
