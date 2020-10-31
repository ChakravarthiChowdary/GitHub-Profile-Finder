import { Route, Switch } from "react-router";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import Navbar from "./components/Navbar";
import "./App.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#9b59b6",
    },
    secondary: {
      main: "#e74c3c",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/user/:id" component={ProfilePage} />
          <Route path="/" exact component={HomePage} />
        </Switch>
      </div>
    </ThemeProvider>
  );
};

export default App;
