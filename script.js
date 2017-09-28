$.ajax({
		url:"https://api.typeform.com/v1/form/mucsX4?key=c278894e915cbb636da19b741fcac58980b8f84f&completed=true",
		success: function(data) {
			// console.log(data.responses);
			var obj = data.responses;
			for (var i = 0; i < obj.length; i++) {
				console.log(obj[i].answers);
				// console.log(obj[i].textfield_8939191);

var table = document.getElementById("target");
var tr = document.createElement("tr");
var td = document.createElement("td");
var dat = document.createTextNode(i+1);
var tdname = document.createElement("td");
var datname = document.createTextNode(obj[i].answers.textfield_8939191);
var tdclass = document.createElement("td");
var datclass = document.createTextNode(obj[i].answers.textfield_61805827);
var tdadmnno = document.createElement("td");
var datadmnno = document.createTextNode(obj[i].answers.textfield_61805719);
var tdemail = document.createElement("td");
var datemail = document.createTextNode(obj[i].answers.email_61805846);
var tdmun = document.createElement("td");
var datmun = document.createTextNode(obj[i].answers.number_61806878);
var tdphone = document.createElement("td");
var datphone = document.createTextNode(obj[i].answers.textfield_61806980);
var tdhouse = document.createElement("td");
var dathouse = document.createTextNode(obj[i].answers.textfield_61807085);

td.appendChild(dat);
tr.appendChild(td);
tdname.appendChild(datname);
tr.appendChild(tdname);
tdclass.appendChild(datclass);
tr.appendChild(tdclass);
tdadmnno.appendChild(datadmnno);
tr.appendChild(tdadmnno);
tdemail.appendChild(datemail);
tr.appendChild(tdemail);
tdmun.appendChild(datmun);
tr.appendChild(tdmun);
tdphone.appendChild(datphone);
tr.appendChild(tdphone);
tdhouse.appendChild(dathouse);
tr.appendChild(tdhouse);
table.appendChild(tr);
}


		}
	});

$(document).ready(function(){

		$(".pro").click(function() {
		 window.open("http://sayamkanwar.com/","_self");
	});

});