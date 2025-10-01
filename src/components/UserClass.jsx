import React from "react";

class UserClass extends React.Component {
  constructor(probs) {
    super(probs);
    const { count, anotherCount } = this.state;
  }
  render() {
    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <div>
        <h1>Count : {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
          style={{ padding: "10px", margin: "10px" }}
        >
          Click me
        </button>
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact : @xyz.com</h4>
      </div>
    );
  }
}

export default UserClass;
