import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Greeting } from "./Greeting.jsx";
import Todo from "./Todos.jsx";
import Animals from "./Animals.jsx";
import PackingList from "./Packing.jsx";
import List from "./Rendring.jsx";
import RecipeList from "./Recipies.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Greeting />
    <Todo />
    <Animals/>
    <PackingList/>
    <List/>
    <RecipeList/>
  </StrictMode>
);
