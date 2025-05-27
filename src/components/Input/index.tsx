import React from 'react';
import styles from './styles.module.css';

type DefaultIndexProps = {
  id: string;
  labelText: string;
} & React.ComponentProps<'input'>;

export const DefaultInput = ({
  id,
  labelText,
  type,
  className,
  ...rest
}: DefaultIndexProps) => {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>

      <input
        className={`${styles.input} ${className ? `${className}` : ''}`}
        id={id}
        type={type}
        {...rest}
      />
    </>
  );
};
