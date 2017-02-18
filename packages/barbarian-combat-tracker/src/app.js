import React from 'react';
import Attack from './attack';
import Defense from './defense';

const proficiencyBonus = (level) => {
  if (level >= 17) { return 6; }
  else if (level >= 13) { return 5; }
  else if (level >= 9) { return 4; }
  else if (level >= 5) { return 3; }
  else return 2;
};

const App = ({
  model, onRageChange, onRecklessChange, onLevelChange, onGWMChange }) => (
    <article>
      <div className="options">
        <div>
          <label>Level: <input
            type="number"
            min="1"
            max="20"
            value={model.level}
            onChange={onLevelChange} /></label>
          <span>{`Proficiency Bonus: +${proficiencyBonus(model.level)}`}</span>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              id="raging"
              value={model.raging}
              onChange={onRageChange}
            />
            Raging
          </label>
          <label>
            <input
              type="checkbox"
              id="reckless"
              value={model.reckless}
              disabled={model.level === 1}
              onChange={onRecklessChange}
            />
            Reckless
          </label>
          <label>
            <input
              type="checkbox"
              id="reckless"
              value={model.gwm}
              onChange={onGWMChange}
            />
            Great Weapon Master
          </label>
        </div>
      </div>
      <div className="combat">
        <Attack model={model} />
        <Defense model={model} />
      </div>
    </article>
  );

  export default App;
