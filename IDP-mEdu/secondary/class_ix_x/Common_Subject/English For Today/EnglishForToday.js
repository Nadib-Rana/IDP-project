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

// second navigation

const secondary_menu_icon = document.getElementById("secondary_menu_icon");
        const nav_link = document.getElementById("nav-links");

        // Toggle the display of the navigation menu
        secondary_menu_icon.onclick = function() {
            if (nav_link.style.display === "block") {
                nav_link.style.display = "none";
            } else {
                nav_link.style.display = "block";
            }
        }
// This is the left side navigation
const leftside_menu_icon = document.getElementById("leftside_menu_icon");
        const left_navigation = document.getElementById("left_navigation");

        // Toggle the display of the navigation menu
        leftside_menu_icon.onclick = function() {
            if (left_navigation.style.display === "block") {
                left_navigation.style.display = "none";
            } else {
                left_navigation.style.display = "block";
            }
        }


