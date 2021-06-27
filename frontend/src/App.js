import Header from "./components/Header";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import AddCardPage from "./pages/AddCardPage";
import DetailsPage from "./pages/DetailsPage";

export default function App() {
  return (
      <BrowserRouter>
      <Switch>
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
      </BrowserRouter>
  );
}
