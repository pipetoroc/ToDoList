import React from 'react';
import {ToDoIcon} from './ToDoIcon';

function CompleteIcon({completed, onComplete}) {
  return (
    <ToDoIcon
      type="check"
      color = {completed ? '#008000' : 'white'}
      onClick = {onComplete}
    />
  )
}

export {CompleteIcon}; 

function DeleteIcon({ onDelete}) {
  return (
    <ToDoIcon
      type="delete"
      onClick = {onDelete}
    />
  );
}

export {DeleteIcon}; 

