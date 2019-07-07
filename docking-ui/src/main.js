import React from 'react'
import ReactDOM from 'react-dom'
import DockingUI from './components/DockingUI'


class App extends React.Component {
  render() {
    return (
      <DockingUI />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));


