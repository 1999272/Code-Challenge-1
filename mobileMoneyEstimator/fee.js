/**
 * CALCULATES MOBILE MONEY TRANSACTION FEES WITH MIN/MAX LIMITS
 * - Basic fee: 1.5% of transaction amount
 * - Minimum fee: KES 10 (if calculated fee < 10)
 * - Maximum fee: KES 70 (if calculated fee > 70)
 * - User is prompted to enter transaction amount
 * - Displays fee breakdown and total debit amount
 */
function estimateTransactionFee() {
    // USER INPUT HANDLING
    const amountToSend = parseFloat(prompt("Unatuma Ngapi? (KES):")); 
    
    // INPUT VALIDATION
    if (isNaN(amountToSend)) {
        console.log("Tafadhali weka namba halali."); 
        return;  
    }
    
    // FEE CALCULATION
    const calculatedFee = amountToSend * 0.015;
    let finalFee = calculatedFee;  // Initialize final fee
    
    // APPLY FEE CONSTRAINTS
    if (calculatedFee < 10) {
        finalFee = 10;
    } 
    // Enforce maximum fee of KES 70
    else if (calculatedFee > 70) {
        finalFee = 70;
    }
    
    // TOTAL AMOUNT CALCULATION
    const totalDebit = amountToSend + finalFee;
    
    // OUTPUT GENERATION
    console.log(`Sending KES ${amountToSend}:`);
    console.log(`Calculated Transaction Fee: KES ${finalFee}`);
    console.log(`Total amount to be debited: KES ${totalDebit}`);
    console.log("\nSend Money Securely!");  
}