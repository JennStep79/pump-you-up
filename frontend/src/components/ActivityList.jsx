import React from 'react';
import ActivityDetail from './ActivityDetail';
import Nav from './NavBar'

import { useEffect, useState } from 'react';



function ActivityList() {
  const [activities, setActivities] = useState(null);
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch('http://localhost:4000/data')
        const JSON = await response.json()
        setActivities(JSON)
      }
      fetchData()
    }, [])

    return (
      <div>
        <Nav />
        {activities.length > 0 ? (
          <div className="activity-list">
            {activities.map((activity) => (
              <ActivityDetail key={activity.id} activity={activity} />
            ))}
          </div>
        ) : (
          <div className="loading-message">Loading activities...</div>
        )}
      </div>
    );
  
    // fetch activities data and update state using setActivities
  }



export default ActivityList;