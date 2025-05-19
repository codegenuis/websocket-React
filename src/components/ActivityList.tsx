import React from 'react';

type Props = {
  activities: string[];
};

export const ActivityList: React.FC<Props> = ({ activities }) => (
  <ul>
    {activities.map((activity, index) => (
      <li key={index}>{activity}</li>
    ))}
  </ul>
);
