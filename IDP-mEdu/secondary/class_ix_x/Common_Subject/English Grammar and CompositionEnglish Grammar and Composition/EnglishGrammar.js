document.addEventListener('DOMContentLoaded', function() {
    var dropdowns = document.getElementsByClassName("dropdown-btn");
    var lessons = document.querySelectorAll(".dropdown-container a");
    var activeDropdown = null;
    var timer = null;
  
    function startTimer(dropdownContent) {
        timer = setTimeout(function() {
            dropdownContent.style.backgroundColor = 'green'; // Change to desired color
        }, 60 * 60 * 1000); // 60 minutes
    }

    function clearTimer() {
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
    }
  
    for (var i = 0; i < dropdowns.length; i++) {
        dropdowns[i].addEventListener("click", function() {
            clearTimer();

            // Close all dropdowns except the one clicked
            for (var j = 0; j < dropdowns.length; j++) {
                if (dropdowns[j] !== this) {
                    dropdowns[j].nextElementSibling.style.display = "none";
                    dropdowns[j].classList.remove("active");
                    dropdowns[j].nextElementSibling.style.backgroundColor = ''; // Reset background color
                }
            }

            // Toggle the clicked dropdown
            this.classList.toggle("active");
            var dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            } else {
                dropdownContent.style.display = "block";
                startTimer(dropdownContent);
                activeDropdown = dropdownContent;
            }
        });
    }
  
    lessons.forEach(function(lesson) {
        lesson.addEventListener("click", function() {
            clearTimer();

            // Remove active class from all lessons
            lessons.forEach(function(lesson) {
                lesson.classList.remove("active");
            });
            // Add active class to clicked lesson
            this.classList.add("active");
        });
    });
});


// document.addEventListener('DOMContentLoaded', function() {
//     var dropdowns = document.getElementsByClassName("dropdown-btn");
//     var lessons = document.querySelectorAll(".dropdown-container a");
  
//     for (var i = 0; i < dropdowns.length; i++) {
//         dropdowns[i].addEventListener("click", function() {
//             // Close all dropdowns except the one clicked
//             for (var j = 0; j < dropdowns.length; j++) {
//                 if (dropdowns[j] !== this) {
//                     dropdowns[j].nextElementSibling.style.display = "none";
//                     dropdowns[j].classList.remove("active");
//                 }
//             }
//             // Toggle the clicked dropdown
//             this.classList.toggle("active");
//             var dropdownContent = this.nextElementSibling;
//             if (dropdownContent.style.display === "block") {
//                 dropdownContent.style.display = "none";
//             } else {
//                 dropdownContent.style.display = "block";
//             }
//         });
//     }
  
//     lessons.forEach(function(lesson) {
//         lesson.addEventListener("click", function() {
//             // Remove active class from all lessons
//             lessons.forEach(function(lesson) {
//                 lesson.classList.remove("active");
//             });
//             // Add active class to clicked lesson
//             this.classList.add("active");
//         });
//     });
// });

// document.addEventListener('DOMContentLoaded', function() {
//     var dropdowns = document.getElementsByClassName("dropdown-btn");
//     var lessons = document.querySelectorAll(".dropdown-container a");
  
//     for (var i = 0; i < dropdowns.length; i++) {
//         dropdowns[i].addEventListener("click", function() {
//             this.classList.toggle("active");
//             var dropdownContent = this.nextElementSibling;
//             if (dropdownContent.style.display === "block") {
//                 dropdownContent.style.display = "none";
//             } else {
//                 dropdownContent.style.display = "block";
//             }
//         });
//     }
  
//     lessons.forEach(function(lesson) {
//         lesson.addEventListener("click", function() {
//             // Remove active class from all lessons
//             lessons.forEach(function(lesson) {
//                 lesson.classList.remove("active");
//             });
//             // Add active class to clicked lesson
//             this.classList.add("active");
//         });
//     });
//   });


//   const chapter1 = document.getElementById("chapter1");
//   const chapter2 = document.getElementById("chapter2");
//   const chapter3 = document.getElementById("chapter3");
//   const chapter4 = document.getElementById("chapter4");
//   const chapter5 = document.getElementById("chapter5");
//   const chapter6 = document.getElementById("chapter6");
//   const chapter7 = document.getElementById("chapter7");
//   const chapter8 = document.getElementById("chapter8");
//   const chapter9 = document.getElementById("chapter9");
//   const chapter10 = document.getElementById("chapter10");
//   const chapter11 = document.getElementById("chapter11");
//   const chapter12 = document.getElementById("chapter12");
//   const chapter13 = document.getElementById("chapter13");


