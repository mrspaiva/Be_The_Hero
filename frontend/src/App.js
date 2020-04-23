import React, { useState, useEffect, Fragment } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import GlobalTheme from "./global";
import styled from "styled-components";

import "./global.css";

import Routes from "./routes";

function App() {
  const [theme, setTheme] = useState("light");

  const toggle = () => {
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      window.localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  return (
    <div>
      <Routes />
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <Fragment>
          <GlobalTheme />
          <Container>
            <ButtonChange onClick={toggle}></ButtonChange>
            <input id="switch" type="checkbox" />
            <label htmlFor="switch"></label>
          </Container>
        </Fragment>
      </ThemeProvider>
    </div>
  );
}

const Container = styled.div`
  input[type="checkbox"] {
    height: 0;
    width: 0;
    visibility: hidden;
  }
`;

const ButtonChange = styled.button`
  width: 52px;
  height: 27px;
  background: #666;
  float: left;
  border-radius: 100px;
  position: absolute;
`;

export default App;
