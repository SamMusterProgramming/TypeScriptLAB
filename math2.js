const costGallon = 3 ;
const mph60Speed = 28 ;
const mph75Speed = 23 ;
const mph55Speed = 30 ;

const tripDistance = 1500;

const budget = 175;
const milesPerGallon55 = 30;
const milesPerGallon60 = 28;
const milesPerGallon75 = 23;

const speed55 = 55 ;
const speed60 = 60
const speed75 = 75

let gallonComsume ;
let gallonComsume60mphSpeed ;
let gallonComsume75mphSpeed ;
let tripCost55Mph ;
let tripCost60Mph 
let tripCost75Mph 


// if you dravel at speed of 55 miles/hour 

 gallonComsume = tripDistance / mph55Speed ;
 tripCost55Mph = gallonComsume * costGallon ;
 console.log(`Trip will cost you  \$${tripCost55Mph}  when you travel at ${speed55}`)
 console.log((tripCost60Mph>budget)?"out of budget":"You are in budget , great")
 console.log(`this trip will last ${tripDistance/speed55} hours\n`)
 
 // if you dravel at speed of 60 miles/hour 

 gallonComsume = tripDistance / mph60Speed ;
 tripCost60Mph = gallonComsume * costGallon ;
 console.log(`Trip will cost you  \$${tripCost60Mph} when you travel at ${speed60}`)
 console.log((tripCost60Mph>budget)?"out of budget":"You are in budget , great")
 console.log(`this trip will last ${tripDistance/speed60} hours\n`)

 // if you dravel at speed of 75 miles/hour 

 gallonComsume = tripDistance / mph75Speed ;
 tripCost75Mph = gallonComsume * costGallon ;
 console.log(`Trip will cost you  \$${tripCost75Mph} when you travel at ${speed75} `)
 console.log((tripCost75Mph>budget)?"out of budget, dont do it,\ have 25 $ extra":"You are in budget , great")
 console.log(`this trip will last ${tripDistance/speed75} hours\n`)

 
 // find which trip costs less 
 isTrip55MphBudget = tripCost55Mph < tripCost60Mph && tripCost55Mph < tripCost75Mph
 isTrip60MphBudget = tripCost60Mph < tripCost55Mph && tripCost60Mph < tripCost75Mph
 isTrip75MphBudget = tripCost75Mph < tripCost60Mph && tripCost75Mph < tripCost55Mph

 console.log(isTrip55MphBudget? `traveling at speed of ${speed55} MPH is more efficient`:"")
 console.log(isTrip60MphBudget? `traveling at speed of ${speed60} MPH is more efficient`:"")
 console.log(isTrip75MphBudget? `traveling at speed of ${speed75} MPH is more efficient`:"")


