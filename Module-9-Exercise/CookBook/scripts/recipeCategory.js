var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Cookbook;
(function (Cookbook) {
    var RecipeData;
    (function (RecipeData) {
        var RecipeCategory = (function (_super) {
            __extends(RecipeCategory, _super);
            function RecipeCategory(recipeCategory) {
                _super.call(this, recipeCategory.name, recipeCategory.foodGroups);
                this.description = recipeCategory.description;
                this.examples = recipeCategory.examples;
            }
            return RecipeCategory;
        })(Cookbook.BaseRecipeCategory);
        RecipeData.RecipeCategory = RecipeCategory;
    })(RecipeData = Cookbook.RecipeData || (Cookbook.RecipeData = {}));
})(Cookbook || (Cookbook = {}));
//# sourceMappingURL=recipeCategory.js.map