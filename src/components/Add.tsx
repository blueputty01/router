import React from 'react';
import addIcon from '../icons/add.png';
import './Add.scss';

export default function Add() {
  return (
    <button>
      <img src={addIcon} alt="add-icon" /> New Note
    </button>
  );
}
