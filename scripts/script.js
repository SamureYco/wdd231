const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming.',
        technology: ['HTML', 'CSS'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level.',
        technology: ['C#'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const currentYearSpan = document.getElementById('currentyear');
    currentYearSpan.textContent = new Date().getFullYear();

    const lastModifiedParagraph = document.getElementById('lastModified');
    lastModifiedParagraph.textContent = `Última modificación: ${document.lastModified}`;

    const coursesContainer = document.getElementById('courses-container');

    function displayCourses(courseList) {
        coursesContainer.innerHTML = ''; // Limpiar contenedor
        courseList.forEach(course => {
            const courseDiv = document.createElement('div');
            courseDiv.className = 'course';
            courseDiv.innerHTML = `
                <h3>${course.title}</h3>
                <p><strong>Créditos:</strong> ${course.credits}</p>
                <p><strong>Descripción:</strong> ${course.description}</p>
                <p><strong>Tecnologías:</strong> ${course.technology.join(', ')}</p>
            `;
            if (course.completed) {
                courseDiv.style.backgroundColor = 'lightgreen'; // Estilo diferente para cursos completados
            }
            coursesContainer.appendChild(courseDiv);
        });
    }

    document.getElementById('showCSE').addEventListener('click', () => {
        const filteredCourses = courses.filter(course => course.subject === 'CSE');
        displayCourses(filteredCourses);
    });

    document.getElementById('showWDD').addEventListener('click', () => {
        const filteredCourses = courses.filter(course => course.subject === 'WDD');
        displayCourses(filteredCourses);
    });

    document.getElementById('showAll').addEventListener('click', () => {
        displayCourses(courses);
    });

    // Mostrar todos los cursos al cargar la página
    displayCourses(courses);
});
