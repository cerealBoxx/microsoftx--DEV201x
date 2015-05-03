/// <reference path="typings/jquery.d.ts" />
/// <reference path="initializer.ts" />

module Cookbook.Common {
    
    export class RecipeLoader {
        constructor(public url: string) { }

        load() {
            $.getJSON(this.url,(data) => {
                this.mapData(data);
            });
        }

        mapData(data) {
            if (data) {
                var categories: any[] = data.recipeCategories;
                recipeCategories = new RecipeData.RecipeCategories<Interfaces.IRecipeCategory>();

                var recipeCategoriesSummary = new RecipeData.RecipeCategories<Interfaces.IRecipeCategorySummary>();
                categories.forEach((category) => {
                    var recipeCategory = new RecipeData.RecipeCategory({
                        name: category.title,
                        foodGroups: this.getFoodGroups(category),
                        description: category.details,
                        examples: this.getExamples(category)
                    });

                    recipeCategories.items.push(recipeCategory);

                    var summary = new RecipeData.RecipeCategorySummary({
                        title: category.title,
                        text: category.description
                    });

                    recipeCategoriesSummary.items.push(summary);
                });
                // render the categories into the select
                Common.renderer.renderCategories(recipeCategoriesSummary);
            } else {
                Common.renderer.renderError();
            }
        }

        getFoodGroups(category): RecipeData.FoodGroup[] {
            // map foodgroups data to TS object
            return category.foodGroups.map((foodGroup) => {
                var group = new RecipeData.FoodGroup(foodGroup.title);
                return group;
            });
        }

        getExamples(category): Interfaces.IExample[] {
            return category.examples.map((example) => {
                return new RecipeData.Example({
                    name: example.name,
                    ingredients: this.getIngredients(example),
                    prepTime: example.prepTime
                });
            });
        }

        getIngredients(example): RecipeData.Ingredient[] {
            return example.ingredients.map((value) => {
                return new RecipeData.Ingredient(value);
            });
        }
    } 
}