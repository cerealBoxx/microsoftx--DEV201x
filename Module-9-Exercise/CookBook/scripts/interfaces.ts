interface IBaseRecipeCategory {
    name: string;
    foodGroups: FoodGroup[];
}

interface IRecipeCategory extends IBaseRecipeCategory {
    description: string;
    examples: IExample[];
}

interface IExample {
    name: string;
    prepTime: string;
    ingredients: Ingredient[];
}


interface IRecipeCategorySummary {
    text: string;
    title: string;
}

interface IFoodGroup {
    name: string;
}
