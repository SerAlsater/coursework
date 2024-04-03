"use client"
import { useRouter } from 'next/navigation';
import Container from '../std/Container';
import styles from './header.module.css';
import { deleteCookie, getCookie } from 'cookies-next';

export default function Header() {

    const router = useRouter();
    const cookie_user = getCookie('user_data');

    const exit = () => {
        deleteCookie('user_data');
        router.refresh();
    }

    return (
        <header className={styles.header}>
            <Container className={styles.header}>
                <h1 className={styles.Name}>AutoCheck</h1>
                {cookie_user &&
                    <button className={styles.exit} onClick={exit}>Выход</button>
                }
            </Container>
        </header>
    )
}