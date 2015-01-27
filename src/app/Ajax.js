(function(global){

	global.NameSpaces = {};
	global.NameSpaces.MedicineManagement = {};

	var urlAllMedicines = "http://54.69.194.178:9000/medicines";

	var GetMedicinesMock = function (){
		var medicines = [];

		for(var i =0;i<10;i++)
		{
			medicines.push({
			name:"amoxilin",
			price:" price:10",
			feature:"children can eat, children can eat, children can eat, children can eat, children can eat, children can eat, children can eat, children can eat, children can eat "
			});
		}
		return medicines;
	}
	
	var _getAllMedicines = function ()
	{
		
      return $.ajax({
            url: urlAllMedicines,
            async: false
        }).promise();
	} 

	global.NameSpaces.MedicineManagement.GetMedicines = _getAllMedicines;

})(this);