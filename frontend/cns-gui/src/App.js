import AppBody from "./components/AppBody";
import "./App.css";
import React, { useState } from 'react';


function ComponentA() {
  return <div>Component A</div>;
}

function ComponentB() {
  return <div>Component B</div>;
}

function ComponentC() {
  return <div>Component C</div>;
}


function App() {
  return (
    <AppBody/>
  );

  // const [condition, setCondition] = useState("A"); // Initial condition is 'A'

  // let componentToRender;

  // if (condition === "A") {
  //   componentToRender = <ComponentA />;
  // } else if (condition === "B") {
  //   componentToRender = <ComponentB />;
  // } else if (condition === "C") {
  //   componentToRender = <ComponentC />;
  // }

  // return (
  //   <div>
  //     <button onClick={() => setCondition("A")}>Show Component A</button>
  //     <button onClick={() => setCondition("B")}>Show Component B</button>
  //     <button onClick={() => setCondition("C")}>Show Component C</button>
  //     {componentToRender}
  //   </div>
  // );
}

export default App;
