import React, { Component } from 'react'
import Button from './components/ui/Button/Button'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { counter: 0, uneValue: 123 }
  }
  componentDidMount() {
    this.setState({ counter: 1 })
  }
  componentDidUpdate(oldProps, oldState) {
    console.log(this.state.counter)
  }
  render() {
    return (
      <div className="App">
        voici la valeur de counter : {this.state.counter}
        <hr />
        <Button className="error" onClick={() => {
          this.setState({counter:this.state.counter - 1})
          console.log(this.state.counter)
        }}>-1</Button>
        <Button onClick={() => {
          this.setState({counter:this.state.counter + 1})
          console.log(this.state.counter)
        }}>+1</Button>
      </div>
    )
  }
}