//   const chapter1Content =document.getElementById("chapter1Content")
//   const chapter2Content =document.getElementById("chapter2Content")
//   const chapter3Content =document.getElementById("chapter3Content")
//   const chapter4Content =document.getElementById("chapter4Content")
//   const chapter5Content =document.getElementById("chapter5Content")
//   const chapter6Content =document.getElementById("chapter6Content")
//   const chapter7Content =document.getElementById("chapter7Content")
//   const chapter8Content =document.getElementById("chapter8Content")
//   const chapter9Content =document.getElementById("chapter9Content")
//   const chapter10Content =document.getElementById("chapter10Content")
//   const chapter11Content =document.getElementById("chapter11Content")
//   const chapter12Content =document.getElementById("chapter12Content")
 
//   chapter1Content.onclick = function (){
 
//     chapter1.style.display = "block";
//     chapter2.style.display = "none";
//     chapter3.style.display = "none";
//     chapter4.style.display = "none";
//     chapter5.style.display = "none";
//     chapter6.style.display = "none";
//     chapter7.style.display = "none";
//     chapter8.style.display = "none";
//     chapter9.style.display = "none";
//     chapter10.style.display = "none";
//     chapter11.style.display = "none";
//     chapter12.style.display = "none";
//     chapter13.style.display = "none";

  
// }
  
// chapter2Content.onclick = function (){
 
//     chapter1.style.display = "none";
//     chapter2.style.display = "block";
//     chapter3.style.display = "none";
//     chapter4.style.display = "none";
//     chapter5.style.display = "none";
//     chapter6.style.display = "none";
//     chapter7.style.display = "none";
//     chapter8.style.display = "none";
//     chapter9.style.display = "none";
//     chapter10.style.display = "none";
//     chapter11.style.display = "none";
//     chapter12.style.display = "none";
//     chapter13.style.display = "none";

// }

// chapter3Content.onclick = function (){
 
//     chapter1.style.display = "none";
//     chapter2.style.display = "none";
//     chapter3.style.display = "block";
//     chapter4.style.display = "none";
//     chapter5.style.display = "none";
//     chapter6.style.display = "none";
//     chapter7.style.display = "none";
//     chapter8.style.display = "none";
//     chapter9.style.display = "none";
//     chapter10.style.display = "none";
//     chapter11.style.display = "none";
//     chapter12.style.display = "none";
//     chapter13.style.display = "none";

// }

// chapter4Content.onclick = function (){
 
//     chapter1.style.display = "none";
//     chapter2.style.display = "none";
//     chapter3.style.display = "none";
//     chapter4.style.display = "block";
//     chapter5.style.display = "none";
//     chapter6.style.display = "none";
//     chapter7.style.display = "none";
//     chapter8.style.display = "none";
//     chapter9.style.display = "none";
//     chapter10.style.display = "none";
//     chapter11.style.display = "none";
//     chapter12.style.display = "none";
//     chapter13.style.display = "none";

// }


// chapter5Content.onclick = function (){
 
//     chapter1.style.display = "none";
//     chapter2.style.display = "none";
//     chapter3.style.display = "none";
//     chapter4.style.display = "none";
//     chapter5.style.display = "block";
//     chapter6.style.display = "none";
//     chapter7.style.display = "none";
//     chapter8.style.display = "none";
//     chapter9.style.display = "none";
//     chapter10.style.display = "none";
//     chapter11.style.display = "none";
//     chapter12.style.display = "none";
//     chapter13.style.display = "none";

// }


// chapter6Content.onclick = function (){
 
//     chapter1.style.display = "none";
//     chapter2.style.display = "none";
//     chapter3.style.display = "none";
//     chapter4.style.display = "none";
//     chapter5.style.display = "none";
//     chapter6.style.display = "block";
//     chapter7.style.display = "none";
//     chapter8.style.display = "none";
//     chapter9.style.display = "none";
//     chapter10.style.display = "none";
//     chapter11.style.display = "none";
//     chapter12.style.display = "none";
//     chapter13.style.display = "none";

// }


// chapter7Content.onclick = function (){
 
//     chapter1.style.display = "none";
//     chapter2.style.display = "none";
//     chapter3.style.display = "none";
//     chapter4.style.display = "none";
//     chapter5.style.display = "none";
//     chapter6.style.display = "none";
//     chapter7.style.display = "block";
//     chapter8.style.display = "none";
//     chapter9.style.display = "none";
//     chapter10.style.display = "none";
//     chapter11.style.display = "none";
//     chapter12.style.display = "none";
//     chapter13.style.display = "none";

// }



// chapter8Content.onclick = function (){
 
//     chapter1.style.display = "none";
//     chapter2.style.display = "none";
//     chapter3.style.display = "none";
//     chapter4.style.display = "none";
//     chapter5.style.display = "none";
//     chapter6.style.display = "none";
//     chapter7.style.display = "none";
//     chapter8.style.display = "block";
//     chapter9.style.display = "none";
//     chapter10.style.display = "none";
//     chapter11.style.display = "none";
//     chapter12.style.display = "none";
//     chapter13.style.display = "none";

