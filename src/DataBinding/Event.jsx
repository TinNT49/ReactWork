import React, { Component } from "react";

export default class Event extends Component {
  //Phương thức xử lý cho nút click
  handleShowMessage = (message) => {
    alert(message);
  };

  render() {
    let message = "Hello Cybersoft 123";
    let message2 = "Hello Cybersoft arrow function";
    return (
      <div className="container">
        <button onClick={this.handleShowMessage.bind(this, message)}>
          Show message
        </button>
        <button onClick={() => this.handleShowMessage(message2)}>
          Show message 2
        </button>
      </div>
    );
  }
}
