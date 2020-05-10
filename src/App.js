import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    inputValue: ''
  };

  inputChangedHandler = event => {
    this.setState({inputValue: event.target.value})
  }

  removeCharHandler = index => {
    const inputChars = this.state.inputValue.split('')
    inputChars.splice(index, 1);
    this.setState({inputValue: inputChars.join('')});
  };

  render() {

    let chars = null;

    if (this.state.inputValue.length > 0) {
      chars = (
        <div>
          {
            this.state.inputValue.split('').map((character, index) => {
              return <Char
                key={index}
                char={character}
                clicked={() => this.removeCharHandler(index)} />
            })
          }
        </div>
      );
    }

    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the
            length of the entered text below it (e.g. in a paragraph).
          </li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a
            prop
          </li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough"
            depending on the text length (e.g. take 5 as a minimum length)
          </li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display:
            inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).
          </li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter
            of the entered text (in the initial input field) as a prop.
          </li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <hr />
        <label>Input: </label>
        <input type="text" onChange={this.inputChangedHandler} value={this.state.inputValue} />
        <p>Input length: {this.state.inputValue.length}</p>
        <Validation value={this.state.inputValue} />
        {chars}
      </div>
    );
  }
}

export default App;
