import React, { useEffect, useState } from "react";
import Recipe from './Recipe';
import './App.css';

const App = () =>{

  const APP_ID ="7af889f9";
  const APP_KEY ="9426ee64e13b7df1b60c907537c3ed72";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('apple');
 
  useEffect(() =>{
    getRecipes();
  },[query]);


  const getRecipes = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data =  await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e =>{
    setSearch(e.target.value);
  };

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return(
    <>
    <h1 className="top_heading">INGREDIENT's FINDER </h1>
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" placeholder="Enter The Key Ingredient" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">search</button>
      </form>
      <div className="recipe_div">
      {recipes.map(recipe =>(
        <Recipe 
        key={recipe.recipe.label}
        title={recipe.recipe.label}
        calories={recipe.recipe.calories}
        image = {recipe.recipe.image}
        ingredients = {recipe.recipe.ingredients}
        />
      ))};
      </div>
    </div>
    </>
  );
};

export default App;
