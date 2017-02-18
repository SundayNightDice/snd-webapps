import React from 'react';
import { render } from 'react-dom';
import App from './app';
import './style.css';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 1,
      raging: false,
      reckless: false,
      gwm: false
    };
    this.onChange = this.onChange.bind(this);
  }

  render() {
    return <App
      model={this.state}
      onRageChange={ (e) => this.onChange(e, 'raging') }
      onRecklessChange={ (e) => this.onChange(e, 'reckless') }
      onLevelChange={ (e) => this.onChange(e, 'level') }
      onGWMChange={ (e) => this.onChange(e, 'gwm') } />;
  }

  onChange({ target }, val) {
    const nextState = this.state;
    nextState[val] = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(nextState);
  }
}

const loader = document.getElementById('loader');
loader.parentNode.removeChild(loader);

render(
  <Container />,
  document.getElementById('root')
);
