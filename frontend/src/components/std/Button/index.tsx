"use client"
import styles from "./button.module.css";

type props = {
    children: React.ReactNode;
    style: "primary" | "secondary" | 'white' | 'transparent';
    onClick?: () => void;
    className?: string;
    type?: "button" | "submit" | "reset";
};

export default function Button(props: props) {
    let button_styles = styles.button;

    button_styles += " " + styles[props.style];

    if (props.className) {
        button_styles += " " + props.className;
    }

    return (
        <button className={button_styles} onClick={props.onClick} type={props.type || "button"}>
            {props.children}
        </button>
    );
}