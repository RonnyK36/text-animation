const containerEl = document.querySelector(".container");

const careers = ['Web Developer', 'Freelancer', 'IT Specialist', 'Mobile Developer'];

let careerIndex = 0;
let characterIndex = 0;

updateCareer();

function updateCareer() {
    characterIndex++;
    containerEl.innerHTML = `<h1>I am ${careers[careerIndex].slice(0, 1) === "I" ? "an" : "a"} ${careers[careerIndex].slice(0, characterIndex)}</h1>`;


    setTimeout(updateCareer, 400);

    if (characterIndex === careers[careerIndex].length) {
        careerIndex++;

        characterIndex = 0;
    }
    if (careerIndex === careers.length) {
        careerIndex = 0;
    }
}