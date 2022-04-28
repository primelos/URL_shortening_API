import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import IntroBody from "./components/introBody";
import styled from "styled-components";
import Search from "./components/search";

function App() {
  return (
    <div className="App">
      <AppContainer>
        <Navbar />
        <IntroBody />
        <Search />
      </AppContainer>
    </div>
  );
}

export default App;

const AppContainer = styled.div`
  width: 85%;
  margin: 0 auto;
  position: relative;
  height: 100vh;
`;
