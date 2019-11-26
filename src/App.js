import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    value: 0
  };

  onChange = event => {
    this.setState({
      value: event.target.value
    });
    console.log(this.state.value);
  };

  render() {
    return (
      <div className='timer'>
        <div>00:00:00:00</div>
        <div>
          <form>
            <input
              id='numLabel'
              value={this.state.value}
              onChange={this.onChange}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
