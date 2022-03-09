import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Comics from "./pages/Comics";
import Favorites from "./pages/Favorites";
import Character from "./pages/Character";
import Comic from "./pages/Comic";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [menu, setMenu] = useState("");
  return (
    <div>
      <Router>
        <Header
          search={search}
          setSearch={setSearch}
          menu={menu}
          setMenu={setMenu}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                search={search}
                setSearch={setSearch}
                menu={menu}
                setMenu={setMenu}
              />
            }
          />
          <Route path="/character/:id" element={<Character />} />

          <Route
            path="/comics"
            element={
              <Comics
                search={search}
                setSearch={setSearch}
                menu={menu}
                setMenu={setMenu}
              />
            }
          />

          <Route path="/comic/:id" element={<Comic />} />
          <Route
            path="/favorites"
            element={<Favorites menu={menu} setMenu={setMenu} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
