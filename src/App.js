import { ThemeProvider, createGlobalStyle } from "styled-components";
import "./App.css";
import Button, { FancyButton, SubmitButton } from "./components/Button/Button";
import logo from "./logo.svg";
// normal css make classes mixing from different components but this issue not in styled components
import "./styles.css";
import { AnimatedLogo, DarkButton } from "./components/Button/Button.styles";

// custom theme design
const theme = {
  dark: {
    primary: "#000",
    text: "#fff",
  },
  light: {
    primary: "#fff",
    text: "#000",
  },
  fontFamily: "Segoe UI",
};

// Global styling
const GlobalStyle = createGlobalStyle`
  button {
    font-family: ${(props) => props.theme.fontFamily};
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <Button>Styled Button</Button>
        <div>
          <br />
        </div>
        <Button variant="outline">Styled Button</Button>
        <div>
          <br />
        </div>
        <FancyButton>Fancy Button</FancyButton>
        <div>
          <br />
        </div>
        <SubmitButton variant="outline">Submit</SubmitButton>
        <div>
          <br />
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <AnimatedLogo src={logo} />
        <div>
          <br />
        </div>
        <DarkButton>Dark Button</DarkButton>
      </div>
    </ThemeProvider>
  );
}

export default App;
