module Cookbook.RecipeData {
    export class RecipeCategory extends BaseRecipeCategory implements Interfaces.IRecipeCategory {
        description: string;
        examples: Interfaces.IExample[];

        constructor(recipeCategory: Interfaces.IRecipeCategory) {

            super(recipeCategory.name, recipeCategory.foodGroups);
            this.description = recipeCategory.description;
            this.examples = recipeCategory.examples;
        }


    } 
}