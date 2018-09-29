import * as React from 'react';
import { render } from 'react-dom';
import App from './app';
import { Model, ActiveInvocations } from './model'
import invocations from './data/invocations';
import './style.scss';

class Container extends React.Component<any, Model> {
  constructor(props: any) {
    super(props);

    this.state = {
      level: 1,
      pact: null,
      patron: null,
      eldritch: false,
      invocations: invocations,
      activeInvocations: invocations.reduce((map: ActiveInvocations, obj) => {
        map[obj.id] = false;
        return map;
      }, {})
    };
    this.onChange = this.onChange.bind(this);
    this.onActiveInvocationChange = this.onActiveInvocationChange.bind(this);
  }

  render() {
    return <App
      model={this.state}
      onPactChange={ (v) => this.onChange(v, 'pact') }
      onPatronChange={ (v) => this.onChange(v, 'patron') }
      onLevelChange={ (v) => this.onChange(v, 'level') }
      onEldritchChange={ (checked) => this.onChange(checked, 'eldritch') }
      onActiveInvocationChange={this.onActiveInvocationChange} />;
  }

  onChange(value: any, prop: string) {
    this.setState({
      ...this.state,
      [prop]: value
    });
  }

  onActiveInvocationChange(id: string, checked: boolean) {
    const nextState = this.state;
    nextState.activeInvocations[id] = checked;
    this.setState(nextState);
  }
}

const loader = document.getElementById('loader');
loader.parentNode.removeChild(loader);

render(
  <Container />,
  document.getElementById('root')
);
