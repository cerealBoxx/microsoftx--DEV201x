/// <reference path="interfaces.ts" />
var Cookbook;
(function (Cookbook) {
    var RecipeData;
    (function (RecipeData) {
        var BaseRecipeCategory = (function () {
            function BaseRecipeCategory(name, foodGroups) {
                this.foodGroups = [];
                this.name = name;
                this.foodGroups = foodGroups;
            }
            return BaseRecipeCategory;
        })();
        RecipeData.BaseRecipeCategory = BaseRecipeCategory;
    })(RecipeData = Cookbook.RecipeData || (Cookbook.RecipeData = {}));
})(Cookbook || (Cookbook = {}));
//# sourceMappingURL=baseRecipeCategory.js.map