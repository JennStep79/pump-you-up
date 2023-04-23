import React, { useState } from 'react';

const AddActivity = ({ onAddActivity }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newActivity = { title, description, duration, date };
    onAddActivity(newActivity);
    setTitle('');
    setDescription('');
    setDuration('');
    setDate('');
  };

  return (
    <div>
      <h2>Add Activity</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={(
