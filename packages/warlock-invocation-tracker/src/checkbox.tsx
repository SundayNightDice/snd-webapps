import * as React from 'react'

interface CheckboxProps {
  value: boolean
  onChange: (checked: boolean) => void
  disabled?: boolean
  children: React.ReactNode
}

const Checkbox: React.SFC<CheckboxProps> = ({ value, onChange, disabled, children }) => (
  <label className={disabled ? 'disabled' : ''}>
    <input
      type="checkbox"
      value={value ? 'checked' : 'unchecked'}
      disabled={disabled}
      onChange={ e => {onChange(e.target.checked)} } />
    {children}
  </label>
)

export default Checkbox
