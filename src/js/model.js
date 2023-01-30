import { async } from 'regenerator-runtime';
import 'regenerator-runtime';
import { API_URL } from "./config.js";
import {getJSON} from "./helpers.js";

export  const state = {
    recipe: {},
};

export const loadRecipe = async function (id) {
    try {

        const data = await getJSON(`${API_URL}/${id}`)

        // const res = await fetch(
        //   `${API_URL}/${id}`);
        // `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
        // const data = await getJSON(`${API_URL}/${id}`);

        // const data = await res.json();
        //
        // if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        //
        // console.log(res, data);


        const { recipe } = data.data;
        state.recipe = {
            id: recipe.id,
            title: recipe.title,
            publisher: recipe.publisher,
            sourceUrl: recipe.source_url,
            image: recipe.image_url,
            servings: recipe.servings,
            cookingTime: recipe.cooking_time,
            ingredients: recipe.ingredients,

        };
        console.log(state.recipe);
    } catch (err) {
       console.error(`{err}`);
    }
};