(function(global){
    define(["knockout", "text!./home.html"], function(ko, homeTemplate) {
        function HomeViewModel(route) {
    	      var self = this;
            self.medicineList = [];
            self.message = ko.observable('Welcome to MedincineManagement!');
            global.NameSpaces.MedicineManagement.GetMedicines().done( function (data){
                self.medicineList = data;
            });
        }

        HomeViewModel.prototype.doSomething = function() {
            this.message('You invoked doSomething() on the viewmodel.');
        };

        return { viewModel: HomeViewModel, template: homeTemplate };
    });
})(this);