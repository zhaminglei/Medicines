(function(global){
	var GetMedicinesMock = function (){
		return [{
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
	global.GetMedicines = GetMedicinesMock;
})(this);