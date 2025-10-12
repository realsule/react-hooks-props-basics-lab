import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Links from "./links";
import links from './data'
// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);

function App() {
  const github = "https://github.com/liza"
  const linkedin = "https://www.linkedin.com/in/liza/"
  const bio = 'I made this'
  return (
    <div>
      <NavBar />
      <Home />
      <About bio = {bio} />
      <Links github={links.github} linkedIn={links.linkedin}/>
    </div>
  );
}

function user (props) {
  return (
    <div>
      {user.props}
    </div>
  );
}


export default App;
