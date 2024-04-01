'use client';
import React, { useState, MouseEvent } from 'react';
import { Hamburger, Cross } from './Icons';
import styles from '../styles/MobileNavMenu.module.css'

export default function MobileNavMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(isOpen)
    setIsOpen(!isOpen);
  }

  return (
    <button
      className='absolute top-8 right-6 -translate-y-2/4'
      onClick={menuHandler}
    >
      <div className={`${isOpen ? '' : 'hidden'}`}>
        <Cross />
      </div>
      <div className={`${isOpen ? `hidden` : ``} `}>
        <Hamburger />
      </div>
      <div>

      </div>
    </button>
  );
}