const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * CALCULATES BODA BODA FARE
 * - Base fare: KES 50
 * - Per km charge: KES 15
 */
function calculateBodaFare(distanceInKm) {
    // 1. Set rates
    const baseFare = 50;          // Fixed base charge
    const chargePerKm = 15;       // Per kilometer rate
    
    // 2. Validate input
    if (isNaN(distanceInKm)) {
        console.log("Tafadhali weka namba ya kilometa."); // "Please enter valid km number"
        return;
    }
    
    // 3. Calculate charges
    let distanceCharge = distanceInKm * chargePerKm;
    let totalFare = baseFare + distanceCharge;
    
    // 4. Display results
    console.log(`\nUko kwote? Io ni ${distanceInKm} km:`);  
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`);    
    console.log(`Mpaka Uko: KES ${distanceCharge}`);     
    console.log(`Total: KES ${totalFare}`);
    console.log("Panda Pikipiki!");                      
}

// Get user input
readline.question("Unafika wapi Mkubwa? Kilometer ngapi?: ", (userInput) => {
    const distanceInKm = parseFloat(userInput);
    
    if (isNaN(distanceInKm)) {
        console.log("Tafadhali weka namba ya kilometa.");
    } else {
        calculateBodaFare(distanceInKm);
    }
    
    readline.close();
});