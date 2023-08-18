import * as React from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <Avatar />
      <Intro />
      <SkillList />
    </div>
  );
}

function Avatar() {
  return <img className="" src="" />;
}

function Intro() {
  return (
    <div>
      <h1>Jack Mellon</h1>
      <p> This is bref of Jack's CV</p>
    </div>
  );
}

function SkillList() {
  return (
    <div>
      <Skill skill="React" emoj="🇳🇱🎏" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="">
      <p> {props.skill}</p>
      <p> {props.emoj}</p>
    </div>
  );
}
