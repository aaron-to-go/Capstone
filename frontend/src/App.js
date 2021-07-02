import Header from "./components/Header";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import AddCardPage from "./pages/AddCardPage";
import DetailsPage from "./pages/DetailsPage";
import LoginPage from "./pages/LoginPage";
import GoogleRedirectPage from "./pages/GoogleRedirectPage";
import AuthProvider from "./context/AuthProvider";

export default function App() {
  return (
      <BrowserRouter>
          <AuthProvider>
      <Switch>
          <Route path={"/login"} exact>
            <LoginPage/>
          </Route>
          <Route path={"/auth"} exact>
              <GoogleRedirectPage/>
          </Route>
          <Route path={"/new"} exact>
            <AddCardPage/>
          </Route>
          <Route path={"/card/{id}"} exact>
              <DetailsPage/>
          </Route>
          <Route path={"/home"}>
              <Header/>
          </Route>

      </Switch>
          </AuthProvider>
      </BrowserRouter>
  );
}
