import React from "react";

import Container from "react-bootstrap/Container";
import Header from "./components/Header";
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
