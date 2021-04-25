fetch('http://yogakriens.ch/abo/students.json')
  .then(response => response.json())
  .then(data => console.log(data));