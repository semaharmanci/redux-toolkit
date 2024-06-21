import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./pages/Counter";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import Crud from "./pages/Crud";

function App() {
  const { isDarkTheme } = useSelector((store) => store.counterReducer);
  return (
    <>
      <BrowserRouter>
        <div
          className={isDarkTheme ? "bg-dark text-white" : "bg-white text-dark"}
        >
          <Header />
          <Routes>
            <Route
              className={"text-decoration-none p-2"}
              path="/"
              element={<Counter />}
            />
            <Route
              className={"text-decoration-none p-2"}
              path="/crud"
              element={<Crud />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
