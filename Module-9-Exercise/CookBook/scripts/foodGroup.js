var Cookbook;
(function (Cookbook) {
    var RecipeData;
    (function (RecipeData) {
        var FoodGroup = (function () {
            function FoodGroup(name) {
                this.name = name;
            }
            return FoodGroup;
        })();
        RecipeData.FoodGroup = FoodGroup;
    })(RecipeData = Cookbook.RecipeData || (Cookbook.RecipeData = {}));
})(Cookbook || (Cookbook = {}));
//# sourceMappingURL=foodGroup.js.map