// }



// chapter9Content.onclick = function (){
 
//     chapter1.style.display = "none";
//     chapter2.style.display = "none";
//     chapter3.style.display = "none";
//     chapter4.style.display = "none";
//     chapter5.style.display = "none";
//     chapter6.style.display = "none";
//     chapter7.style.display = "none";
//     chapter8.style.display = "none";
//     chapter9.style.display = "block";
//     chapter10.style.display = "none";
//     chapter11.style.display = "none";
//     chapter12.style.display = "none";
//     chapter13.style.display = "none";

// }



// chapter10Content.onclick = function (){
 
//     chapter1.style.display = "none";
//     chapter2.style.display = "none";
//     chapter3.style.display = "none";
//     chapter4.style.display = "none";
//     chapter5.style.display = "none";
//     chapter6.style.display = "none";
//     chapter7.style.display = "none";
//     chapter8.style.display = "none";
//     chapter9.style.display = "none";
//     chapter10.style.display = "block";
//     chapter11.style.display = "none";
//     chapter12.style.display = "none";
//     chapter13.style.display = "none";

// }



// chapter11Content.onclick = function (){
 
//     chapter1.style.display = "none";
//     chapter2.style.display = "none";
//     chapter3.style.display = "none";
//     chapter4.style.display = "none";
//     chapter5.style.display = "none";
//     chapter6.style.display = "none";
//     chapter7.style.display = "none";
//     chapter8.style.display = "none";
//     chapter9.style.display = "none";
//     chapter10.style.display = "none";
//     chapter11.style.display = "block";
//     chapter12.style.display = "none";
//     chapter13.style.display = "none";

// }


// chapter12Content.onclick = function (){
 
//     chapter1.style.display = "none";
//     chapter2.style.display = "none";
//     chapter3.style.display = "none";
//     chapter4.style.display = "none";
//     chapter5.style.display = "none";
//     chapter6.style.display = "none";
//     chapter7.style.display = "none";
//     chapter8.style.display = "none";
//     chapter9.style.display = "none";
//     chapter10.style.display = "none";
//     chapter11.style.display = "none";
//     chapter12.style.display = "block";
//     chapter13.style.display = "none";

// }


// chapter13Content.onclick = function (){
 
//     chapter1.style.display = "none";
//     chapter2.style.display = "none";
//     chapter3.style.display = "none";
//     chapter4.style.display = "none";
//     chapter5.style.display = "none";
//     chapter6.style.display = "none";
//     chapter7.style.display = "none";
//     chapter8.style.display = "none";
//     chapter9.style.display = "none";
//     chapter10.style.display = "none";
//     chapter11.style.display = "none";
//     chapter12.style.display = "none";
//     chapter13.style.display = "block";

// }


// chapter2Content.onclick = function (){
 
//     chapter1.style.display = "none";
//     chapter2.style.display = "block";
//     chapter3.style.display = "none";
//     chapter4.style.display = "none";
//     chapter5.style.display = "none";
//     chapter6.style.display = "none";
//     chapter7.style.display = "none";
//     chapter8.style.display = "none";
//     chapter9.style.display = "none";
//     chapter10.style.display = "none";
//     chapter11.style.display = "none";
//     chapter12.style.display = "none";
//     chapter13.style.display = "none";

// }


// chapter2Content.onclick = function (){
 
//     chapter1.style.display = "none";
//     chapter2.style.display = "block";
//     chapter3.style.display = "none";
//     chapter4.style.display = "none";
//     chapter5.style.display = "none";
//     chapter6.style.display = "none";
//     chapter7.style.display = "none";
//     chapter8.style.display = "none";
//     chapter9.style.display = "none";
//     chapter10.style.display = "none";
//     chapter11.style.display = "none";
//     chapter12.style.display = "none";
//     chapter13.style.display = "none";

// }


// chapter2Content.onclick = function (){
 
//     chapter1.style.display = "none";
//     chapter2.style.display = "block";
//     chapter3.style.display = "none";
//     chapter4.style.display = "none";
//     chapter5.style.display = "none";
//     chapter6.style.display = "none";
//     chapter7.style.display = "none";
//     chapter8.style.display = "none";
//     chapter9.style.display = "none";
//     chapter10.style.display = "none";
//     chapter11.style.display = "none";
//     chapter12.style.display = "none";
//     chapter13.style.display = "none";

// }

const chapters = Array.from({ length: 15 }, (_, i) => document.getElementById(`chapter${i + 1}`));
const chapterContents = chapters.map((_, i) => document.getElementById(`chapter${i + 1}Content`));

function displayChapter(index) {
  chapters.forEach((chapter, i) => {
    chapter.style.display = i === index ? "block" : "none";
  });
}

chapterContents.forEach((content, index) => {
  content.onclick = () => displayChapter(index);
});
