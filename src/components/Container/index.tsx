import React from 'react';
import './styles.css';

type ContainerProps = {
  children: React.ReactNode;
};

function Container({ children }: ContainerProps) {
  return (
    <div className='container'>
      <div className='content'>{children}</div>
    </div>
  );
}

export default Container;
