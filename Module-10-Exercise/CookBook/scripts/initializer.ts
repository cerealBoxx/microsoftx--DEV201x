/// <reference path="recipeloader.ts" />
/// <reference path="interfaces.ts" />
module Cookbook.Common {

    export var recipeCategories: RecipeData.RecipeCategories<Interfaces.IRecipeCategory>;
    export var renderer = null;

    window.onload = () => {
        var categoriesSelect = (<HTMLSelectElement> document.getElementById('RecipeCategory'));
        categoriesSelect.onchange = () => Cookbook.Common.loadRecipes();
        var loader = new RecipeLoader('/JSON/recipeTypes.json');
        loader.load();
        renderer = new Renderer();

    };

   export function loadRecipes() {
        var el = (<HTMLSelectElement> document.getElementById('RecipeCategory'));

        try {
            var category = recipeCategories.items
            //Find selected item by name
                .filter(item => item.name === el.value)
            //return the item
                .reduce(item => new RecipeData.RecipeCategory({
                name: el.value,
                foodGroups: item.foodGroups,
                description: item.description,
                examples: item.examples
            }));
            console.log(category);
            renderer.renderCategory(category);
        } catch (ex) {
            alert(ex.message);
        }
    }
  



}

