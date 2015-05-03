/// <reference path="typings/jquery.d.ts" />
/// <reference path="initializer.ts" />
var Cookbook;
(function (Cookbook) {
    var Common;
    (function (Common) {
        var RecipeLoader = (function () {
            function RecipeLoader(url) {
                this.url = url;
            }
            RecipeLoader.prototype.load = function () {
                var _this = this;
                $.getJSON(this.url, function (data) {
                    _this.mapData(data);
                });
            };
            RecipeLoader.prototype.mapData = function (data) {
                var _this = this;
                if (data) {
                    var categories = data.recipeCategories;
                    Common.recipeCategories = new Cookbook.RecipeData.RecipeCategories();
                    var recipeCategoriesSummary = new Cookbook.RecipeData.RecipeCategories();
                    categories.forEach(function (category) {
                        var recipeCategory = new Cookbook.RecipeData.RecipeCategory({
                            name: category.title,
                            foodGroups: _this.getFoodGroups(category),
                            description: category.details,
                            examples: _this.getExamples(category)
                        });
                        Common.recipeCategories.items.push(recipeCategory);
                        var summary = new Cookbook.RecipeData.RecipeCategorySummary({
                            title: category.title,
                            text: category.description
                        });
                        recipeCategoriesSummary.items.push(summary);
                    });
                    // render the categories into the select
                    Common.renderer.renderCategories(recipeCategoriesSummary);
                }
                else {
                    Common.renderer.renderError();
                }
            };
            RecipeLoader.prototype.getFoodGroups = function (category) {
                // map foodgroups data to TS object
                return category.foodGroups.map(function (foodGroup) {
                    var group = new Cookbook.RecipeData.FoodGroup(foodGroup.title);
                    return group;
                });
            };
            RecipeLoader.prototype.getExamples = function (category) {
                var _this = this;
                return category.examples.map(function (example) {
                    return new Cookbook.RecipeData.Example({
                        name: example.name,
                        ingredients: _this.getIngredients(example),
                        prepTime: example.prepTime
                    });
                });
            };
            RecipeLoader.prototype.getIngredients = function (example) {
                return example.ingredients.map(function (value) {
                    return new Cookbook.RecipeData.Ingredient(value);
                });
            };
            return RecipeLoader;
        })();
        Common.RecipeLoader = RecipeLoader;
    })(Common = Cookbook.Common || (Cookbook.Common = {}));
})(Cookbook || (Cookbook = {}));
//# sourceMappingURL=recipeloader.js.map