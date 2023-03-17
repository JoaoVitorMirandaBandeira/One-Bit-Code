async function requestsGET(){
    const response = await fetch('https://restcountries.com/v3.1/all')
    const countre = await response.json()
}
requestsGET()