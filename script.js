let countries=[
    {country: 'China', population: 1377422166},
    {country: 'India', population: 1295210000},
    {country: 'United States of America', population: 323947000},
    {country: 'Indonesia', population: 258705000},
    {country: 'Brazil', population: 206135893},
    {country: 'Pakistan', population: 194125062},
    {country: 'Nigeria', population: 186988000},
    {country: 'Bangladesh', population: 161006790},
    {country: 'Russian Federation', population: 146599183},
    {country: 'Japan', population: 126960000}
    ]

    function filterCountriesStartingWithB(countries) {
        return countries.filter(function(country) {
          return country.country[0] == 'B';
        });
      }
      let filteredCountries = filterCountriesStartingWithB(countries);
      console.log(filteredCountries);
// question 2 , i could not use filter so i used sort to arrange the numbers from the highest to the lowest
   function filterOutPopulation(countries){
      let filteroutCountries = countries.sort(function(x,y){
        return y.population - x.population
      })
      return filteroutCountries.slice(0,5)
   }
 let highestPopulation = filterOutPopulation(countries)
 console.log(highestPopulation)

 //question 3
const usersAPI = 'https://jsonplaceholder.typicode.com/users';


async function fetchAndPrintUserDetails() {
  try {
    // using fetch to get  data from the API
    let response = await fetch(usersAPI);
    

    // calling the JSON response
    let users = await response.json();

    // using foreach to get the keys and properties of the userapi object
    users.forEach(user => {
      console.log(`Name: ${user.name}`);
      console.log(`Username: ${user.username}`);
      console.log(`Email: ${user.email}`);
      console.log(`Street: ${user.address.street}`);
      console.log(`Catchphrase: ${user.company.catchPhrase}`);
    });
  } catch (error) {
    console.log(error);
  }
}
fetchAndPrintUserDetails()
    

//  question 4 destructuring
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const{width, height ,area , perimeter} = rectangle
console.log(width)
console.log(height)
console.log(area)
console.log(perimeter)