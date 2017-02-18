import React from 'react';

const Defense = ({ model: { raging, reckless, level }}) => (
  <section>
    <h2>Defending</h2>
    <ul>
      {
        reckless ?
          <li>Enemy has <strong>advantage</strong></li> :
          null
      }
      {
        raging ?
          <li>Resistance to <strong>bludgeoning, piercing and slashing</strong> damage</li> :
          null
      }
    </ul>
  </section>
);

export default Defense;
