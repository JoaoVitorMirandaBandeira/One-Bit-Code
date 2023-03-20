async function requestsGET() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const country = await response.json();
  const paises = [
    "Brazil",
    "Spain",
    "United States Minor Outlying Islands",
    "South Africa",
  ];
  let result = [];
  country.find((e) => {
    paises.includes(e.name.common) ? result.push(e) : false;
  });
  formatCauntry(result);
}

async function formatCauntry(element) {
  element.forEach((country) => {
    const div = document.createElement("div");
    div.classList.add("country");

    const h2 = document.createElement("h2");
    const nameCountry = country.name.common;
    h2.innerText = nameCountry;
    console.log(nameCountry);

    const img = document.createElement("img");
    img.src = country.flags.svg;
    img.alt = nameCountry;

    div.append(h2, img);
    document.querySelector("#countainer").append(div);
  });
}
requestsGET();
