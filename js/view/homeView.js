function render(){

    const container = document.querySelector('#container');
    container.innerHTML = "";

    createTitle();

    const cvButton = document.querySelector("#cv");
    cvButton.addEventListener("click", (event) => {
        event.preventDefault();
        window.open("../assets/cv_joaomonteiro.pdf", '_blank');
    });

    const linkedin = document.querySelector(".linkedin");
    linkedin.addEventListener("click", (event) => {
        event.preventDefault();
        window.open("https://www.linkedin.com/in/joao-p-monteiro12/", '_blank');
    });

    const github = document.querySelector(".github");
    github.addEventListener("click", (event) => {
        event.preventDefault();
        window.open("https://github.com/joaopmonteiro12?tab=repositories", '_blank');
    });

}

function createTitle(){

    const div = document.createElement('div');
    div.className = "d-flex justify-content-center align-items-center";

    const header = document.createElement('h1');
    header.style.color = "white";
    header.innerHTML = "Welcome to my Portfolio";
    

    container.appendChild(div);
    div.appendChild(header);
}


export default { render };