module Cookbook.RecipeData {
    export class FoodGroup implements Interfaces.IFoodGroup {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

} 
}