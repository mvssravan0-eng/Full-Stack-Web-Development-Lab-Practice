const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

let courses = [
    { id: 1, name: 'Full Stack Web Development', code: '23CM4121' },
    { id: 2, name: 'Data Structures', code: '23CS2101' }
];

app.get('/api/courses', (req, res) => {
    res.json(courses);
});

app.post('/api/courses', (req, res) => {
    const { name, code } = req.body;
    if (!name || !code) {
        return res.status(400).json({ error: 'Name and code are required' });
    }
    const newCourse = {
        id: courses.length > 0 ? courses[courses.length - 1].id + 1 : 1,
        name,
        code
    };
    courses.push(newCourse);
    res.status(201).json(newCourse);
});

app.delete('/api/courses/:id', (req, res) => {
    const id = parseInt(req.params.id);
    courses = courses.filter(course => course.id !== id);
    res.json({ message: 'Course deleted successfully' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});