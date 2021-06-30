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
          <Route path={"/login"}>
            <LoginPage/>
          </Route>
          <Route path={"/auth"}>
              <GoogleRedirectPage/>
          </Route>
          <Route path={"/new"}>
            <AddCardPage/>
          </Route>
          <Route path={"/card/{id}"}>
              <DetailsPage/>
          </Route>
          <Route path={"/"}>
              <Header/>
          </Route>

      </Switch>
          </AuthProvider>
      </BrowserRouter>
  );
}
