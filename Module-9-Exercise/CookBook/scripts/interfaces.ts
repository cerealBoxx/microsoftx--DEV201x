module Cookbook.Interfaces {
    export interface IBaseRecipeCategory {
        name: string;
        foodGroups: RecipeData.FoodGroup[];
    }

    export interface IRecipeCategory extends IBaseRecipeCategory {
        description: string;
        examples: IExample[];
    }

    export interface IExample {
        name: string;
        prepTime: string;
        ingredients: RecipeData.Ingredient[];
    }


    export interface IRecipeCategorySummary {
        text: string;
        title: string;
    }

    export interface IFoodGroup {
        name: string;
    }
   
}