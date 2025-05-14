import React from 'react';
import styles from './styles.module.css';

type DefaultIndexProps = {
  id: string;
  labelText: string;
} & React.ComponentProps<'input'>;

export const DefaultIndex = ({
  id,
  labelText,
  type,
  ...rest
}: DefaultIndexProps) => {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>

      <input className={styles.input} id={id} type={type} {...rest} />
    </>
  );
};
