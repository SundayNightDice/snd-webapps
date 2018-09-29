import * as React from 'react'
import { ActiveInvocations, Invocation } from './model'

interface EffectProps {
  effect: string
  invocation: string
}

interface PactWeaponProps {
  activeInvocations: ActiveInvocations
  invocations: Array<Invocation>
  className: string
}

const Effect: React.SFC<EffectProps> = ({ effect, invocation }) =>
  <li>
    <span><span className="description">{effect}</span><span className="invocation">{invocation}</span></span>
  </li>

const PactWeapon: React.SFC<PactWeaponProps> = ({ activeInvocations, invocations, className }) => (
  <section className={`pactWeapon ${className}`}>
    <header>
      <div className="icon" />
      <h3>Pact Weapon</h3>
    </header>
    <ul>
      {
        invocations
          .filter(i => activeInvocations[i.id] && i.pact === 'blade' && i.effect)
          .map(i => <Effect effect={i.effect} invocation={i.name} />)
      }
    </ul>
  </section>
)

export default PactWeapon
