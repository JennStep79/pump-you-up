import React from 'react';

const ActivityDetails = ({ activity }) => {
  return (
    <div>
      <h2>{activity.title}</h2>
      <p>{activity.description}</p>
      <p>{activity.duration}</p>
      <p>{activity.date}</p>
    </div>
  );
};

export default ActivityDetails;