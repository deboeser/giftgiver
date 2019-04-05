import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Gift from "./Gift";

class App extends Component {
  constructor() {
    super();
    this.state = { gifts: [] };
  }

  addGift = () => {
    const { gifts } = this.state;
    const ids = this.state.gifts.map(gift => gift.id);
    const maxId = ids.length > 0 ? Math.max(...ids) : 0;
    gifts.push({ id: maxId + 1 });
    this.setState({ gifts });
  };

  render() {
    const { gifts } = this.state;
    let gift_divs = gifts.map(gift => <Gift key={gift.id}>{gift.id}</Gift>);

    return (
      <div>
        <h2>Gift Giver 50000</h2>
        <div className="gift-list">{gift_divs}</div>
        <Button className="btn-add" onClick={this.addGift}>
          Add Gift
        </Button>
      </div>
    );
  }
}

export default App;
