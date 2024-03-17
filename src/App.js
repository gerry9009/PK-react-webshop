import React from "react";
import Content from "./components/contet";

import banner1 from "./assets/img/banner-1.jpeg";
import banner2 from "./assets/img/banner-2.jpeg";
import banner3 from "./assets/img/banner-3.jpeg";

function App() {
  console.log("RENDER APP");

  return (
    <div className="App">
      <h1>{Math.round(Math.random() * 10)}. Legjobb webáruház</h1>
      <Content />
    </div>
  );
}

export default App;
