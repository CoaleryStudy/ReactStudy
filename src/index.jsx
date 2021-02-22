import React from "react";
import ReactDOM from "react-dom";
import InputSample from "./InputSample";
import UserList from "./user_list";

function App() {
  return <UserList />;
}

ReactDOM.render(<App />, document.getElementById("root"));
