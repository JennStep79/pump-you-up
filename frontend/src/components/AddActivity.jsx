import React, { useState } from 'react';

const AddActivity = (props) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const activity = {
      name: name,
      description: description,
      date: date,
      duration: duration,
    };
    props.onAdd(activity);
    setName('');
    setDescription('');
    setDate('');
    setDuration('');
  };

  return (
    <div>
      <h2>Add Activity</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <label>
          Description:
          <input type="text" value={description} onChange={(event) => setDescription(event.target.value)} />
        </label>
        <label>
          Date:
          <input type="text" value={date} onChange={(event) => setDate(event.target.value)} />
        </label>
        <label>
          Duration:
          <input type="text" value={duration} onChange={(event) => setDuration(event.target.value)} />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddActivity;
