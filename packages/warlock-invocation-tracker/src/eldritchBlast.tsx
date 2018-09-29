import * as React from 'react'
import Checkbox from './checkbox'
import RenderIf from './renderIf'
import { ActiveInvocations, Invocation } from './model'

const eldritchBlastBeams = (level: number) : number => {
  if (level >= 17) { return 4 }
  else if (level >= 11) { return 3 }
  else if (level >= 5) { return 2 }
  else return 1
}

interface EffectProps {
  effect: string
  invocation: string
}

interface PluralizedProps {
  value: number
  text: string
  plural: string
}

interface EldritchBlastProps {
  activeInvocations: ActiveInvocations
  checked: boolean
  invocations: Array<Invocation>
  level: number
  onChange: (checked: boolean) => void
  className: string
}

const Effect: React.SFC<EffectProps> = ({ effect, invocation }) =>
  <li>
    <span><span className="description">{effect}</span><span className="invocation">{invocation}</span></span>
  </li>

const Pluralized: React.SFC<PluralizedProps> = ({ value, text, plural }) =>
  <p><strong>{value}</strong>{` ${text}${value > 1 ? plural : ''}`}</p>

const EldritchBlast: React.SFC<EldritchBlastProps> = ({ activeInvocations, checked, invocations, level, onChange, className }) => (
  <section className={`eldritchBlast ${className}`}>
    <Checkbox
      value={checked}
      onChange={onChange}>
      <header>
        <div className="icon" />
        <h3>Eldritch Blast</h3>
      </header>
    </Checkbox>
    <RenderIf condition={() => checked}>
      <div>
        <Pluralized
          value={eldritchBlastBeams(level)}
          text="x 1d10 beam"
          plural="s" />
        <ul>
          {
            invocations
              .filter(i => activeInvocations[i.id] && i.eldritchBlast)
              .map(i => <Effect effect={i.effect} invocation={i.name} />)
          }
        </ul>
      </div>
    </RenderIf>
  </section>
)

export default EldritchBlast
