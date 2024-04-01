'use client';
import React, { useState, MouseEvent } from 'react';
import { Hamburger, Cross } from './Icons';

export default function MobileNavMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  }

  return (
    <button
      className='absolute top-8 right-6 -translate-y-2/4'
      onClick={menuHandler}
    >
      { isOpen ?
        <Cross />
        : <Hamburger />
      }
      <div>

      </div>
    </button>
  );
}