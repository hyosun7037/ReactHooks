import React from "react";
import Detail from "./Detail";
import styled from "styled-components";

const Main = styled.div`
  width: 500px;
  margin: 0 auto;
  text-align: center;
  margin-top: 200px;
`;

const App = () => {
  return (
    <Main>
      <Detail />
    </Main>
  );
};

export default App;
