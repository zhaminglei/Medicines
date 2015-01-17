(function(global){
  define(["knockout", "text!./home.html"], function(ko, homeTemplate) {
    function HomeViewModel(route) {
    	var self = this;
      self.message = ko.observable('Welcome to MedincineManagement!');
      self.medicineList = global.GetMedicines();

  }
    HomeViewModel.prototype.doSomething = function() {
      this.message('You invoked doSomething() on the viewmodel.');
    };

    return { viewModel: HomeViewModel, template: homeTemplate };

  });
})(this);