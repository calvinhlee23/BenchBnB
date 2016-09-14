import React from 'react';
import ReactDOM from 'react-dom';


class Test extends React.Component {
  render () {
    return (
      <div>Hello from Test! YAY!</div>
    );
  }
}
document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Test/>, document.getElementById("root"));
});
