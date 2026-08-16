// ---- Student class ----
class Student {
  constructor(name, rollNumber, department, cgpa) {
    this.name = name;
    this.rollNumber = rollNumber;
    this.department = department;
    this.cgpa = cgpa;
  }

  // A method to classify performance based on CGPA
  getCgpaClass() {
    if (this.cgpa >= 8.5) return 'cgpa-high';
    if (this.cgpa >= 6.5) return 'cgpa-mid';
    return 'cgpa-low';
  }
}

// ---- DOM selection ----
const form = document.getElementById('studentForm');
const profileContainer = document.getElementById('profileContainer');

// ---- Event handling ----
form.addEventListener('submit', function (event) {
  event.preventDefault(); // stop page reload

  const name = document.getElementById('sName').value.trim();
  const rollNumber = document.getElementById('sRoll').value.trim();
  const department = document.getElementById('sDept').value.trim();
  const cgpa = parseFloat(document.getElementById('sCgpa').value);

  const student = new Student(name, rollNumber, department, cgpa);

  renderProfile(student);
});

// ---- Function that builds and injects the profile card dynamically ----
function renderProfile(student) {
  // Clear any existing profile before adding a new one
  profileContainer.innerHTML = '';

  // Create card wrapper
  const card = document.createElement('div');
  card.className = 'card';

  // Header
  const header = document.createElement('div');
  header.className = 'card-header';
  header.textContent = 'Student Profile';
  card.appendChild(header);

  // Body
  const body = document.createElement('div');
  body.className = 'card-body';

  const rows = [
    { label: 'Name', value: student.name },
    { label: 'Roll No', value: student.rollNumber },
    { label: 'Department', value: student.department },
    { label: 'CGPA', value: student.cgpa.toFixed(2), highlight: student.getCgpaClass() }
  ];

  rows.forEach(function (row) {
    const detail = document.createElement('div');
    detail.className = 'detail';

    const labelEl = document.createElement('span');
    labelEl.className = 'detail-label';
    labelEl.textContent = row.label;

    const valueEl = document.createElement('span');
    valueEl.textContent = row.value;
    if (row.highlight) {
      valueEl.classList.add(row.highlight);
    }

    detail.appendChild(labelEl);
    detail.appendChild(valueEl);
    body.appendChild(detail);
  });

  card.appendChild(body);
  profileContainer.appendChild(card);
}
