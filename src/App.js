import React from "react";

import Container from "react-bootstrap/Container";
import Header from "./components/util/Header";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Header />
      <Container>
        <HomePage />
      </Container>
    </>
  );
}

export default App;
