// Foreach1
console.log('OPGAVE1 - Foreach1');

let names = ['HenriK', 'JAMshid', 'AndERS', 'EBBe', 'pER', 'MicHAel', 'PETEr'];

names.forEach((name, index, array) => {
    if (name.toLowerCase() === 'henrik' || name.toLowerCase() === 'per') name = name.toUpperCase();
    else name = name.toLowerCase();
    array[index] = name;
})

console.log(names);

// Foreach2
console.log('OPGAVE2 - Foreach2');

let cars = [
    {brand: 'VW', model: 'Passat', fuel: 'diesel', owner_tax: 5550 },
    {brand: 'VW', model: 'Passat', fuel: 'gasoline', owner_tax: 460},
    {brand: 'VW', model: 'Passat', fuel: 'hybrid', owner_tax: 150},
    {brand: 'BMW', model: '320i', fuel: 'diesel', owner_tax: 4280},
    {brand: 'BMW', model: '320i', fuel: 'gasoline', owner_tax: 430},
    {brand: 'BMW', model: '320i', fuel: 'hybrid', owner_tax: 210},
    {brand: 'Tesla', model: 'S', fuel: 'electric', owner_tax: 0 }
]

var increaseOwnerTax = function(cars, fuel, taxPct){
    cars.forEach(c => {
        if (c.fuel === fuel) c.owner_tax += (c.owner_tax/100)*taxPct;
    })
}

increaseOwnerTax(cars, 'diesel', 50);
increaseOwnerTax(cars, 'hybrid', 5);
console.log(cars);

// Map1
console.log('OPGAVE3 - Map1');
/*
let cars = [
    {brand: 'VW', model: 'Passat', fuel: 'diesel', owner_tax: 5550 },
    {brand: 'VW', model: 'Passat', fuel: 'gasoline', owner_tax: 460},
    {brand: 'VW', model: 'Passat', fuel: 'hybrid', owner_tax: 150},
    {brand: 'BMW', model: '320i', fuel: 'diesel', owner_tax: 4280},
    {brand: 'BMW', model: '320i', fuel: 'gasoline', owner_tax: 430},
    {brand: 'BMW', model: '320i', fuel: 'hybrid', owner_tax: 210},
    {brand: 'Tesla', model: 'S', fuel: 'electric', owner_tax: 0 }
]
*/

var carModels = cars.map(c => c.model);

console.log(carModels);

var carBrand = cars.map(c => {return {'Mærke ' : c.brand}});

console.log(carBrand);

// Map2
console.log('OPGAVE4 - Map2');

// Data, fra: http://ergast.com/api/f1/2018/drivers.json?callback=drivers 
var drivers = `[
    {
    "driverId": "grosjean",
    "permanentNumber": "8",
    "code": "GRO",
    "url": "http://en.wikipedia.org/wiki/Romain_Grosjean",
    "givenName": "Romain",
    "familyName": "Grosjean",
    "dateOfBirth": "1986-04-17",
    "nationality": "French"
    },
    {
    "driverId": "hamilton",
    "permanentNumber": "44",
    "code": "HAM",
    "url": "http://en.wikipedia.org/wiki/Lewis_Hamilton",
    "givenName": "Lewis",
    "familyName": "Hamilton",
    "dateOfBirth": "1985-01-07",
    "nationality": "British"
    },
    {
    "driverId": "hulkenberg",
    "permanentNumber": "27",
    "code": "HUL",
    "url": "http://en.wikipedia.org/wiki/Nico_H%C3%BClkenberg",
    "givenName": "Nico",
    "familyName": "Hülkenberg",
    "dateOfBirth": "1987-08-19",
    "nationality": "German"
    },
    {
    "driverId": "kevin_magnussen",
    "permanentNumber": "20",
    "code": "MAG",
    "url": "http://en.wikipedia.org/wiki/Kevin_Magnussen",
    "givenName": "Kevin",
    "familyName": "Magnussen",
    "dateOfBirth": "1992-10-05",
    "nationality": "Danish"
    }    
]`;

var f1Drivers = JSON.parse(drivers);
console.log(f1Drivers);

var myDrivers = f1Drivers.map(driver => {return {Kode : driver.code, Fornavn : driver.givenName, Efternavn : driver.familyName}});
console.log(myDrivers);

// Filter1
console.log('OPGAVE5 - Filter1');
/*
let cars = [
    {brand: 'VW', model: 'Passat', fuel: 'diesel', owner_tax: 5550 },
    {brand: 'VW', model: 'Passat', fuel: 'gasoline', owner_tax: 460},
    {brand: 'VW', model: 'Passat', fuel: 'hybrid', owner_tax: 150},
    {brand: 'BMW', model: '320i', fuel: 'diesel', owner_tax: 4280},
    {brand: 'BMW', model: '320i', fuel: 'gasoline', owner_tax: 430},
    {brand: 'BMW', model: '320i', fuel: 'hybrid', owner_tax: 210},
    {brand: 'Tesla', model: 'S', fuel: 'electric', owner_tax: 0 }
]
*/

var arr = cars.filter(c => c.fuel === 'hybrid' && c.owner_tax < 200);
console.log(arr);

// Filter2
console.log('OPGAVE6 - Filter2');
/*
let cars = [
    {brand: 'VW', model: 'Passat', fuel: 'diesel', owner_tax: 5550 },
    {brand: 'VW', model: 'Passat', fuel: 'gasoline', owner_tax: 460},
    {brand: 'VW', model: 'Passat', fuel: 'hybrid', owner_tax: 150},
    {brand: 'BMW', model: '320i', fuel: 'diesel', owner_tax: 4280},
    {brand: 'BMW', model: '320i', fuel: 'gasoline', owner_tax: 430},
    {brand: 'BMW', model: '320i', fuel: 'hybrid', owner_tax: 210},
    {brand: 'Tesla', model: 'S', fuel: 'electric', owner_tax: 0 }
]
*/

function fuelCriterium(car, fuel) {
    if (car.fuel === fuel) return true;
    else return false;
}

function fuelCriterium2(car, fuel){
    return car.fuel === fuel;
}

console.log(fuelCriterium(cars[2], 'hybrid'));
console.log(fuelCriterium(cars[1], 'hybrid'));

var gasolineCars = cars.filter(c => fuelCriterium(c, "gasoline"));
console.log(gasolineCars);

// Reduce1
console.log('OPGAVE7 - Reduce1');

var trips = [{distance : 48}, {distance : 12}, {distance : 6}];

var totalDistance = trips.reduce((sum, trip) => sum += trip.distance, 0);
console.log(totalDistance);

// Reduce2
console.log('OPGAVE8 - Reduce2');

var desk = [
    {type: 'sitting'},
    {type: 'standing'},
    {type: 'sitting'},
    {type: 'sitting'},
    {type: 'standing'}
];

var deskTypes = desk.reduce((acc, desk) => {
    if (desk.type === 'sitting') acc.sitting += 1;
    else acc.standing += 1;
    return acc;
}, {sitting : 0, standing : 0});
  
console.log(deskTypes);
  
// Reduce/Find
console.log('OPGAVE9 - Reduce/Find');

var numbers = [1, 1, 2, 3, 4, 4];

function unique(array) {
      
}
  
console.log(unique(numbers));
  

// Filter/Map/Reduce
console.log('OPGAVE10 - Filter/Map/Reduce');


// Every
console.log('OPGAVE11 - Every');


// Some
console.log('OPGAVE12 - Some');


// Ekstra
console.log('OPGAVE13 - Ekstra');
