import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div className="sistema-solar" data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="planetas">
          { Planets.map((i) => (
            <PlanetCard
              key={ i.name }
              planetName={ i.name }
              planetImage={ i.image }
            />
          )) }
        </div>
      </div>
    );
  }
}

export default SolarSystem;
