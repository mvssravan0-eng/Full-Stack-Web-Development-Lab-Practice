const courseForm = document.getElementById('courseForm');
const courseList = document.getElementById('courseList');

async function fetchCourses() {
    try {
        const response = await fetch('/api/courses');
        const courses = await response.json();
        courseList.innerHTML = '';
        courses.forEach(course => {
            const li = document.createElement('li');
            li.innerHTML = \
                <div class='course-info'>
                    <strong>\</strong> (\)
                </div>
                <button class='delete-btn' onclick='deleteCourse(\)'>Delete</button>
            \;
            courseList.appendChild(li);
        });
    } catch (error) {
        console.error('Error fetching courses:', error);
    }
}

courseForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('courseName').value;
    const code = document.getElementById('courseCode').value;

    try {
        const response = await fetch('/api/courses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, code })
        });

        if (response.ok) {
            document.getElementById('courseName').value = '';
            document.getElementById('courseCode').value = '';
            fetchCourses();
        }
    } catch (error) {
        console.error('Error adding course:', error);
    }
});

async function deleteCourse(id) {
    try {
        const response = await fetch(\/api/courses/\\, {
            method: 'DELETE'
        });

        if (response.ok) {
            fetchCourses();
        }
    } catch (error) {
        console.error('Error deleting course:', error);
    }
}

fetchCourses();