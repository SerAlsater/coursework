import { ReactNode } from "react";
import styles from './overlay.module.css'
import Container from "../Container";
export default function Overlay({children, close}: {children:ReactNode, close: () => void}) {

  return (
  <div className={styles.overlay} onClick={(event) => {event.preventDefault(); close();}}>
    <Container>
      <div onClick={event => event.stopPropagation()}>
        {children}
      </div>
    </Container>
  </div>)
}