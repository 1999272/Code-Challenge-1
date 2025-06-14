/**
 * CALCULATES BODA BODA FARE
 * - Base fare: KES 50
 * - Per km charge: KES 15
 */
function calculateBodaFare() {
    // 1. Set rates
    const baseFare = 50;          // Fixed base charge
    const chargePerKm = 15;       // Per kilometer rate
    
    // 2. Get distance input
    let userInput = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:"); // "Where are you going? How many km?"
    
    // 3. Validate input
    let distanceInKm = parseFloat(userInput);
    if (isNaN(distanceInKm)) {
        console.log("Tafadhali weka namba ya kilometa."); // "Please enter valid km number"
        return;
    }
    
    // 4. Calculate charges
    let distanceCharge = distanceInKm * chargePerKm;
    let totalFare = baseFare + distanceCharge;
    
    // 5. Display results
    console.log(`Uko kwote? Io ni ${distanceInKm} km:`);  
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`);    
    console.log(`Mpaka Uko: KES ${distanceCharge}`);     
    console.log(`Total: KES ${totalFare}`);
    console.log("Panda Pikipiki!");                      
}