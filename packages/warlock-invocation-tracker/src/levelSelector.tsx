import * as React from 'react'

interface LevelSelectorProps {
  value: number
  onChange: (value: number) => void
  label: string
  className: string
}

const LevelSelector: React.SFC<LevelSelectorProps> = ({ value, onChange, label, className }) => (
  <label className={className}>
    {`${label}: `}
    <input
      type="number"
      min="1"
      max="20"
      value={value}
      onChange={ e => {onChange(Number(e.target.value))} } />
  </label>
)

export default LevelSelector;
