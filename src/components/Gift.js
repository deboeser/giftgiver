import React, { Component } from "react";
import { Form } from "react-bootstrap";

class Gift extends Component {
  constructor() {
    super();

    this.state = {
      person: "",
      gift: ""
    };
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <Form>
          <Form.Group>
            <Form.Label>Person</Form.Label>
            <Form.Control
              className="input-person"
              name="person"
              onChange={e => this.onChange(e)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Gift</Form.Label>
            <Form.Control
              className="input-gift"
              name="gift"
              onChange={e => this.onChange(e)}
            />
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default Gift;
