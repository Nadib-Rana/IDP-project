// ------------------------Header top-----------------------------------------------------------
fetch('../BasicFunctionalityOfPages/header/header.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }
        return response.text(); // Extract text from the response
    })
    .then(data => {
        const header_push = document.getElementById('header');
        header_push.innerHTML = data; // Insert the fetched HTML into the header element
    })
    .catch(error => {
        console.error('Error fetching header:', error); // Handle any errors
    });

// -----------------------------------------------------------------------------------------


//This navigation of About ,Tutorial , contract, history
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
// Cache DOM elements
const secondary = document.getElementById("Secondary");
const highSecondary = document.getElementById("High-Secondary");
const diplomaInEngineering = document.getElementById("Diploma");
const university = document.getElementById("University");
const masters = document.getElementById("Masters");
const job = document.getElementById("Job");

const secondaryItems = document.getElementById("Secondary-items");
const highSecondaryItems = document.getElementById("High-secondary-items");
const diplomaInEngineeringItem = document.getElementById("Diploma-in-Engineering-items");
const universityItem = document.getElementById("University-items");
const mastersItem = document.getElementById("Masters-items");
const jobItem = document.getElementById("Job-items");

// Hide all items initially
secondaryItems.style.display = "none";
highSecondaryItems.style.display = "none";
diplomaInEngineeringItem.style.display = "none";
universityItem.style.display = "none";
mastersItem.style.display = "none";
jobItem.style.display = "none";

function hideAllItems() {
    secondaryItems.style.display = "none";
    highSecondaryItems.style.display = "none";
    diplomaInEngineeringItem.style.display = "none";
    universityItem.style.display = "none";
    mastersItem.style.display = "none";
    jobItem.style.display = "none";
    secondary.classList.remove("active");
    highSecondary.classList.remove("active");
    diplomaInEngineering.classList.remove("active");
    university.classList.remove("active");
    masters.classList.remove("active");
    job.classList.remove("active");
}


secondary.onclick = function(event) {
    event.preventDefault();
    if (secondaryItems.style.display === "block") {
        secondaryItems.style.display = "none";
        secondary.classList.remove("active");
    } else {
        hideAllItems();
        secondaryItems.style.display = "block";
        secondary.classList.add("active");
        subjectList_Faculty_of_Arts_and_Humanities.style.display = "none";
        subjectList_Faculty_of_Science.style.display = "none";
        subjectList_Faculty_of_Engineering.style.display = "none";
        subjectList_Faculty_of_Business.style.display = "none";
    subjectList_Faculty_of_Science.style.display = "none";
    subjectList_Faculty_of_Health_Sciences.style.display = "none";
    subjectList_Faculty_of_Law.style.display = "none";
    subjectList_Faculty_of_Fine_Arts.style.display = "none";

    }
};

highSecondary.onclick = function(event) {
    event.preventDefault();
    if (highSecondaryItems.style.display === "block") {
        highSecondaryItems.style.display = "none";
        highSecondary.classList.remove("active");
    } else {
        hideAllItems();
        highSecondaryItems.style.display = "block";
        highSecondary.classList.add("active");
        subjectList_Faculty_of_Arts_and_Humanities.style.display = "none";
    subjectList_Faculty_of_Science.style.display = "none";
    subjectList_Faculty_of_Engineering.style.display = "none";
    subjectList_Faculty_of_Business.style.display = "none";
    subjectList_Faculty_of_Science.style.display = "none";
    subjectList_Faculty_of_Health_Sciences.style.display = "none";
    subjectList_Faculty_of_Law.style.display = "none";
    subjectList_Faculty_of_Fine_Arts.style.display = "none";



    }
};

diplomaInEngineering.onclick = function(event) {
    event.preventDefault();
    if (diplomaInEngineeringItem.style.display === "block") {
        diplomaInEngineeringItem.style.display = "none";
        diplomaInEngineering.classList.remove("active");
    } else {
        hideAllItems();
        diplomaInEngineeringItem.style.display = "block";
        diplomaInEngineering.classList.add("active");
        subjectList_Faculty_of_Arts_and_Humanities.style.display = "none";
       subjectList_Faculty_of_Science.style.display = "none";
       subjectList_Faculty_of_Engineering.style.display = "none";
       subjectList_Faculty_of_Business.style.display = "none";
    subjectList_Faculty_of_Science.style.display = "none";
    subjectList_Faculty_of_Health_Sciences.style.display = "none";
    subjectList_Faculty_of_Law.style.display = "none";
    subjectList_Faculty_of_Fine_Arts.style.display = "none";



    }
};

