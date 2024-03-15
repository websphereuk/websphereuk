import React from 'react'
import styles from './card.module.css' ;

interface CardProps {
  children: any;
  className:any;
  id?:string;
}
export const Card: React.FC<CardProps> = ({ children , className , id}) => {
  return (
    <div id={id} className={`${styles.card} ${className}`}>
      {children}
    </div>
  )
}
