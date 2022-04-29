
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

		
