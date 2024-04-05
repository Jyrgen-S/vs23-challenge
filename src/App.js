import React from "react";
import Header from "./components/Header";
import Meals from "./components/Meals";
import MealItem from "./components/MealItem";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Meals />
        <h2>create list of meals, using fetch data from backend</h2>
      </main>
    </>
  );
};

export default App;
