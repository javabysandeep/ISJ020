const name = "Akshay";
const score = 80;
const course = "Full Stack Java";

//old way
const student1 = {
    name: name,
    score: score,
    course: course
};


console.log(`old way obejct creation = ${student1}`);


// ES6 shorthand way
const student2 = { name, score, course };
console.log(`ES6 way obejct creation = ${student2}`);

//property [key value pair] ==> entry => row = record

//computed property keys
const field = "score";
const prefix = "student";

const obj = {
    [field]: 88, // key is score
    [`${prefix}Id`]: 101 // key is studentId
};
console.log(obj); // {score : 88, studentId : 101}


//Object destructuring  : original object we are not modified
const student3 = {
    studentName: "Dev",
    studentScore: 81,
    city: "Mumbai"
};
const { studentName, studentScore } = student3;
console.log(studentName, studentScore); //// Dev 81


//rename while destructing
const { studentName: n, studentScore: s } = student3;
console.log(n, s); // Dev 81


//default values in destructuring
const { studentName: n2, batch = "May 2026" } = student3;
console.log(n2, batch); // Dev May 2026


// REST parameters in destructuring 
const { studentName: n3, ...rest } = student3;
console.log(n3);
console.log(rest);


//destructre as function parameters
function printStudentCard({ studentName, studentScore, city }) {
    console.log(`${studentName} | ${studentScore} | ${city}`);
}

printStudentCard(student3); //Dev | 81 | Mumbai



// spread, clone, copy, merge
const base1 = {
    name: "vedant",
    score: 88
};

//reference copy ===> no new object is created. base1 and base2 are pointint to the same object
const base2 = base1;


// cloning :  create a new object using existing object 
// shallow cloning using spread operator
const base3 = { ...base1 };  // spread [preffered]

// shallw cloning using Object.assign() 
const base4 = Object.assign({}, base1);
base4.name = "Vedant name changed in base4";



// merge objects using spread operator
const studentDetails = {
    name: "vedant",
    score: 88
};

const studentAddress = {
    city: "Pune",
    state: "MH",
    country: "India",
    region: "Asia"
};

const merged = { ...studentDetails, ...studentAddress };
//{name: 'vedant', score: 88, city: 'Pune', state: 'MH', country: 'India', region: "Asia"}


// shallow copy : new object will be created with 
// references being copid of contained object

const person1 = {
    name: "vedant",
    age: 88,
    address: {
        city: "Pune",
        state: "MH",
        country: "India",
        region: "Asia"
    }
};

//shallow copy
const person2 = { ...person1 };

//deep copy
const person3 = structuredClone(person1);



//iterating objects
const personDetails = {
    name: "vedant",
    age: 88,
    address: {
        city: "Pune",
        state: "MH",
        country: "India",
        region: "Asia"
    }
    //........
};
console.log(`only keys = ${Object.keys(personDetails)}`);
console.log(`only values = ${Object.values(personDetails)}`);
console.log(`all entries = ${Object.entries(personDetails)}`);


for (const element of Object.values(personDetails)) {
    console.log(element);
}

//loop with entries ---> this is mostly used
for (const [key, value] of Object.entries(personDetails)) {
    console.log(`${key} : ${value}`);
}


const studentRecords = [
    {
        id: 101,
        name: "Saloni",
        address: {
            city: "Pune",
            pincode: "411004"
        },
        courses: ["full stack java", "full stack python"]
    },

    {
        id: 102,
        name: "Supriya",
        address: {
            city: "Mumbai",
            pincode: "411004"
        },
        courses: ["full stack java"]
    }
];

//find the courses in which saloni is enrolled
console.log(studentRecords[0].courses);
const coursesEnrolledBySaloni = studentRecords.filter(
    (arrayElement) => arrayElement.name == "Saloni"
).map((element) => element.courses);

console.log(`coursesEnrolledBySaloni ${coursesEnrolledBySaloni}`);


// find student name and student city

const studentNameCity = [
    {
        name: "Saloni",
        city: "Pune"
    },
    {
        name: "Supriya",
        city: "Mumbai",
    }
];
const studentNameCity2 = studentRecords.map(
    function (student) {
        const transFormedStudent = {
            name: student.name,
            city: student.address.city
        };
        return transFormedStudent;
    }
);
console.log(studentNameCity);
console.log(studentNameCity2);


// student id, name, datewise attendance
const studentAttedanceTracker = [
    {
        id: 1,
        name: "Shubham J",
        attedance: [
            { '21-05-2026': 'P' },
            { '22-05-2026': 'P' },
            { '23-05-2026': 'P' },
            { '24-05-2026': 'P' },
            { '25-05-2026': 'P' },
        ]
    },

    {
        id: 2,
        name: "Samrat",
        attedance: [
            { '21-05-2026': 'P' },
            { '22-05-2026': 'A' },
            { '23-05-2026': 'P' },
            { '24-05-2026': 'P' },
            { '25-05-2026': 'P' },
        ]
    },

];

// find the student name and attendance percetange
const studentNameAttedancePercentage =
    studentAttedanceTracker.map((record) => {
        const transformedStudent = {
            name: record.name,
            percentage: calculateAttedance(record.attedance)
        };
    })

function calculateAttedance(attendance) {
    const totalDays = attendance.length;
    let presentDaysCount = 
    Object.values(attendance).filter(value => value === 'P').length;
    return (presentDaysCount / totalDays) * 100;
}

console.log(studentNameAttedancePercentage);


for( let entry : Object.entries(
    studentAttedanceTracker.map(
        (element)=>{
            let transformed = {
                name : element.name,
                percentage : ( element.attedance.filter(y=>
                    y=='P'
                ).length/element.attedance.length)*100
            };
        }
    )
    
)){

    console.log(entry);

}