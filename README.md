# Kenyan Utility Calculators Suite

A collection of three practical calculators for common Kenyan needs: chai brewing, boda boda fares, and mobile money transactions.

## Chai Calculator

Calculates ingredients needed to brew Kenyan-style tea.

**Features:**

```javascript
// Example usage:
calculateChaiIngredients(5);

// Output:
// To make 5 cups of Kenyan Chai:
// Water: 1000 ml
// Milk: 250 ml
// Tea Leaves: 5 tbsp
// Sugar: 10 tsp
```

## Boda Fare Calculator

Computes motorcycle taxi fares based on distance traveled.

**Features:**

```javascript
// Example usage:
calculateBodaFare();

// User enters: 10
// Output:
// Uko kwote? Io ni 10 km:
// Ukikalia Pikipiki: KES 50
// Mpaka Uko: KES 150
// Total: KES 200
// Panda Pikipiki!
```

## Mobile Money Estimator

Estimates transaction fees for mobile money transfers.

**Features:**


```javascript
// Example usage:
estimateTransactionFee();

// User enters: 1000
// Output:
// Sending KES 1000:
// Transaction Fee: KES 15
// Total Debit: KES 1015
// Send Money Securely!
```

## Installation

1. Clone the repository

2. Navigate to project directory

## Usage

Run each calculator directly in your browser console or via Node.js:

**Browser:**
1. Open the corresponding HTML file
2. Interact with the prompt

**Node.js:**
```bash
node chaiCalculator/chai.js
node bodaFareCalculator/fare.js
node mobileMoneyEstimator/fee.js
```

## File Structure
```
kenyan-calculators/
├── chaiCalculator/
│   ├── chai.js
│   └── index.html
├── bodaFareCalculator/
│   ├── fare.js
│   └── index.html
├── mobileMoneyEstimator/
│   ├── fee.js
│   └── index.html
├── README.md
└── LICENSE
```

## License

MIT License. See [LICENSE](LICENSE) for details.

---

**Acknowledgments**
- Kenyan tea brewing traditions
- Boda boda operators nationwide
- Mobile money payment systems