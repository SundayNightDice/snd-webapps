import * as React from 'react'
import EldritchBlast from './eldritchBlast'
import Invocations from './invocations'
import LevelSelector from './levelSelector'
import PactWeapon from './pactWeapon'
import RenderIf from './renderIf'
import { Model } from './model'
import patrons from './data/patrons'
import pacts from './data/pacts'

const proficiencyBonus = (level: number) : number => {
  if (level >= 17) { return 6 }
  else if (level >= 13) { return 5 }
  else if (level >= 9) { return 4 }
  else if (level >= 5) { return 3 }
  else return 2
};

interface AppProps {
  model: Model
  onActiveInvocationChange: (id: string, checked: boolean) => void
  onEldritchChange: (value: boolean) => void
  onPatronChange: (value: string) => void
  onPactChange: (value: string) => void
  onLevelChange: (value: number) => void
}

const App: React.SFC<AppProps> = ({
  model: { activeInvocations, eldritch, invocations, level, patron, pact },
  onActiveInvocationChange, onEldritchChange, onPatronChange, onPactChange, onLevelChange }) => (
    <div>
      <section>
        <div>
          <LevelSelector
            className="warlock-option"
            label="Level"
            value={level}
            onChange={onLevelChange} />
          <div className="warlock-option">
            Proficiency Bonus: <strong>{ `+${proficiencyBonus(level)}` }</strong>
          </div>
        </div>
        <div>
            <div className="warlock-option">
              <label>Patron: <select onChange={e => onPatronChange(e.target.value)}>
                <option value="">Select...</option>
                { patrons.map(p => <option value={p.name} key={p.name}>{p.value}</option>) }
              </select></label>
            </div>
          <RenderIf condition={() => level >= 3}>
            <div className="warlock-option">
              <label>Pact: <select onChange={e => onPactChange(e.target.value)}>
                <option value="">Select...</option>
                { pacts.map(p => <option value={p.name} key={p.name}>{p.value}</option>) }
              </select></label>
            </div>
          </RenderIf>
        </div>
        <div className="impacts">
          <EldritchBlast
            className="warlock-option"
            checked={eldritch}
            invocations={invocations}
            activeInvocations={activeInvocations}
            level={level}
            onChange={onEldritchChange} />
          <RenderIf condition={() => pact && pact.value === 'blade'}>
            <PactWeapon
              className="warlock-option"
              invocations={invocations}
              activeInvocations={activeInvocations} />
          </RenderIf>
        </div>
        <Invocations
          activeInvocations={activeInvocations}
          eldritch={eldritch}
          invocations={invocations}
          level={level}
          pact={pact}
          patron={patron}
          onChange={onActiveInvocationChange} />
      </section>
  </div>
  )

  export default App
