
import * as model from './model.js'
import recipeView from './views/recipeView.js'
import searchView from './views/searchView.js'
import resultsView from './views/resultsView.js'


import 'core-js/stable';
import 'regenerator-runtime/runtime';
import {state} from "./model";



if (module.hot) {
    module.hot.accept();
}


// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////



const controlRecipes = async function () {
try {


    const id = window.location.hash.slice(1);
    // console.log(id);
    if (!id) return;

    recipeView.renderSpinner();


//    1) Loading recipe

await model.loadRecipe(id);



//     2) Rendering recipe

    recipeView.render(model.state.recipe);



} catch (err) {
    console.log(err);
recipeView.renderError();
}
};

const controlSearchResults = async function () {
    try {
        resultsView.renderSpinner();
        //1) Get search result
        const query = searchView.getQuery();
        if (!query) return ;

//        2) Load search results
await model.loadSearchResult(query);

        // 3) Render results
        resultsView.render(model.state.search.results);
    } catch (err) {
        console.log(err);
    }
};


const init = function () {
    recipeView.addHandlerRender(controlRecipes);
    searchView.addHandlerSearch(controlSearchResults);
};
init();