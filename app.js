fetch('http://yogakriens.ch/abo/students.json')
  .then(response => response.json())
  .then(data => {
  	
  	let studentsArr = data.students;
  	let str = "";
  	let div = document.querySelector('#studentsList');
  	studentsArr.forEach( (el,i) => {
  		div.innerHTML = el.firstName;
  	});
  });
  