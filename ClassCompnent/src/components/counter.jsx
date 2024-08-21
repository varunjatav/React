import { Component } from "react";
import styles from "./counter.module.css";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.timerId = null;
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
    // this.timerId =  setInterval(() => {
    //   console.log("Hii");
    // }, 1000);
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
   
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  //  clearInterval(this.timerId);
  }


  render() {
    const { name } = this.props;
    console.log("render");
    return (
      <>
      <h1 className={styles.counter_heading}>Class Component</h1>
        <h1 className={styles.counter_heading}> {name}</h1>
        <div className={styles.counter_container}>
          <button
            onClick={() => this.setState({ count: this.state.count - 1 })}
          >
            -
          </button>
          <span>{this.state.count}</span>
          <button
            onClick={function() {console.log(this);}}
          >
            +
          </button>
        </div>
      </>
    );
  }
}

export default Counter;
