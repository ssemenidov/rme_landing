import {FC} from 'react';
import styles from './Button.module.scss';

const Button: FC<{
  text: string,
  size?: 'md' | 'lg'
}> = ({text, size}) => {
  return (
    <button className={`${styles.button} ${size === 'md' ? styles.buttonMd : styles.buttonLg}`}>{text}</button>
  );
};

Button.defaultProps = {
  size: 'lg'
}

export {Button};