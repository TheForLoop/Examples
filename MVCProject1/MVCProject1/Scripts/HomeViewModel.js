var Home;
(function (Home) {
    var ViewModel = (function () {
        function ViewModel() {
            this.StringVal = ko.observable("Test");
        }
        ViewModel.prototype.ClickHandler = function () {
            this.StringVal("This was changed.");
        };
        return ViewModel;
    })();
    Home.ViewModel = ViewModel;
})(Home || (Home = {}));

$(document).ready(function () {
    ko.applyBindings(new Home.ViewModel());
});
