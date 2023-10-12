import { FC } from 'react'
import styles from './Tag.module.scss'
const TagComponent: FC<{ text: string }> = (props) => {
  return <div className={styles.tag}>{props.text} </div>
}

export { TagComponent }
