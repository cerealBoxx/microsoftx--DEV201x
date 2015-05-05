var Cookbook;
(function (Cookbook) {
    var RecipeData;
    (function (RecipeData) {
        var Example = (function () {
            function Example(example) {
                this.ingredients = [];
                this.name = example.name;
                this.ingredients = example.ingredients;
                this.prepTime = example.prepTime;
            }
            return Example;
        })();
        RecipeData.Example = Example;
    })(RecipeData = Cookbook.RecipeData || (Cookbook.RecipeData = {}));
})(Cookbook || (Cookbook = {}));
//# sourceMappingURL=recipeExample.js.map