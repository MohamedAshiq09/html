// Import the required modules
const JsBarcode = require('jsbarcode');
const { createCanvas } = require('canvas');
const fs = require('fs');

// Create a canvas instance
const canvas = createCanvas(200, 100); // Adjust dimensions as needed

// Generate the barcode
JsBarcode(canvas, '123456789012', {
    format: 'CODE128', // Barcode type (CODE128, EAN13, etc.)
    width: 2,          // Width of each bar
    height: 100,       // Height of the barcode
    displayValue: true // Whether to display the value below the barcode
});

// Convert the canvas to a PNG buffer
const buffer = canvas.toBuffer('image/png');

// Save the PNG buffer to a file
fs.writeFileSync('barcode.png', buffer);

console.log('Barcode generated and saved as barcode.png');
