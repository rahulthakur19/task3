// var list1 = [];
// 		var list2 = [];
// 		var list3 = [];
//         var list4 =[];
     var a,b,c,d,e;
		var n = 1;
		var x = 0;
        function AddRow(){
            var AddRown = document.getElementById('show');
            var NewRow = AddRown.insertRow(n); 
            a= document.getElementById("fname").value;
			b= document.getElementById("email").value;
			c= document.getElementById("age").value;
            d=document.getElementById("sex").value;
			e=document.getElementById("number").value;
            
            var cel1 = NewRow.insertCell(0);
			var cel2 = NewRow.insertCell(1);
			var cel3 = NewRow.insertCell(2);
            var cel4=NewRow.insertCell(3);
			var cel5=NewRow.insertCell(4);
            cel1.innerHTML = a;
			cel2.innerHTML = b;
			cel3.innerHTML = c;
            cel4.innerHTML= d;
			cel5.innerHTML=e;

			n++;
			x++;
        }

		// function AddRow(){

		// 	var AddRown = document.getElementById('show');
		// 	var NewRow = AddRown.insertRow(n);

		// 	list1[x] = document.getElementById("fname").value;
		// 	list2[x] = document.getElementById("email").value;
		// 	list3[x] = document.getElementById("dob").value;

		// 	var cel1 = NewRow.insertCell(0);
		// 	var cel2 = NewRow.insertCell(1);
		// 	var cel3 = NewRow.insertCell(2);

		// 	cel1.innerHTML = list1[x];
		// 	cel2.innerHTML = list2[x];
		// 	cel3.innerHTML = list3[x];

		// 	n++;
		// 	x++;
		// }