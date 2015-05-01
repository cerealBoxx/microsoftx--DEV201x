var _this = this;
var recipeCategories;
var renderer = null;
window.onload = function () {
    var categoriesSelect = document.getElementById('RecipeCategory');
    categoriesSelect.onchange = function () { return _this.loadRecipes(); };
    var loader = new RecipeLoader('/JSON/recipeTypes.json');
    loader.load();
    renderer = new Renderer();
};
function loadRecipes() {
    var el = document.getElementById('RecipeCategory');
    console.log("Cykna me");
    try {
        var category = recipeCategories.items.filter(function (item) { return item.name === el.value; }).reduce(function (item) { return new RecipeCategory({
            name: el.value,
            foodGroups: item.foodGroups,
            description: item.description,
            examples: item.examples
        }); });
        console.log(category);
        renderer.renderCategory(category);
    }
    catch (ex) {
        alert(ex.message);
    }
}
//# sourceMappingURL=initializer.js.map