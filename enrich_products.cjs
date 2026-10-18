const fs = require('fs');

const data = fs.readFileSync('src/data/products.js', 'utf8');

// We will do a generic replacement adding notes and applications where they are missing.
const enhancedData = data.replace(
    /\{ id: (\d+), name: "([^"]+)", category: "([^"]+)", image: ([^,]+), description: "([^"]+)", cas: "Pending" \}/g,
    (match, id, name, category, image, description) => {
        let top = name;
        let heart = "Floral / Fresh accord";
        let base = "Musk / Woods";
        let apps = ["Liquid Detergent", "Soap"];

        if (category.includes("Detergent")) {
            apps = ["Liquid Detergent", "Powder Detergent", "Dish Wash"];
        } else if (category.includes("Personal")) {
            apps = ["Lotions", "Body Wash", "Cold Process Soap", "Shampoo"];
            heart = "Rich floral";
        } else if (category.includes("Candles")) {
            apps = ["Soy Wax", "Paraffin", "Incense Sticks (Agarbatti)"];
            base = "Amber / Sweet Woods";
        } else if (category.includes("Industrial")) {
            apps = ["Floor Cleaners", "Phenyl", "Toilet Cleaners"];
            top = "High-impact " + name;
        }

        return `{ id: ${id}, name: "${name}", category: "${category}", image: ${image}, description: "${description}", olfactoryNotes: { top: "${top}", heart: "${heart}", base: "${base}" }, applications: ${JSON.stringify(apps)}, cas: "Pending" }`;
    }
);

fs.writeFileSync('src/data/products.js', enhancedData);
console.log('Products enriched.');
