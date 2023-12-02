import React from "react";

const Greeting = () => {
  return (
    <div>
      <Image />
      <Title />
      <Author />
    </div>
  );
};

let Image = () => (
  <img src="https://images-eu.ssl-images-amazon.com/images/I/81uL5oJmQxL._AC_UL600_SR600,400_.jpg"></img>
);
let Title = () => <h1>BlackBook of English Vocabulary</h1>;
let Author = () => {
  return <h1>Nikhil K.R. Gupta</h1>;
};

export default Greeting;
