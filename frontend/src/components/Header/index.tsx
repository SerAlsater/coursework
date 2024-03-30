import Container from '../std/Container';
import styles from './header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <Container className={styles.header}>
                <h1 className={styles.Name}>AutoCheck</h1>
                <div className={styles.avatar}></div>
            </Container>
        </header>
    )
}