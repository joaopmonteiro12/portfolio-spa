const ENDPOINT = "https://api.github.com/users/joaopmonteiro12/repos"

async function getRepo() {
 
    const response = await fetch(ENDPOINT, {
        method: "GET",
        headers: {
            Accept: "application/vnd.github.v3+json"
        }
    })

    const body = await response.json();
    
    if(!response.ok){
        throw new Error(body.message);
    }

    return body;
}

export default { getRepo };