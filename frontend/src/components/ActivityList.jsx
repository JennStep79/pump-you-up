import React from 'react';
import ActivityDetails from './ActivityDetails';

const ActivityList = ({ activities }) => {
  return (
    <div>
      {activities.map((activity) => (
        <ActivityDetails key={activity.id} activity={activity} />
      ))}
    </div>
  );
};

export default ActivityList;