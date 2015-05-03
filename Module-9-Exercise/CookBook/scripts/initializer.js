/// <reference path="recipeloader.ts" />
/// <reference path="interfaces.ts" />
var Cookbook;
(function (Cookbook) {
    var Common;
    (function (Common) {
        Common.recipeCategories;
        Common.renderer = null;
        window.onload = function () {
            var categoriesSelect = document.getElementById('RecipeCategory');
            categoriesSelect.onchange = function () { return Cookbook.Common.loadRecipes(); };
            var loader = new Common.RecipeLoader('/JSON/recipeTypes.json');
            loader.load();
            Common.renderer = new Common.Renderer();
        };
        function loadRecipes() {
            var el = document.getElementById('RecipeCategory');
            try {
                var category = Common.recipeCategories.items.filter(function (item) { return item.name === el.value; }).reduce(function (item) { return new Cookbook.RecipeData.RecipeCategory({
                    name: el.value,
                    foodGroups: item.foodGroups,
                    description: item.description,
                    examples: item.examples
                }); });
                console.log(category);
                Common.renderer.renderCategory(category);
            }
            catch (ex) {
                alert(ex.message);
            }
        }
        Common.loadRecipes = loadRecipes;
    })(Common = Cookbook.Common || (Cookbook.Common = {}));
})(Cookbook || (Cookbook = {}));
//# sourceMappingURL=initializer.js.map