university.onclick = function(event) {
    event.preventDefault();
    if (universityItem.style.display === "block") {
        universityItem.style.display = "none";
        university.classList.remove("active");
    } else {
        hideAllItems();
        universityItem.style.display = "block";
        university.classList.add("active");
        subjectList_Faculty_of_Arts_and_Humanities.style.display = "none";
        subjectList_Faculty_of_Science.style.display = "none";
        subjectList_Faculty_of_Engineering.style.display = "none";
        subjectList_Faculty_of_Business.style.display = "none";
    subjectList_Faculty_of_Science.style.display = "none";
    subjectList_Faculty_of_Health_Sciences.style.display = "none";
    subjectList_Faculty_of_Law.style.display = "none";
    subjectList_Faculty_of_Fine_Arts.style.display = "none";



    }
};

masters.onclick = function(event) {
    event.preventDefault();
    if (mastersItem.style.display === "block") {
        mastersItem.style.display = "none";
        masters.classList.remove("active");
    } else {
        hideAllItems();
        mastersItem.style.display = "block";
        masters.classList.add("active");
        subjectList_Faculty_of_Arts_and_Humanities.style.display = "none";
       subjectList_Faculty_of_Science.style.display = "none";
       subjectList_Faculty_of_Engineering.style.display = "none";
       subjectList_Faculty_of_Business.style.display = "none";
    subjectList_Faculty_of_Science.style.display = "none";  
    subjectList_Faculty_of_Health_Sciences.style.display = "none";
    subjectList_Faculty_of_Law.style.display = "none";
    subjectList_Faculty_of_Fine_Arts.style.display = "none";



    }
};

job.onclick = function(event) {
    event.preventDefault();
    if (jobItem.style.display === "block") {
        jobItem.style.display = "none";
        job.classList.remove("active");
    } else {
        hideAllItems();
        jobItem.style.display = "block";
        job.classList.add("active");
        subjectList_Faculty_of_Arts_and_Humanities.style.display = "none";
         subjectList_Faculty_of_Science.style.display = "none";
        subjectList_Faculty_of_Engineering.style.display = "none";
    subjectList_Faculty_of_Business.style.display = "none";
    subjectList_Faculty_of_Science.style.display = "none";
    subjectList_Faculty_of_Health_Sciences.style.display = "none";
    subjectList_Faculty_of_Law.style.display = "none";
    subjectList_Faculty_of_Fine_Arts.style.display = "none";

             
    }
};



// Internal part of the faculty Faculty_of_Arts_and_Humanities

const subjectList_Faculty_of_Arts_and_Humanities = document.getElementById("subjectList_Faculty_of_Arts_and_Humanities")
const Faculty_of_Arts_and_Humanities = document.getElementById("Faculty_of_Arts_and_Humanities")


Faculty_of_Arts_and_Humanities.onclick = function (){
    universityItem.style.display = "none";
    subjectList_Faculty_of_Arts_and_Humanities.style.display = "block";
    subjectList_Faculty_of_Science.style.display = "none";
    subjectList_Faculty_of_Engineering.style.display = "none";
    subjectList_Faculty_of_Science.style.display = "none";


}





// Internal part of the faculty Faculty_of_Arts_and_Humanities


const subjectList_Faculty_of_Science = document.getElementById("subjectList_Faculty_of_Science")
const Faculty_of_Science = document.getElementById("Faculty_of_Science")

Faculty_of_Science.onclick = function (){
    universityItem.style.display = "none";
    subjectList_Faculty_of_Science.style.display = "block";
    subjectList_Faculty_of_Engineering.style.display = "none";
    subjectList_Faculty_of_Business.style.display = "none";
    subjectList_Faculty_of_Science.style.display = "none";


}




// subjectList_Faculty_of_Engineering

const subjectList_Faculty_of_Engineering = document.getElementById("subjectList_Faculty_of_Engineering");
const Faculty_of_Engineering = document.getElementById("Faculty_of_Engineering")

Faculty_of_Engineering.onclick = function (){
    universityItem.style.display = "none";
    subjectList_Faculty_of_Engineering.style.display = "block";
    subjectList_Faculty_of_Business.style.display = "none";
    subjectList_Faculty_of_Science.style.display = "none";

}



// subjectList_Faculty_of_Business

const subjectList_Faculty_of_Business = document.getElementById("subjectList_Faculty_of_Business");
const Faculty_of_Business = document.getElementById("Faculty_of_Business")

Faculty_of_Business.onclick = function (){
    universityItem.style.display = "none";
    subjectList_Faculty_of_Business.style.display = "block";
    subjectList_Faculty_of_Science.style.display = "none";
}




// subjectList_Faculty_of_Social_Sciences


const subjectList_Faculty_of_Social_Sciences =document.getElementById("subjectList_Faculty_of_Social_Sciences")
const Faculty_of_Social_Sciences = document.getElementById("Faculty_of_Social_Sciences")

Faculty_of_Social_Sciences.onclick = function (){
    universityItem.style.display = "none";
    subjectList_Faculty_of_Science.style.display = "block";
}

// subjectList_Faculty_of_Social_Sciences


