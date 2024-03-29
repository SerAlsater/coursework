import styles from "./style.module.css"

export default function Container({
  children,
  blockType,
  className,
} : { 
  children: React.ReactNode,
    blockType?: string,
  className?: string,
}) {

  let container_styles = styles.container;
  if (blockType) {
    container_styles += " " + styles[blockType];
  }

  if (className) {
    container_styles += " " + className;
  }

  return (
    <div className={container_styles}>
      {children}
    </div>
  )
}