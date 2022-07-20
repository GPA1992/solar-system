import React from 'react';
import Title from './Title';
import MissionsCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <div className="missoes">
          { missions.map((i) => (
            <MissionsCard
              key={ i.name }
              name={ i.name }
              year={ i.year }
              country={ i.country }
              destination={ i.destination }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Missions;
