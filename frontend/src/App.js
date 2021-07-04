import Header from "./components/Header";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import AddCardPage from "./pages/AddCardPage";
import DetailsPage from "./pages/DetailsPage";
import LoginPage from "./pages/LoginPage";
import GoogleRedirectPage from "./pages/GoogleRedirectPage";
import AuthProvider from "./context/AuthProvider";
import CardsPage from "./pages/CardsPage";
import PrivateRoute from "./routing/PrivateRoute";
import NewCardButton from "./components/NewCardButton";


export default function App() {
  return (
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
                    <AddCardPage/>
                  </PrivateRoute>
                  <PrivateRoute path={"/card/{id}"} exact>
                      <DetailsPage/>
                  </PrivateRoute>
                  <PrivateRoute path={"/home"}>
                      <Header/>
                      <CardsPage/>
                      <NewCardButton/>
                  </PrivateRoute>
              </Switch>
          </AuthProvider>
      </BrowserRouter>
  );
}
