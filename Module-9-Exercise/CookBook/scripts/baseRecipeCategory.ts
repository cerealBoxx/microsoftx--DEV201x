
class BaseRecipeCategory implements IBaseRecipeCategory {
    name: string;
    foodGroups: FoodGroup[] = [];

    constructor(name: string, foodGroups: Array<FoodGroup>) {
        this.name = name;
        this.foodGroups = foodGroups;
    }

} 