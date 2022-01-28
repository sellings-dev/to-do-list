import React, { useState } from 'react';
import './List.css';

import { ReactComponent as CheckBoxBlank } from '../../assets/icons/CheckBoxBlank.svg';
import { ReactComponent as CheckBoxFilled } from '../../assets/icons/CheckBoxFilled.svg';
import { ReactComponent as AddCircle } from '../../assets/icons/AddCircle.svg';
import { ReactComponent as Close } from '../../assets/icons/Close.svg';

const mock = [
  {
    description: 'Code a To-Do List in React',
    completed: true
  },
  {
    description: 'Commit to Github',
    completed: false
  }
]

export default function List(){
  const [data, setData] = useState(mock);
  const [isWriting, setIsWriting] = useState(false);
  const [inputText, setInputText] = useState('');

  const check = (index) => {
    const newData = [...data];
    newData[index].completed = true;
    setData(newData);
  }

  const remove = (index) => {
    const newData = [...data]
    newData.splice(index, 1);
    setData(newData);
  }

  const add = (description) => {
    const newData = [...data];
    newData.push({description, completed: false});
    setData(newData);
  }

  const handleChange = (event) => {
    setInputText(event.target.value);
  }

  const handleSubmit = (event) => {
    add(inputText);
    setInputText('');
    setIsWriting(false);
    event.preventDefault();
  }

  const generateList = (itemList) => {
    return itemList.map(
      (item, index) => {
        return(
          item.completed ?
            <div className='listItem completed' key={index}><CheckBoxFilled />{item.description}<button onClick={() => remove(index)}><Close /></button></div>
          :
            <div className='listItem' onClick={() => check(index)}><CheckBoxBlank />{item.description}</div>
        )
      })
  }

  return (
    <div className='list'>
      { generateList(data) }
      {
        isWriting ?
          <div className='listItem'><CheckBoxBlank /><form onSubmit={handleSubmit}><input type='text' onChange={handleChange} autoFocus /></form></div>
          :
          null
      }
      <AddCircle onClick={() => setIsWriting(true)} />
    </div>
  )
}