const subjectList_Faculty_of_Health_Sciences =document.getElementById("subjectList_Faculty_of_Health_Sciences")
const Faculty_of_Health_Sciences = document.getElementById("Faculty_of_Health_Sciences")

Faculty_of_Social_Sciences.onclick = function (){
    universityItem.style.display = "none";
    subjectList_Faculty_of_Health_Sciences.style.display = "block";
}



// subjectList_Faculty_of_Education
const subjectList_Faculty_of_Education =document.getElementById("subjectList_Faculty_of_Education")
const Faculty_of_Education = document.getElementById("Faculty_of_Education")

Faculty_of_Education.onclick = function (){
    universityItem.style.display = "none";
    subjectList_Faculty_of_Education.style.display = "block";
}

// subjectList_Faculty_of_Law
const subjectList_Faculty_of_Law =document.getElementById("subjectList_Faculty_of_Law")
const Faculty_of_Law = document.getElementById("Faculty_of_Law")

Faculty_of_Law.onclick = function (){
    universityItem.style.display = "none";
    subjectList_Faculty_of_Law.style.display = "block";
}



// subjectList_Faculty_of_Fine_Arts
const subjectList_Faculty_of_Fine_Arts =document.getElementById("subjectList_Faculty_of_Fine_Arts");
const Faculty_of_Fine_Arts =document.getElementById("Faculty_of_Fine_Arts");

Faculty_of_Fine_Arts.onclick = function (){
    universityItem.style.display = "none";
    subjectList_Faculty_of_Fine_Arts.style.display = "block";
}

// Add Qustions and answeres
const faqContainer = document.getElementById('faq-container');

// Function to generate HTML for FAQ items
function generateFAQ() {
    faqData.forEach(item => {
        const faqItem = document.createElement('div');
        faqItem.classList.add('faq-item');

        const question = document.createElement('div');
        question.classList.add('question');
        question.textContent = item.question;

        const answer = document.createElement('div');
        answer.classList.add('answer');
        answer.textContent = item.answer;

        faqItem.appendChild(question);
        faqItem.appendChild(answer);

        faqContainer.appendChild(faqItem);
    });
}

// Call the function to generate FAQ items
generateFAQ();

// Excercises
const exercisesData = [
    "Walking: Encourage your elderly family members to take short walks daily.",
    "Chair Exercises: Simple exercises like leg lifts or arm circles can be done while sitting in a chair.",
    "Yoga: Gentle yoga poses can help improve flexibility and balance.",
    "Tai Chi: This gentle form of exercise can improve strength and reduce stress.",
    "Water Aerobics: If accessible, water aerobics can provide a low-impact workout for seniors.",
    "Stretching: Encourage stretching exercises to maintain flexibility and prevent stiffness.",
    "Balance Exercises: Activities like standing on one foot or heel-to-toe walking can help improve balance.",
    "Strength Training: Light weightlifting or resistance band exercises can help maintain muscle mass and bone density."
];

const exercisesList = document.getElementById('exercises-list');

// Function to generate HTML for exercises list
function generateExercisesList() {
    exercisesData.forEach(exercise => {
        const exerciseItem = document.createElement('li');
        exerciseItem.textContent = exercise;
        exercisesList.appendChild(exerciseItem);
    });
}

// Call the function to generate exercises list
generateExercisesList();





// footer part
document.addEventListener("DOMContentLoaded", function() {
    // Example of a simple JavaScript interaction with the footer
    const footer = document.getElementById("footer");

    footer.addEventListener("mouseenter", function() {
        footer.style.backgroundColor = "#444";
    });

    footer.addEventListener("mouseleave", function() {
        footer.style.backgroundColor = "#333";
    });
});







// iteam option


document.addEventListener("DOMContentLoaded", function() {
    const facultyHeadings = document.querySelectorAll(".faculty-heading");

    facultyHeadings.forEach(function(heading) {
        heading.addEventListener("click", function() {
            const subject = this.nextElementSibling;
            subject.classList.toggle("show");
        });
    });
});




//device configuretion




// paid cource section


function showModal() {
    document.getElementById('enrollModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('enrollModal').style.display = 'none';
}

// Close the modal when the user clicks outside of it
window.onclick = function(event) {
    var modal = document.getElementById('enrollModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Qustions Bank with answer

function toggleAnswer(answerId) {
    var answer = document.getElementById(answerId);
    if (answer.style.display === "none" || answer.style.display === "") {
        answer.style.display = "block";
    } else {
        answer.style.display = "none";
    }
}

// exam Selection

//Navigation sention trogol








const secondary_menu_icon = document.getElementById("secondary_menu_icon");
        const nav_link = document.getElementById("nav-links");

        // Toggle the display of the navigation menu
        secondary_menu_icon.onclick = function() {
            if (nav_links.style.display === "block") {
                nav_links.style.display = "none";
            } else {
                nav_links.style.display = "block";
            }
        }