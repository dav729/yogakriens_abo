fetch('http://yogakriens.ch/abo/students.json')
  .then(response => response.json())
  .then(data => {
  	
  	let studentsArr = data.students;
  	let str = "";
  	let studentsTable = document.querySelector('#studentsTable');
  	studentsArr.forEach( (el,i) => {
  		str += 
  		`<tr>
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
  