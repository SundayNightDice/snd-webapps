import * as React from 'react'
import Checkbox from './checkbox'
import RenderIf from './renderIf'
import { Invocation, ActiveInvocations, Pact, Patron } from './model'

const invocationsKnown = (level: number) => {
  if (level === 20) { return 8 }
  else if (level >= 15) { return 7 }
  else if (level >= 12) { return 6 }
  else if (level >= 9) { return 5 }
  else if (level >= 7) { return 4 }
  else if (level >= 5) { return 3 }
  else if (level >= 2) { return 2 }
  else return 0
}

interface InvocationsProps {
  activeInvocations: ActiveInvocations
  eldritch: boolean
  invocations: Array<Invocation>
  level: number
  patron: Patron
  pact: Pact
  onChange: (id: string, checked: boolean) => void
}

const Invocations: React.SFC<InvocationsProps> = ({ activeInvocations, eldritch, invocations, level, patron, pact, onChange }) => {
  const totalSelected = Object.keys(activeInvocations)
    .filter((x: any) => activeInvocations[x])
    .length
  const totalInvocations = invocationsKnown(level)
  return (
    <RenderIf condition={() => totalInvocations}>
      <div>
        <h3>Invocations Available</h3>
        <span>Invocations Known: <strong>{ totalInvocations }</strong></span>
        <ul>
          {
            invocations
              .filter(i => {
                const correctLevel = i.hasOwnProperty('minLevel') ? level >= i.minLevel : true
                const correctPact = i.hasOwnProperty('pact') ? i.pact === (pact || '') : true
                const correctPatron = i.hasOwnProperty('patron') ? i.patron === (patron || '') : true
                const eldritchBlast = i.hasOwnProperty('eldritchBlast') ? i.eldritchBlast === eldritch : true

                return correctLevel && correctPact && correctPatron && eldritchBlast;
              })
              .map(i =>
                <li key={i.id}>
                  <Checkbox
                    value={activeInvocations[i.id]}
                    disabled={activeInvocations[i.id] ? false : totalSelected === totalInvocations}
                    onChange={checked => onChange(i.id, checked)}>
                    { i.name }
                    { i.source ? ` [${i.source}]` : '' }
                  </Checkbox>
                </li>
              )
          }
        </ul>
      </div>
    </RenderIf>
  )
}

export default Invocations
