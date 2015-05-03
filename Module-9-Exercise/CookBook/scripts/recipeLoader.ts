/// <reference path="typings/jquery.d.ts" />

class RecipeLoader {
    constructor(public url: string) {}

    load() {
        $.getJSON(this.url,(data) => {
            this.mapData(data);
        });
    }

    mapData(data) {
        if (data) {
            var categories: any[] = data.recipeCategories;
            recipeCategories = new RecipeCategories<IRecipeCategory>();

            var recipeCategoriesSummary = new RecipeCategories<IRecipeCategorySummary>();
            categories.forEach((category) => {
                var recipeCategory = new RecipeCategory({
                    name: category.title,
                    foodGroups: this.getFoodGroups(category),
                    description: category.details,
                    examples: this.getExamples(category)
                });

                recipeCategories.items.push(recipeCategory);

                var summary = new RecipeCategorySummary({
                    title: category.title,
                    text: category.description
                });

                recipeCategoriesSummary.items.push(summary);
            });
           // render the categories into the select
            renderer.renderCategories(recipeCategoriesSummary);
        } else {
            renderer.renderError();
        }
    }

    getFoodGroups(category) : FoodGroup[] {
        // map foodgroups data to TS object
        return category.foodGroups.map((foodGroup) => {
            var group = new FoodGroup(foodGroup.title);
            return group;
        });
    }

    getExamples(category) : IExample[] {
        return category.examples.map((example) => {
            return new Example({
                name: example.name,
                ingredients: this.getIngredients(example),
                prepTime: example.prepTime
            });
        });
    }

    getIngredients(example): Ingredient[] {
        return example.ingredients.map((value:string) => {
            return new Ingredient(value);
        });
    }
} 