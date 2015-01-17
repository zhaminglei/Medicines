define(["knockout", "text!./home.html"], function(ko, homeTemplate) {

  function HomeViewModel(route) {
  	var self = this;
    self.message = ko.observable('Welcome to MedincineManagement!');
    self.medicineList = [{
    name:"amoxilin",
    price:10,
    feature:"children can eat"
  },
  {
    name:"amoxilin",
    price:10,
    feature:"children can eat"
  },
  {
    name:"amoxilin",
    price:10,
    feature:"children can eat"
  }];
}
  HomeViewModel.prototype.doSomething = function() {
    this.message('You invoked doSomething() on the viewmodel.');
  };

  return { viewModel: HomeViewModel, template: homeTemplate };

});
