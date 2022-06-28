import { useState } from "react";
import Slide from "./Components/Slide";
import "./styles.css";

// set this as the
const data = [
  {
    id: 1,
    title: "Intro to React",
    description: "React is a Javascript UI library"
  },
  {
    id: 2,
    title: "Intro to Props",
    description: "Props are just properties"
  },
  {
    id: 3,
    title: "Sate management",
    description: "Learn how to manage state"
  }
];

export default function App() {
  return (
    <div className="App">
      <h1 data-testid="header">Slides</h1>
      <Slide />
      <button data-testid="prev">Prev</button>
      <button data-testid="next">Next</button>
    </div>
  );
}
