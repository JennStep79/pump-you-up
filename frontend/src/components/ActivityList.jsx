import React from 'react';
import ActivityDetail from './ActivityDetail';

const ActivityList = ({ activities }) => {
  return (
    <div>
      {activities.map((activity) => (
        <ActivityDetail key={activity.id} activity={activity} />
      ))}
    </div>
  );
};

export default ActivityList;