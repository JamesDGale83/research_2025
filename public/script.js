document.addEventListener('DOMContentLoaded', function () {
    const students = [
        {
            name: "Alice",
            course: "Intro",
            topic: "Recursion",
            placeInQueue: 1
        },
        {
            name: "Bob",
            course: "Software",
            topic: "Integration by Parts",
            placeInQueue: 2
        },
        {
            name: "Charlie",
            course: "Comp Sys",
            topic: "C+",
            placeInQueue: 3
        }
    ];

    const queueElement = document.getElementById("studentQueue");

    if (queueElement) {
        queueElement.innerHTML = "";

        students.forEach((student, index) => {
            const studentCard = document.createElement("div");
            studentCard.classList.add("card", "mb-2", "p-2", "student-card");
            studentCard.setAttribute("data-index", index);

            studentCard.innerHTML = `
                <strong>Place:</strong> ${student.placeInQueue} <br>
                <strong>Name:</strong> ${student.name} <br>
                <strong>Course:</strong> ${student.course} <br>
                <strong>Topic:</strong> ${student.topic}
            `;

            queueElement.appendChild(studentCard);
        });
    }

    document.addEventListener('click', function (e) {
        if (e.target.closest('.student-card')) {
            const card = e.target.closest('.student-card');
            const index = card.getAttribute('data-index');
            const student = students[index];

            const studentDetails = document.getElementById("studentDetails");
            if (studentDetails) {
                studentDetails.innerHTML = `
                    <h5>Student Details</h5>
                    <p><strong>Name:</strong> ${student.name}</p>
                    <p><strong>Course:</strong> ${student.course}</p>
                    <p><strong>Topic:</strong> ${student.topic}</p>
                    <p><strong>Place in Queue:</strong> ${student.placeInQueue}</p>
                `;
            }
        }
    });
});
