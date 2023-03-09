const chartPaisPoblacion = document.querySelector("#poblacion-pais");

const urlBase = "https://countriesnow.space/api/v0.1/countries/population"; // API

document.addEventListener('DOMContentLoaded', () => {

    // Ejecutar Peticion a API
    obtenerPaises()

})

const obtenerPaises = async () => {

    // fetch
    const response = await fetch(urlBase); // GET
    console.log(response);

    // json
    const { data } = await response.json(); // destructuracion { msg, error, data }
    console.log(data);

    // manipular json en chartjs
    const primerPais = data[100];
    console.log(primerPais);

    const chartConfig = {
        type: 'bar',
        data: {
            labels: primerPais.populationCounts.map(population => population.year), // [1960,1961,....]
            datasets: [{
                label: primerPais.country,
                data: primerPais.populationCounts.map(population => population.value),
                backgroundColor: primerPais.populationCounts.map(() => 'rgba(255, 99, 132, 0.2)')
            }]
        },
        options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
        },
    }

    const chart = new Chart(
        chartPaisPoblacion,
        chartConfig
    )

}
