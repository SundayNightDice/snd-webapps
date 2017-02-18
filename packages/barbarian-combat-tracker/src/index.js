import React from 'react';
import { render } from 'react-dom';
import App from './app';
import './style.scss';
import { version } from '../package.json';

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
      onRageChange={ (v) => this.onChange(v, 'raging') }
      onRecklessChange={ (v) => this.onChange(v, 'reckless') }
      onLevelChange={ (v) => this.onChange(v, 'level') }
      onGWMChange={ (v) => this.onChange(v, 'gwm') }
      version={version} />;
  }

  onChange(value, prop) {
    const nextState = this.state;
    nextState[prop] = value;
    this.setState(nextState);
  }
}

const loader = document.getElementById('loader');
loader.parentNode.removeChild(loader);

render(
  <Container />,
  document.getElementById('root')
);
