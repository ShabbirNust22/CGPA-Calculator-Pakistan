// University grading systems

const gradingSystems = {
    // Research the GPA systems of various universities 
    nust: {
        description: "4.0 Scale (A=4.0, A-=3.7, B+=3.3, B=3.0, B-=2.7, C+=2.3, C=2.0, C-=1.7, D+=1.3, D=1.0, F=0.0)",
        grades: [
            { value: 4.0, label: "A (4.0)" },
            { value: 3.7, label: "A- (3.7)" },
            { value: 3.3, label: "B+ (3.3)" },
            { value: 3.0, label: "B (3.0)" },
            { value: 2.7, label: "B- (2.7)" },
            { value: 2.3, label: "C+ (2.3)" },
            { value: 2.0, label: "C (2.0)" },
            { value: 1.7, label: "C- (1.7)" },
            { value: 1.3, label: "D+ (1.3)" },
            { value: 1.0, label: "D (1.0)" },
            { value: 0.0, label: "F (0.0)" }
        ]
    },
    comsats: {
        description: "4.0 Scale with +/- grading (A=4.0, A-=3.67, B+=3.33, B=3.0, B-=2.67, C+=2.33, C=2.0, C-=1.67, D+=1.33, D=1.0, F=0.0)",
        grades: [
            { value: 4.0, label: "A (4.0)" },
            { value: 3.67, label: "A- (3.67)" },
            { value: 3.33, label: "B+ (3.33)" },
            { value: 3.0, label: "B (3.0)" },
            { value: 2.67, label: "B- (2.67)" },
            { value: 2.33, label: "C+ (2.33)" },
            { value: 2.0, label: "C (2.0)" },
            { value: 1.67, label: "C- (1.67)" },
            { value: 1.33, label: "D+ (1.33)" },
            { value: 1.0, label: "D (1.0)" },
            { value: 0.0, label: "F (0.0)" }
        ]
    },
    pucit: {
        description: "4.0 Scale (A=4.0, B=3.0, C=2.0, D=1.0, F=0.0)",
        grades: [
            { value: 4.0, label: "A (4.0)" },
            { value: 3.0, label: "B (3.0)" },
            { value: 2.0, label: "C (2.0)" },
            { value: 1.0, label: "D (1.0)" },
            { value: 0.0, label: "F (0.0)" }
        ]
    },
    uet: {
        description: "Percentage-based (85-100%=4.0, 80-84%=3.7, 75-79%=3.3, 70-74%=3.0, 65-69%=2.7, 60-64%=2.3, 55-59%=2.0, 50-54%=1.7, Below 50%=0.0)",
        grades: [
            { value: 4.0, label: "A (85-100%)" },
            { value: 3.7, label: "A- (80-84%)" },
            { value: 3.3, label: "B+ (75-79%)" },
            { value: 3.0, label: "B (70-74%)" },
            { value: 2.7, label: "B- (65-69%)" },
            { value: 2.3, label: "C+ (60-64%)" },
            { value: 2.0, label: "C (55-59%)" },
            { value: 1.7, label: "C- (50-54%)" },
            { value: 0.0, label: "F (Below 50%)" }
        ]
    },
    fast: {
        description: "Strict 4.0 Scale (A=4.0, B=3.0, C=2.0, D=1.0, F=0.0) with no +/- grades",
        grades: [
            { value: 4.0, label: "A (4.0)" },
            { value: 3.0, label: "B (3.0)" },
            { value: 2.0, label: "C (2.0)" },
            { value: 1.0, label: "D (1.0)" },
            { value: 0.0, label: "F (0.0)" }
        ]
    },
    giki: {
        description: "4.0 Scale (A=4.0, B=3.0, C=2.0, D=1.0, F=0.0) with no +/- grades",
        grades: [
            { value: 4.0, label: "A (4.0)" },
            { value: 3.0, label: "B (3.0)" },
            { value: 2.0, label: "C (2.0)" },
            { value: 1.0, label: "D (1.0)" },
            { value: 0.0, label: "F (0.0)" }
        ]
    },
    lums: {
        description: "4.0 Scale (A=4.0, A-=3.7, B+=3.3, B=3.0, B-=2.7, C+=2.3, C=2.0, C-=1.7, D+=1.3, D=1.0, F=0.0)",
        grades: [
            { value: 4.0, label: "A (4.0)" },
            { value: 3.7, label: "A- (3.7)" },
            { value: 3.3, label: "B+ (3.3)" },
            { value: 3.0, label: "B (3.0)" },
            { value: 2.7, label: "B- (2.7)" },
            { value: 2.3, label: "C+ (2.3)" },
            { value: 2.0, label: "C (2.0)" },
            { value: 1.7, label: "C- (1.7)" },
            { value: 1.3, label: "D+ (1.3)" },
            { value: 1.0, label: "D (1.0)" },
            { value: 0.0, label: "F (0.0)" }
        ]
    },
    iba: {
        description: "4.0 Scale (A=4.0, A-=3.7, B+=3.3, B=3.0, B-=2.7, C+=2.3, C=2.0, C-=1.7, D+=1.3, D=1.0, F=0.0)",
        grades: [
            { value: 4.0, label: "A (4.0)" },
            { value: 3.7, label: "A- (3.7)" },
            { value: 3.3, label: "B+ (3.3)" },
            { value: 3.0, label: "B (3.0)" },
            { value: 2.7, label: "B- (2.7)" },
            { value: 2.3, label: "C+ (2.3)" },
            { value: 2.0, label: "C (2.0)" },
            { value: 1.7, label: "C- (1.7)" },
            { value: 1.3, label: "D+ (1.3)" },
            { value: 1.0, label: "D (1.0)" },
            { value: 0.0, label: "F (0.0)" }
        ]
    },
    bzu: {
        description: "4.0 Scale (A=4.0, A-=3.7, B+=3.3, B=3.0, B-=2.7, C+=2.3, C=2.0, C-=1.7, D+=1.3, D=1.0, F=0.0)",
        grades: [
            { value: 4.0, label: "A (4.0)" },
            { value: 3.7, label: "A- (3.7)" },
            { value: 3.3, label: "B+ (3.3)" },
            { value: 3.0, label: "B (3.0)" },
            { value: 2.7, label: "B- (2.7)" },
            { value: 2.3, label: "C+ (2.3)" },
            { value: 2.0, label: "C (2.0)" },
            { value: 1.7, label: "C- (1.7)" },
            { value: 1.3, label: "D+ (1.3)" },
            { value: 1.0, label: "D (1.0)" },
            { value: 0.0, label: "F (0.0)" }
        ]
    },
    uop: {
        description: "4.0 Scale (A=4.0, A-=3.7, B+=3.3, B=3.0, B-=2.7, C+=2.3, C=2.0, C-=1.7, D+=1.3, D=1.0, F=0.0)",
        grades: [
            { value: 4.0, label: "A (4.0)" },
            { value: 3.7, label: "A- (3.7)" },
            { value: 3.3, label: "B+ (3.3)" },
            { value: 3.0, label: "B (3.0)" },
            { value: 2.7, label: "B- (2.7)" },
            { value: 2.3, label: "C+ (2.3)" },
            { value: 2.0, label: "C (2.0)" },
            { value: 1.7, label: "C- (1.7)" },
            { value: 1.3, label: "D+ (1.3)" },
            { value: 1.0, label: "D (1.0)" },
            { value: 0.0, label: "F (0.0)" }
        ]
    }
};

