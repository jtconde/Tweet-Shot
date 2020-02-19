import React from "react";
import TweetForm from "./components/tweetForm";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello There!</h1>
      <h2>Quickly send out a tweet!</h2>
      <TweetForm />
    </div>
  );
}


