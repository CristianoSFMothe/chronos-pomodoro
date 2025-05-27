import React from 'react';
import styles from './styles.module.css';

type DefaultButtonProps = {
  icon: React.ReactNode;
  color?: 'green' | 'red';
} & React.ComponentProps<'button'>;

export const DefaultButton = ({
  icon,
  color = 'green',
  className,
  ...props
}: DefaultButtonProps) => {
  return (
    <>
      <button
        className={`${styles.button} ${styles[color]}${
          className ? ` ${className}` : ''
        }`}
        {...props}
      >
        {icon}
      </button>
    </>
  );
};
