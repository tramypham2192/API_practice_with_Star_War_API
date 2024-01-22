const getResidentsBtn = document.querySelector("#getResidents");
function getResidentsFunc() {
    axios.get('https://swapi.dev/api/planets/?search=Alderaan')
    .then((res) => {
        for (element of res.data.results[0].residents) {
            console.log(element);
            axios.get(element)
            .then((res) => {
                console.log(res.data);
                const h2element = document.createElement('h2');
                h2element.textContent = res.data.name;
                const ulElement = document.querySelector("#listOfResidentsName");
                ulElement.appendChild(h2element); 
            })
        }
    })
}
getResidentsBtn.addEventListener('click', getResidentsFunc);




