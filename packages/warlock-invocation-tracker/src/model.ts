export interface Invocation {
  id: string
  name: string
  eldritchBlast?: boolean
  effect?: string
  minLevel?: number
  pact?: string
  patron?: string
  source?: string
  tome?: string
}

export interface Pact {
  name: string
  value: string
}

export interface Patron {
  name: string
  value: string
}

interface Map<T> {
  [key: string]: T
}

export interface ActiveInvocations extends Map<boolean> {}

export interface Model {
    activeInvocations: ActiveInvocations
    eldritch: boolean
    invocations: Array<Invocation>
    level: number
    patron: Patron
    pact: Pact
  }