const subjectCourses = {
    aeronautical: {
        name: "Aeronautical Engineering",
        courses: [
            "Aerodynamics",
            "Aircraft Structures",
            "Flight Mechanics",
            "Propulsion Systems",
            "Avionics",
            "Aircraft Design",
            "Aerospace Materials"
        ]
    },
    civil: {
        name: "Civil Engineering",
        courses: [
            "Structural Analysis",
            "Geotechnical Engineering",
            "Transportation Engineering",
            "Hydraulics",
            "Construction Management",
            "Surveying",
            "Concrete Technology"
        ]
    },
    electrical: {
        name: "Electrical and Electronic Engineering",
        courses: [
            "Circuit Theory",
            "Power Systems",
            "Control Systems",
            "Digital Signal Processing",
            "Microelectronics",
            "Electrical Machines",
            "Power Electronics"
        ]
    },
    mechanical: {
        name: "Mechanical Engineering",
        courses: [
            "Thermodynamics",
            "Fluid Mechanics",
            "Machine Design",
            "Heat Transfer",
            "Manufacturing Processes",
            "Mechanical Vibrations",
            "Automotive Engineering"
        ]
    },
    computer: {
        name: "Computer Science",
        courses: [
            "Data Structures",
            "Algorithms",
            "Database Systems",
            "Computer Networks",
            "Artificial Intelligence",
            "Operating Systems",
            "Software Engineering"
        ]
    }
};

// Initialize event listeners
document.addEventListener('DOMContentLoaded', function() {
    updateGradingSystem();
    
    // Subject change listener
    document.getElementById('subject').addEventListener('change', function() {
        populateCourseDropdown();
        clearCourses();
    });
    
    // University change listener
    document.getElementById('university').addEventListener('change', function() {
        updateGradingSystem();
    });
    
    // Initialize course dropdown
    populateCourseDropdown();
});

// Function to populate course dropdown based on selected subject
function populateCourseDropdown() {
    const subject = document.getElementById('subject').value;
    const courseDropdown = document.getElementById('course-dropdown');
    
    courseDropdown.innerHTML = '<option value="">Select a course</option>';
    
    if (subject !== 'general') {
        subjectCourses[subject].courses.forEach(course => {
            const option = document.createElement('option');
            option.value = course;
            option.textContent = course;
            courseDropdown.appendChild(option);
        });
    }
}

