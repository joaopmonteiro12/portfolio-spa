function render(data) {
    const container = document.querySelector('#container');
    container.innerHTML = "";

    createStructure();

    data.forEach(element => {

        const divContainer = document.querySelector("#cards-div");

        const anchor = document.createElement('a');
        anchor.href = element.html_url;
        anchor.target = "_blank";
        anchor.style.textDecoration = "none";

        const cardContainer = document.createElement('div');
        cardContainer.className = "card-container col-md-3 col-sm-5 bg-dark rounded"
        cardContainer.style = `
            margin: 20px;
            transition: transform 0.3s, box-shadow 0.3s;
        `


        const cardHeader = document.createElement('div');
        cardHeader.className = "card-header";

        const imgHeader = document.createElement('img');
        imgHeader.src = "../assets/github.png"
        imgHeader.alt = "GitHub logo";
        imgHeader.style.with = "50px"
        imgHeader.style.width = "50px";

        const cardDiv = document.createElement('div');
        cardDiv.className = "card-body";

        const cardTitle = document.createElement('h5');
        cardTitle.className = "card-title text-white";
        cardTitle.innerText = `${element.name}`;

        const cardText = document.createElement('p');
        cardText.className = "card-text text-secondary";
        cardText.innerText = `${element.description}`;

        divContainer.appendChild(cardContainer);
        cardContainer.appendChild(anchor);
        anchor.appendChild(cardHeader);
        anchor.appendChild(cardDiv);
        cardDiv.appendChild(cardTitle);
        cardHeader.appendChild(imgHeader)
        

        if (cardText.innerText !== "null") {
            cardDiv.appendChild(cardText);
        } 
        
        cardContainer.addEventListener('mouseover', () => {
            cardContainer.style.transform = 'scale(1.02)';
            cardContainer.style.boxShadow = '0 8px 20px rgba(255, 255, 255, 0.4)';
        });
        cardContainer.addEventListener('mouseout', () => {
            cardContainer.style.transform = 'scale(1)';
            cardContainer.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.5)';
        });
    })



}

function createStructure() {

    const div = document.createElement('div');
    div.className = "card card-group text-white mb-3 flex justify-content-around";
    div.id = "cards-div"
    div.style.width = "18 rem;";
    div.style.backgroundColor = "black";

    container.appendChild(div);

}


export default { render };