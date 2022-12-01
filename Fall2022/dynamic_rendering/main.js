const students = [
  {
    name: "Sharona",
    enrolled: true
  },
  {
    name: "Chang",
    enrolled: true
  },
  {
    name: "Wanda",
    enrolled: true
  },
];

const listEl = document.querySelector('ul');

const renderStudents = () => {
  const liEls = students.map((student, index) => (
    `
      <li>
        <p>Name: ${student.name}</p>
        <p>Enrolled: ${student.enrolled}</p>
        <button data-index="${index}">Delete Student</button>
      </li>
    `
  )).join('');
  listEl.innerHTML = liEls;
}
renderStudents();

listEl.addEventListener('click', function(event) {
  if (event.target.matches('button')) {
    const index = event.target.dataset.index;
    students.splice(index, 1);
    renderStudents();
  }
})