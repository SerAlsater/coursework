import styles from './header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.Name}>AutoCheck</h1>
            <h1 className={styles.avatar}></h1>
        </header>
    )
}