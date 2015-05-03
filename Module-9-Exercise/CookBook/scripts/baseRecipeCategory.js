/// <reference path="interfaces.ts" />
var Cookbook;
(function (Cookbook) {
    var BaseRecipeCategory = (function () {
        function BaseRecipeCategory(name, foodGroups) {
            this.foodGroups = [];
            this.name = name;
            this.foodGroups = foodGroups;
        }
        return BaseRecipeCategory;
    })();
    Cookbook.BaseRecipeCategory = BaseRecipeCategory;
})(Cookbook || (Cookbook = {}));
//# sourceMappingURL=baseRecipeCategory.js.map