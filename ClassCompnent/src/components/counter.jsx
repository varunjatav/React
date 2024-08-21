import { Component } from "react";
import styles from "./counter.module.css";

class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0,
        }
        console.log("constructor");
    }
  render() {
    const { name } = this.props;
    console.log("render");
    return (
      <>
        <h1 className={styles.counter_heading}> {name}</h1>
        <div className={styles.counter_container}>
          <button onClick={() => this.setState({count: this.state.count - 1})}>-</button>
          <span>{this.state.count}</span>
          <button onClick={() => this.setState({count: this.state.count + 1})}>+</button>
        </div>
      </>
    );
  }
}

export default Counter;
