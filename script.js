console.log("Portfolio Loaded");

document.querySelector("form")
.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Thank you for contacting me!");

});

const roles = ["Software Developer", "IT Support", "Cloud Enthusiast"];
let currentRoleIndex = 0;
let currentCharIndex = 0;
 // Adjust typing speed (in milliseconds)
const typingText = document.getElementById("typing-text"); // Get the typing text element

function typeRole() {

    if (currentCharIndex < roles[currentRoleIndex].length) {

        typingText.textContent += roles[currentRoleIndex].charAt(currentCharIndex);

        currentCharIndex++;
        
        setTimeout(typeRole, 100); // Adjust typing speed here

    } else {


        setTimeout(eraseRole, 2000); // Wait before erasing
    }
}


function eraseRole() {

    if (currentCharIndex > 0) { 

    typingText.textContent = roles[currentRoleIndex].substring(0, currentCharIndex - 1);

    currentCharIndex--;
    setTimeout(eraseRole, 100); // Adjust erasing speed here
}

else {

    currentRoleIndex++;

    if (currentRoleIndex >= roles.length) {
        currentRoleIndex = 0;
    }
    setTimeout(typeRole, 500); // Wait before typing the next role

}

}

typeRole(); // Start the typing effect

const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", function() {

    document.body.classList.toggle("dark-theme");

});


const button = 

document.querySelectorAll("[data-filter]")

buttons.forEach(button => {

    buttons.addEventListner("click",()=>{


        const filter =

        button.dataset.filter;

        document

        .querySelectorAll(".project-card")

        .array.forEach(card => {

            if (filter === "all" || 

                card.classlist.contains(filter)
            ) {

                card.style.display = "block";

            }

            else{

                card.style.display = "none";
            }
            
        });
    })
    
});

emailjs.init("YOUR_PUBLIC_KEY");

fetch (
    'https://api.github.com/users/YOUR_GITHUB_USERNAME/repos'
)


.then(response=>response.json())
.then(data=>{

    const repoContainer = 

    document.getElementById("repos");

    data.slice(0.6).forEach(repo => {

        repoContainer.innerHTML += '
        
        <div class="project-card">

            <h3>${repo.name}</h3>

            <p>${repo.description || ""}</p>

            </div>

        ';
        
    });

})