//TODO
//Make RecipeCategory inherit from BaseRecipeCategory
//HINT: Use the "extends" keyword
class RecipeCategory extends BaseRecipeCategory {

    constructor(name: string, foodGroups: FoodGroup[], public description:string) {
        super(name, foodGroups);
    }
 } 