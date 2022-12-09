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
      <li class="${student.enrolled ? '' : "unenrolled"}">
        <p>Name: ${student.name}</p>
        <p>Enrolled: ${student.enrolled}</p>
        <button class="delete" data-index="${index}">Delete Student</button>
        <button class="unenroll" data-index="${index}">${student.enrolled ? '✅' : '&#127367;'}</button>
      </li>
    `
  )).join('');
  listEl.innerHTML = liEls;
}
renderStudents();

listEl.addEventListener('click', function(event) {
  if (event.target.matches('.delete')) {
    const index = event.target.dataset.index;
    students.splice(index, 1);
    renderStudents();
  }
  if (event.target.matches('.unenroll')) {
    const index = event.target.dataset.index;
    students[index].enrolled = !students[index].enrolled;
    renderStudents();
  }
})

const menuButton = document.querySelector('#menuButton');
const menuEl = document.querySelector('ol');

menuButton.addEventListener('click', function() {
  menuEl.classList.toggle('hidden');
});