// Function to clear all courses when subject changes
function clearCourses() {
    const coursesContainer = document.querySelector('.courses-container');
    coursesContainer.innerHTML = '';
}

// Update grading system based on selected university
function updateGradingSystem() {
    const university = document.getElementById('university').value;
    const system = gradingSystems[university];
    document.getElementById('grading-system').textContent = system.description;
    
    // Update all grade dropdowns
    const gradeDropdowns = document.querySelectorAll('.grade');
    gradeDropdowns.forEach(dropdown => {
        dropdown.innerHTML = '';
        system.grades.forEach(grade => {
            const option = document.createElement('option');
            option.value = grade.value;
            option.textContent = grade.label;
            dropdown.appendChild(option);
        });
    });
}

// Add a new course input field with selected course
function addCourse() {
    const selectedCourse = document.getElementById('course-dropdown').value;
    if (!selectedCourse) {
        alert("Please select a course first");
        return;
    }

    const coursesContainer = document.querySelector('.courses-container');
    const courseCount = coursesContainer.children.length + 1;
    
    const newCourse = document.createElement('div');
    newCourse.className = 'course-input';
    newCourse.id = `course${courseCount}`;
    
    newCourse.innerHTML = `
        <div class="course-header">
            <h3>Course #${courseCount}</h3>
            <button class="remove-course" onclick="removeCourse('course${courseCount}')">×</button>
        </div>
        <div class="input-group">
            <input type="text" class="course-name" value="${selectedCourse}" readonly>
            <input type="number" placeholder="Credit Hours" min="1" max="6" class="credit-hours">
            <select class="grade">
                ${gradingSystems[document.getElementById('university').value].grades.map(grade => 
                    `<option value="${grade.value}">${grade.label}</option>`
                ).join('')}
            </select>
        </div>
    `;
    
    coursesContainer.appendChild(newCourse);
}

// Remove a course input field
function removeCourse(courseId) {
    const course = document.getElementById(courseId);
    if (course && document.querySelectorAll('.course-input').length > 0) {
        course.remove();
        
        // Renumber remaining courses
        const courses = document.querySelectorAll('.course-input');
        courses.forEach((course, index) => {
            course.id = `course${index + 1}`;
            course.querySelector('h3').textContent = `Course #${index + 1}`;
            course.querySelector('.remove-course').setAttribute('onclick', `removeCourse('course${index + 1}')`);
        });
    }
}

// Calculate CGPA
async function calculateCGPA() {
    const courses = document.querySelectorAll('.course-input');
    const university = document.getElementById('university').value;
    const subject = document.getElementById('subject').value;
    
    let totalGradePoints = 0;
    let totalCreditHours = 0;
    let allValid = true;
    
    const coursesData = [];
    
    courses.forEach(course => {
        const name = course.querySelector('.course-name').value;
        const creditHours = parseFloat(course.querySelector('.credit-hours').value);
        const grade = parseFloat(course.querySelector('.grade').value);
        
        if (!name || isNaN(creditHours) {
            allValid = false;
            return;
        }
        
        totalGradePoints += grade * creditHours;
        totalCreditHours += creditHours;
        
        coursesData.push({
            name,
            creditHours,
            grade
        });
    });
    
    if (!allValid || totalCreditHours === 0) {
        alert("Please fill in all course details with valid values.");
        return;
    }
    
    const cgpa = totalGradePoints / totalCreditHours;
    
    // Display result
    document.getElementById('cgpa-result').textContent = cgpa.toFixed(2);
    document.getElementById('result-description').innerHTML = `
        <p>Based on ${coursesData.length} courses and ${totalCreditHours} credit hours at ${document.getElementById('university').options[document.getElementById('university').selectedIndex].text}</p>
    `;
    
    document.getElementById('result-container').style.display = 'block';
    
    // Scroll to result
    document.getElementById('result-container').scrollIntoView({ behavior: 'smooth' });
    
    // Send data to backend (optional)
    try {
        const response = await fetch('/api/calculate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                university,
                subject,
                courses: coursesData,
                cgpa
            })
        });
        
        if (!response.ok) {
            console.error('Failed to save calculation');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

// Initialize with default university
document.addEventListener('DOMContentLoaded', function() {
    updateGradingSystem();

    // NEW: Subject change listener
    document.getElementById('subject').addEventListener('change', function() {
        populateCourseDropdown();
        //clearCourses();
        document.getElementById('grading-system').textContent = 
            gradingSystems[document.getElementById('university').value].description;
});

// NEW: University change listener
    document.getElementById('university').addEventListener('change', function() {
        updateGradingSystem();
    });
    
    // Initialize course dropdown
    populateCourseDropdown();
});

