"use client"
import { hasCookie, setCookie, getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { ChangeEventHandler, useState } from "react";
import axios, { AxiosError } from "axios";
import styles from "./auth.module.css"
import { user } from "@/types/form";
export default function login() {
    const router = useRouter();

    const cookie_user = getCookie('user_data');
    if (cookie_user) {
        const data = JSON.parse(cookie_user);
        if (data.Role) router.push('/' + data.Role);
        
	}

    const [login, set_login] = useState<user>({
        Login: "",
        Password: "",
        FIO: "",
        Role: ""
    })

    const [errors, set_errors] = useState<Array<string>>([]);

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e: any) => {
        const {name, value} = e.target;

        set_login(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const send = () => {
        const err = []

        if (login.Login == "") {
            err.push("Login")
        }

        if (login.Password == "") {
            err.push("Password")
        }

        if (err.length > 0) {
            set_errors(err);
            return
        }

        set_errors([]);

        axios.post('/api/login', JSON.stringify({login: login.Login, password: login.Password})).then(res => {
            setCookie('user_data', res.data);
            router.refresh();
        }).catch((err: AxiosError) => {
            if (err.response) {
                const status = err.response.status;

                if (status === 404) {
                    set_errors(['Login']);
                }

                if (status === 301) {
                    set_errors(['Password']);
                }
            }
        })
    }

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.authorize}>
                    <h1 className={styles.EnterWord}>Вход</h1>
                    
                    <div className={styles.Login}>
                        <h3 className={styles.LoginWord}>Логин</h3>
                        <input type="text" className={styles.LoginInput + " " + (errors.includes("Login") && styles.err)} name="Login" value={login.Login} onChange={handleChange}/>
                    </div>

                    <div className={styles.Password}>
                        <h3 className={styles.PasswordWord}>Пароль</h3>
                        <input type="password" className={styles.PasswordInput  + " " + (errors.includes("Password") && styles.err)} name="Password" value={login.Password} onChange={handleChange}/>    
                    </div>    

                    <button className={styles.Button} onClick={send}>Вход</button>    
                    
                </div>
            </div>
            
        </div>
    )
}
