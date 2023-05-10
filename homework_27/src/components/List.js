import React from "react";
import smail1 from "./img/1.svg";
import smail2 from "./img/2.svg";
import smail3 from "./img/3.svg";
import "./List.css";
import classes from "./button/MyButton.module.css";

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [0, 0, 0],
      winner: null,
    };
    this.handleSmailClick = this.handleSmailClick.bind(this);
    this.handleShowResults = this.handleShowResults.bind(this);
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="container__smail-1">
            <div onClick={() => this.handleSmailClick(0)} className="smail">
              <img src={smail1} alt="smail1" />
            </div>
            <div className="counter">{this.state.counters[0]}</div>
          </div>
          <div className="container__smail-2">
            <div onClick={() => this.handleSmailClick(1)} className="smail">
              <img src={smail2} alt="smail2" />
            </div>
            <div className="counter">{this.state.counters[1]}</div>
          </div>
          <div className="container__smail-3">
            <div onClick={() => this.handleSmailClick(2)} className="smail">
              <img src={smail3} alt="smail3" />
            </div>
            <div className="counter">{this.state.counters[2]}</div>
          </div>
        </div>

        <button className={classes.myBtn} onClick={this.handleShowResults}>
          Show Results
        </button>
        {this.state.winner !== null && (
          <div>The winner is smail {this.state.winner + 1}!</div>
        )}
      </div>
    );
  }

  handleSmailClick(index) {
    const newCounters = [...this.state.counters];
    newCounters[index] += 1;
    this.setState({ counters: newCounters });
  }

  handleShowResults() {
    const { counters } = this.state;
    const maxCount = Math.max(...counters);
    const winner = counters.indexOf(maxCount);
    this.setState({ winner });
  }
}
