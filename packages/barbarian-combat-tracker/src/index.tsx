import * as React from 'react';
import { render } from 'react-dom';
import App from './app';
import { Model } from './model';
import './style.scss';

class Container extends React.Component<any, Model> {
  constructor(props: any) {
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
      onGWMChange={ (v) => this.onChange(v, 'gwm') } />;
  }

  onChange(value: any, prop: string) {
    this.setState({
      ...this.state,
      [prop]: value
    });
  }
}

const loader = document.getElementById('loader');
loader.parentNode.removeChild(loader);

render(
  <Container />,
  document.getElementById('root')
);
