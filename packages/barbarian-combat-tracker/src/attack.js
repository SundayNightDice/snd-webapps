import React from 'react';

const rageDamage = (level) => {
  if (level >= 16) { return 4; }
  else if (level >= 9) { return 3; }
  else return 2;
};

const brutalCritical = (level) => {
  if (level >= 17) { return 3; }
  else if (level >= 13) { return 2; }
  else if (level >= 9) { return 1; }
  else return 0;
};

const RenderIf = ({ condition, children }) => {
  if (condition()) {
    return children;
  }
  return null;
};

const Attack = ({ model: { raging, reckless, level, gwm }}) => (
  <section>
    <h2>Attacking</h2>
    <RenderIf condition={() => level >= 5}>
      <p><strong>2</strong> attacks</p>
    </RenderIf>

    <h3>Attack Roll</h3>
    <ul>
      <RenderIf condition={() => reckless }>
        <li>Attack with <strong>advantage</strong></li>
      </RenderIf>
      <RenderIf condition={() => gwm}>
        <li>-5</li>
      </RenderIf>
    </ul>

    <h3>Damage Roll</h3>
    <ul>
      <RenderIf condition={() => raging }>
        <li>{ `Rage Damage: +${rageDamage(level)} - melee weapons using Strength` }</li>
      </RenderIf>
      <RenderIf condition={() => gwm}>
        <li>Great Weapon Master Damage: +10</li>
      </RenderIf>
    </ul>

    <h3>Critical Hits</h3>
    <ul>
      <RenderIf condition={() => level >= 9  }>
        <li>{ `Brutal Critical: ${brutalCritical(level)} extra weapon damage dice` }</li>
      </RenderIf>
      <RenderIf condition={() => gwm}>
        <li>On critical hit with melee weapon, when reducing creature to 0HP: 1 melee weapon attack as bonus action</li>
      </RenderIf>
    </ul>
  </section>
);

export default Attack;
