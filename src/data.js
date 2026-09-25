export const users = [
    {
        id: 1,
        name: "John Doe",
        email: "student@portal.com",
        password: "1234",
        role: "student",
        year: 3,
        branch: "Computer Engineering"
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "student2@portal.com",
        password: "1234",
        role: "student",
        year: 2,
        branch: "Computer Engineering"
    },
    {
        id: 3,
        name: "Prof. Michael Johnson",
        email: "teacher@portal.com",
        password: "1234",
        role: "teacher",
        department: "Computer Engineering",
        subjects: ["DBMS", "Data Structures"]
    }
];

export const lectures = [
    {
        id: 1,
        subject: "DBMS",
        date: "2026-09-15",
        day: "Tuesday",
        startTime: "11:00 AM",
        endTime: "12:00 PM",
        type: "Practical",
        room: "Lab 2",
        teacher: "Prof. Michael Johnson",
        status: "present"
    },
    {
        id: 2,
        subject: "Discrete Mathematics",
        date: "2026-09-16",
        day: "Wednesday",
        startTime: "12:00 PM",
        endTime: "1:00 PM",
        type: "Theory",
        room: "Room 301",
        teacher: "Prof. Alex Williams",
        status: "absent"
    },
    {
        id: 3,
        subject: "Data Structures",
        date: "2026-09-16",
        day: "Wednesday",
        startTime: "2:00 PM",
        endTime: "3:00 PM",
        type: "Theory",
        room: "Room 204",
        teacher: "Prof. Michael Johnson",
        status: "present"
    },
    {
        id: 4,
        subject: "Data Structures",
        date: "2026-09-17",
        day: "Thursday",
        startTime: "12:00 PM",
        endTime: "1:00 PM",
        type: "Theory",
        room: "Room 204",
        teacher: "Prof. Michael Johnson",
        status: "present"
    },
    {
        id: 5,
        subject: "Computer Organization",
        date: "2026-09-18",
        day: "Friday",
        startTime: "11:00 AM",
        endTime: "12:00 PM",
        type: "Theory",
        room: "Room 305",
        teacher: "Prof. Emily Davis",
        status: "absent"
    },
    {
        id: 6,
        subject: "Data Structures",
        date: "2026-09-18",
        day: "Friday",
        startTime: "12:00 PM",
        endTime: "1:00 PM",
        type: "Theory",
        room: "Room 204",
        teacher: "Prof. Michael Johnson",
        status: "present"
    },
    {
        id: 7,
        subject: "DBMS",
        date: "2026-09-18",
        day: "Friday",
        startTime: "2:00 PM",
        endTime: "3:00 PM",
        type: "Theory",
        room: "Room 201",
        teacher: "Prof. Michael Johnson",
        status: "present"
    }
];

export const students = [
    {
        id: 1,
        name: "John Doe",
        rollNo: "CE001"
    },
    {
        id: 2,
        name: "Jane Smith",
        rollNo: "CE002"
    },
    {
        id: 3,
        name: "David Thompson",
        rollNo: "CE003"
    },
    {
        id: 4,
        name: "Chris Davis",
        rollNo: "CE004"
    },
    {
        id: 5,
        name: "Alex Martin",
        rollNo: "CE005"
    }
];

export const events = [
    {
        title: "Tech Fest 2026",
        date: "28 September 2026",
        description: "Annual technical festival with competitions and workshops."
    },
    {
        title: "Coding Contest",
        date: "3 October 2026",
        description: "Solve programming problems and compete with other students."
    },
    {
        title: "Guest Lecture",
        date: "8 October 2026",
        description: "Industry expert session on modern software development."
    }
];

export const notes = [
    {
        subject: "DBMS",
        title: "SQL and Joins Notes",
        type: "PDF"
    },
    {
        subject: "Data Structures",
        title: "Linked List Notes",
        type: "PDF"
    },
    {
        subject: "Web Development",
        title: "React Basics PPT",
        type: "PPT"
    }
];

export const exams = [
    {
        subject: "DBMS",
        date: "10 October 2026",
        time: "10:00 AM"
    },
    {
        subject: "Data Structures",
        date: "13 October 2026",
        time: "10:00 AM"
    },
    {
        subject: "Web Development",
        date: "16 October 2026",
        time: "2:00 PM"
    }
];

export const books = [
    {
        name: "Database System Concepts",
        author: "Korth"
    },
    {
        name: "Data Structures Using C++",
        author: "Schaum's"
    },
    {
        name: "Learning React",
        author: "O'Reilly"
    }
];
