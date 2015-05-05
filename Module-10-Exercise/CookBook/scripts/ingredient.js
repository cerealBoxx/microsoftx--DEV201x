var Cookbook;
(function (Cookbook) {
    var RecipeData;
    (function (RecipeData) {
        var Ingredient = (function () {
            function Ingredient(name) {
                this.name = name;
            }
            return Ingredient;
        })();
        RecipeData.Ingredient = Ingredient;
    })(RecipeData = Cookbook.RecipeData || (Cookbook.RecipeData = {}));
})(Cookbook || (Cookbook = {}));
//# sourceMappingURL=ingredient.js.map