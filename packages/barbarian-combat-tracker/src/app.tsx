import * as React from 'react';
import { Model } from './model'
import Checkbox from './checkbox';
import RenderIf from './renderIf';

const proficiencyBonus = (level: number) : number => {
  if (level >= 17) { return 6; }
  else if (level >= 13) { return 5; }
  else if (level >= 9) { return 4; }
  else if (level >= 5) { return 3; }
  else return 2;
};

const rages = (level: number) : string | number => {
  if (level === 20) { return "Unlimited"; }
  else if (level >= 17) { return 6; }
  else if (level >= 12) { return 5; }
  else if (level >= 6) { return 4; }
  else if (level >= 3) { return 3; }
  else return 2;
};

const rageDamage = (level: number) : number => {
  if (level >= 16) { return 4; }
  else if (level >= 9) { return 3; }
  else return 2;
};

const brutalCritical = (level: number) : number => {
  if (level >= 17) { return 3; }
  else if (level >= 13) { return 2; }
  else if (level >= 9) { return 1; }
  else return 0;
};

interface AppProps {
  model: Model
  onRageChange: (value: boolean) => void
  onRecklessChange: (value: boolean) => void
  onLevelChange: (value: number) => void
  onGWMChange: (value: boolean) => void
}

const App: React.SFC<AppProps> = ({
  model: { level, raging, reckless, gwm },
  onRageChange, onRecklessChange, onLevelChange, onGWMChange }) => (
    <div>
      <section>
        <div>
          <label>Level: <input
            type="number"
            min="1"
            max="20"
            value={level}
            onChange={e => {onLevelChange(Number(e.target.value))}} /></label>
          <ul>
            <li>Proficiency Bonus: <strong>{ `+${proficiencyBonus(level)}` }</strong></li>
            <li>Rages: <strong>{ rages(level) }</strong></li>
            <RenderIf condition={ () => level >= 5 }>
                <li><strong>2</strong> attacks</li>
            </RenderIf>
            <RenderIf condition={ () => level >= 9  }>
                <li>{ `Brutal Critical: ${brutalCritical(level)} extra weapon damage dice` }</li>
            </RenderIf>
          </ul>
        </div>
        <div>
          <Checkbox
            label="Raging"
            disabled={false}
            value={raging}
            onChange={onRageChange} />
          <RenderIf condition={() => raging }>
            <ul>
              <li><strong>{ `+${rageDamage(level)}` }</strong> damage</li>
              <li>Resistance to <strong>bludgeoning, piercing & slashing</strong> damage</li>
            </ul>
          </RenderIf>
        </div>
        <div>
          <Checkbox
            label="Reckless"
            disabled={level < 2}
            value={reckless && level >= 2}
            onChange={onRecklessChange} />
          <RenderIf condition={() => reckless && level >= 2 }>
            <ul>
              <li>First Attack has <strong>advantage</strong></li>
              <li>Enemy has <strong>advantage</strong></li>
            </ul>
          </RenderIf>
        </div>
        <div>
          <Checkbox
            label="Great Weapon Master"
            disabled={false}
            value={gwm}
            onChange={onGWMChange} />
          <RenderIf condition={ () => gwm }>
            <ul>
              <li><strong>-5</strong> to hit</li>
              <li><strong>+10</strong> damage</li>
              <li>On Critical, 1 melee weapon attack as a Bonus Action</li>
            </ul>
          </RenderIf>
        </div>
      </section>
  </div>
  );

  export default App;
