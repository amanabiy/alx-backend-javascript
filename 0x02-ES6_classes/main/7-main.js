import Airport from './7-airport';

const airportSF = new Airport('San Francisco Airport', 'SFO');
const text1 = "Airport [SFO] { _name: 'San Francisco Airport', _code: 'SFO' }";
console.log(text1 === "Airport [SFO] { _name: 'San Francisco Airport', _code: 'SFO' }");
console.log(airportSF);
console.log(airportSF.toString());
