import * as React from 'react'

interface CheckboxProps {
  value: boolean
  onChange: (checked: boolean) => void
  disabled?: boolean
  label: string
}


const Checkbox: React.SFC<CheckboxProps> = ({ value, onChange, disabled, label }) => (
  <label className={disabled ? 'disabled' : ''}>
    <input
      type="checkbox"
      value={value ? 'checked' : 'unchecked'}
      disabled={disabled}
      onChange={ e => {onChange(e.target.checked)} } />
    {label}
  </label>
)

export default Checkbox
