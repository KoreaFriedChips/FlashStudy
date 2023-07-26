import { useState } from "react";
import "./App.css";
import Flashcard from "./components/Flashcard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";

function App() {
  const routes = [
    { path: "/", element: <Home /> },
    { path: "/create", element: <Flashcard /> },
    { path: "/chem-stoich", element: <Flashcard category={"stoich"} /> },
    { path: "/chem-atomic", element: <Flashcard category={"atomic"} /> },
    {
      path: "/chem-periodicity",
      element: <Flashcard category={"periodicity"} />,
    },
    { path: "/chem-bonding", element: <Flashcard category={"bonding"} /> },
    {
      path: "/chem-energetics",
      element: <Flashcard category={"energetics"} />,
    },
    { path: "/chem-kinetics", element: <Flashcard category={"kinetics"} /> },
    {
      path: "/chem-equilibrium",
      element: <Flashcard category={"equilibrium"} />,
    },
    { path: "/chem-acid-base", element: <Flashcard category={"acidBase"} /> },
    { path: "/chem-redox", element: <Flashcard category={"redox"} /> },
    { path: "/chem-organic", element: <Flashcard category={"organic"} /> },
    {
      path: "/chem-measurement",
      element: <Flashcard category={"measurement"} />,
    },
    { path: "/chem-option-c", element: <Flashcard category={"optionC"} /> },
  ];

  return (
    <Router>
      <Sidebar />
      <div className="App">
        <div className="landing-options">
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
