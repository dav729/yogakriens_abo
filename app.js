fetch('http://yogakriens.ch/abo/students.json')
  .then(response => response.json())
  .then(data => {
  	let studentsArr = data.students;
  	let str = "";
  	let studentsTable = document.querySelector('#studentsTable');
  	let aboStatus = "",
  		needNew = "uk-alert-danger",
  		almostFinished = "uk-alert-warning",
  		allGood = "uk-alert-success";
  	studentsArr.forEach( (el,i) => {
  		switch ( el.lessonsLeft ){
  			case "1":
  				aboStatus = needNew;
  			break;
  			case "2":
  				aboStatus = almostFinished;
  			break;
  			default:
  				aboStatus = allGood;

  		}
  		str += 
  		`<tr class="${aboStatus}">
  			<td>${i+1}</td>
  			<td>${el.firstName}</td>
  			<td>${el.secondName}</td>
  			<td>${el.aboType}</td>
  			<td>${el.lessonsTotal}</td>
  			<td>${el.lessonsLeft}</td>
  			<td>${el.dateStart}</td>
  			<td>${el.dateEnd}</td>
  		</tr>`;
  	});
  		studentsTable.innerHTML = str;
  });
  