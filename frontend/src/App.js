import Header from "./components/Header";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import AddCardPage from "./pages/AddCardPage";
import DetailsPage from "./pages/DetailsPage";
import LoginPage from "./pages/LoginPage";
import GoogleRedirectPage from "./pages/GoogleRedirectPage";
import AuthProvider from "./context/AuthProvider";
import CardsPage from "./pages/CardsPage";
import PrivateRoute from "./routing/PrivateRoute";
import {createTheme, ThemeProvider} from '@material-ui/core/styles';

export default function App() {

    const theme = createTheme({
        palette: {
            primary: {
                main: "#ffde59",
            },
            secondary: {
                main: "#ffbd59",
            },
        },
    });

    return (
      <ThemeProvider theme={theme}>
          <BrowserRouter>
              <AuthProvider>
                  <Switch>
                      <Route path={"/"} exact>
                        <LoginPage/>
                      </Route>
                      <Route path={"/auth"} exact>
                          <GoogleRedirectPage/>
                      </Route>
                      <PrivateRoute path={"/new"} exact>
                        <Header/>
                        <AddCardPage/>
                      </PrivateRoute>
                      <PrivateRoute path={"/card/:id"} exact>
                          <Header/>
                          <DetailsPage/>
                      </PrivateRoute>
                      <PrivateRoute path={"/home"}>
                          <Header/>
                          <CardsPage/>
                      </PrivateRoute>
                  </Switch>
              </AuthProvider>
          </BrowserRouter>
      </ThemeProvider>
  );
}
