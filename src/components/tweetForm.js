import React from "react";


class TweetForm extends React.Component {
  render() {
    return (
      <form>
      <input type="text" id="tweet" placeholder="Enter tweet..." />
  <button>Send</button>
      </form>
)
  }
}

export default TweetForm;
