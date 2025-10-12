import React from "react";
import Links from "./Links"; // assuming you have this

function About({ bio, links }) {
  return (
    <div id="about">
      <h2>About Me</h2>

      {/* only render <p> if bio is not empty */}
      {bio && <p>{bio}</p>}

      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />

      {/* render the Links component */}
      <Links github={links.github} linkedIn={links.linkedIn} />
    </div>
  );
}

export default About;
