/// <reference path="interfaces.ts" />


module Cookbook.RecipeData {
    export class BaseRecipeCategory implements Interfaces.IBaseRecipeCategory {
        name: string;
        foodGroups: RecipeData.FoodGroup[] = [];

        constructor(name: string, foodGroups: Array<RecipeData.FoodGroup>) {
            this.name = name;
            this.foodGroups = foodGroups;
        }

    } 
}