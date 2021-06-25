import Header from "./components/Header";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import AddCardPage from "./pages/AddCardPage";

export default function App() {
  return (
      <BrowserRouter>
      <Switch>
          <Route path={"/new"}>
            <AddCardPage/>
          </Route>
          <Route path={"/"}>
              <Header/>
          </Route>

      </Switch>
      </BrowserRouter>
  );
}
