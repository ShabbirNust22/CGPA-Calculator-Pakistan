// This object holds the grading systems for various universities in Pakistan.
const gradingSystems = {
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

// This object holds the course lists for different subjects.
const subjectCourses = {
    general: [
        { value: "general-course-1", label: "General Course 1" },
        { value: "general-course-2", label: "General Course 2" },
        { value: "general-course-3", label: "General Course 3" }
    ],
    aeronautical: [
        { value: "aerodynamics", label: "Aerodynamics" },
        { value: "aircraft-structures", label: "Aircraft Structures" },
        { value: "flight-mechanics", label: "Flight Mechanics" },
        { value: "propulsion-systems", label: "Propulsion Systems" },
        { value: "aircraft-design", label: "Aircraft Design" },
        { value: "aerospace-materials", label: "Aerospace Materials" },
        { value: "avionics", label: "Avionics" }
    ],
    civil: [
        { value: "hydrology", label: "Hydrology" },
        { value: "geotechnical-engineering", label: "Geotechnical Engineering" },
        { value: "structural-analysis", label: "Structural Analysis" },
        { value: "transportation-engineering", label: "Transportation Engineering" },
        { value: "construction-management", label: "Construction Management" },
        { value: "concrete-structure", label: "Concrete Structure" } // Added new course
    ],
    electrical: [
        { value: "circuit-analysis", label: "Circuit Analysis" },
        { value: "digital-logic-design", label: "Digital Logic Design" },
        { value: "electromagnetic-theory", label: "Electromagnetic Theory" },
        { value: "power-systems", label: "Power Systems" },
        { value: "control-systems", label: "Control Systems" }
    ],
    mechanical: [
        { value: "thermodynamics", label: "Thermodynamics" },
        { value: "fluid-mechanics", label: "Fluid Mechanics" },
        { value: "hydraulics", label: "Hydraulics" },
        { value: "heat-transfer", label: "Heat Transfer" },
        { value: "machine-design", label: "Machine Design" },
        { value: "manufacturing-processes", label: "Manufacturing Processes" }
    ],
    business: [
        { value: "marketing-analytics", label: "Marketing Analytics" },
        { value: "financial-modeling", label: "Financial Modeling" },
        { value: "business-intelligence", label: "Business Intelligence" },
        { value: "data-visualization", label: "Data Visualization" },
        { value: "predictive-analytics", label: "Predictive Analytics" }
    ],
    computer: [
        { value: "data-structures", label: "Data Structures" },
        { value: "algorithms", label: "Algorithms" },
        { value: "operating-systems", label: "Operating Systems" },
        { value: "database-systems", label: "Database Systems" },
        { value: "computer-networks", label: "Computer Networks" },
        { value: "artificial-intelligence", label: "Artificial Intelligence" },
        { value: "software-engineering", label: "Software Engineering" }
    ]
};

// Function to create a single course input group
function createCourseInputGroup() {
    const coursesContainer = document.getElementById('courses-container');
    const courseGroup = document.createElement('div');
    courseGroup.classList.add('course-input-group');

    const courseFields = document.createElement('div');
    courseFields.classList.add('course-input-fields');

    const subjectDropdown = document.getElementById('subject');
    const selectedSubject = subjectDropdown.value;
    const courses = subjectCourses[selectedSubject] || subjectCourses['general'];

    // Course Name Dropdown
    const courseDropdown = document.createElement('select');
    courseDropdown.classList.add('course-name');
    courses.forEach(course => {
        const option = document.createElement('option');
        option.value = course.value;
        option.textContent = course.label;
        courseDropdown.appendChild(option);
    });

    // Credit Hours Input
    const creditHoursInput = document.createElement('input');
    creditHoursInput.type = 'number';
    creditHoursInput.classList.add('credit-hours');
    creditHoursInput.placeholder = 'Credit Hours';
    creditHoursInput.min = "1";
    creditHoursInput.value = "3"; // Default value

    // Grade Dropdown
    const gradeDropdown = document.createElement('select');
    gradeDropdown.classList.add('grade');

    // Remove Button
    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-course');
    removeBtn.textContent = 'x';
    removeBtn.onclick = () => coursesContainer.removeChild(courseGroup);

    courseFields.appendChild(courseDropdown);
    courseFields.appendChild(creditHoursInput);
    courseFields.appendChild(gradeDropdown);
    
    courseGroup.appendChild(courseFields);
    courseGroup.appendChild(removeBtn);
    coursesContainer.appendChild(courseGroup);

    // Update grade dropdown for this new course
    updateGradeDropdowns();
}

// Function to update all grade dropdowns based on the selected university
function updateGradeDropdowns() {
    const universitySelector = document.getElementById('university');
    const selectedUniversity = universitySelector.value;
    const grades = gradingSystems[selectedUniversity].grades;
    const gradeDropdowns = document.querySelectorAll('.grade');

    gradeDropdowns.forEach(dropdown => {
        // Clear previous options
        dropdown.innerHTML = '';
        // Add new options
        grades.forEach(grade => {
            const option = document.createElement('option');
            option.value = grade.value;
            option.textContent = grade.label;
            dropdown.appendChild(option);
        });
    });
}

// Function to populate the subject course dropdown based on the selected subject
function updateCourseDropdowns() {
    const subjectDropdown = document.getElementById('subject');
    const selectedSubject = subjectDropdown.value;
    const courses = subjectCourses[selectedSubject] || subjectCourses['general'];
    const courseNameDropdowns = document.querySelectorAll('.course-name');

    courseNameDropdowns.forEach(dropdown => {
        const selectedValue = dropdown.value; // Preserve the selected value if it exists
        dropdown.innerHTML = '';
        courses.forEach(course => {
            const option = document.createElement('option');
            option.value = course.value;
            option.textContent = course.label;
            dropdown.appendChild(option);
        });
        dropdown.value = selectedValue; // Set the value back
    });
}

// Function to update the grading system description
function updateGradingSystemDescription() {
    const universitySelector = document.getElementById('university');
    const selectedUniversity = universitySelector.value;
    const description = gradingSystems[selectedUniversity].description;
    document.getElementById('grading-system').textContent = description;
}


// Main calculation function
function calculateCGPA() {
    let totalGradePoints = 0;
    let totalCreditHours = 0;

    const courseGroups = document.querySelectorAll('.course-input-group');
    
    if (courseGroups.length === 0) {
        alert("Please add at least one course to calculate.");
        return;
    }

    courseGroups.forEach(group => {
        const creditHours = parseFloat(group.querySelector('.credit-hours').value);
        const gradeValue = parseFloat(group.querySelector('.grade').value);

        if (!isNaN(creditHours) && !isNaN(gradeValue)) {
            totalGradePoints += creditHours * gradeValue;
            totalCreditHours += creditHours;
        }
    });

    const resultContainer = document.getElementById('result-container');
    const cgpaResultElement = document.getElementById('cgpa-result');
    const resultDescriptionElement = document.getElementById('result-description');
    
    if (totalCreditHours > 0) {
        const cgpa = (totalGradePoints / totalCreditHours).toFixed(2);
        cgpaResultElement.textContent = cgpa;
        resultDescriptionElement.textContent = `Your CGPA is ${cgpa} on a 4.0 scale.`;
        resultContainer.style.display = 'block';
    } else {
        cgpaResultElement.textContent = '0.00';
        resultDescriptionElement.textContent = 'Please enter valid credit hours and grades.';
        resultContainer.style.display = 'block';
    }
    
    // Scroll to the result
    resultContainer.scrollIntoView({ behavior: 'smooth' });
}


// Event listeners for page interactions
document.addEventListener('DOMContentLoaded', () => {
    // Initial setup on page load
    createCourseInputGroup();
    updateGradingSystemDescription();

    // Event listener for adding a new course
    document.getElementById('add-course-btn').addEventListener('click', createCourseInputGroup);

    // Event listener for university change
    document.getElementById('university').addEventListener('change', () => {
        updateGradingSystemDescription();
        updateGradeDropdowns();
    });

    // Event listener for subject change
    document.getElementById('subject').addEventListener('change', () => {
        // Clear all existing courses when subject changes
        document.getElementById('courses-container').innerHTML = '';
        // Add a new course group for the new subject
        createCourseInputGroup();
    });

    // Event listener for the main calculation button
    document.getElementById('calculate-btn').addEventListener('click', calculateCGPA);
});
