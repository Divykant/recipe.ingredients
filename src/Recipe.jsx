import React from 'react';
import style from './recipe.module.css';


const Recipe =  ({title, calories,image,ingredients}) =>{
    return(
        <div className={style.recipe}>
            <h1 className={style.headtitle}>{title}</h1>
            <br/>

            <p>`<span className={style.subhead}>Calories : </span>  {calories}`</p>
            <br/>
            <ul className={style.list}>
                <span className={style.subhead}>Ingredients : </span><br/>
                <br/>
               {ingredients.map(ingredient =>(
                   <li>{ingredient.text}</li>
               ))}
            </ul>
            <br/>
            <img className={style.imgg} src={image} alt="" />
        </div>
        
    );
};

export default Recipe;