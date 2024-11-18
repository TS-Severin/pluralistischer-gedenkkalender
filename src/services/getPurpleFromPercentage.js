export default function getPurpleFromPercentage(percentageOfYear) {
    const baseColor = [162, 0, 254]; // Base color RGB values
    const range = 150; // Adjust the range of variation as needed

    // Calculate variation based on the percentage
    const variation = Math.floor((percentageOfYear / 100) * range) - range / 2;

    // Apply the variation to the base color
    const r = Math.max(0, Math.min(255, baseColor[0] + variation));
    const g = Math.max(0, Math.min(255, baseColor[1] + variation));
    const b = Math.max(0, Math.min(255, baseColor[2] + variation));

    return `rgb(${r}, ${g}, ${b})`;
}

// wioth random element

// export default function getRandomPurpleFromPercentage(percentageOfYear) {
//     const baseColor = [162, 0, 254]; // Base color RGB values
//     const range = 150; // Adjust the range of variation as needed
//     const randomFactor = Math.random() * range - range / 2; // Add a random element to vary the result

//     // Calculate variation based on the percentage
//     const variation = Math.floor((percentageOfYear / 100) * range) - range / 2 + randomFactor;

//     // Apply the variation to the base color
//     const r = Math.max(0, Math.min(255, baseColor[0] + variation));
//     const g = Math.max(0, Math.min(255, baseColor[1] + variation));
//     const b = Math.max(0, Math.min(255, baseColor[2] + variation));

//     return `rgb(${r}, ${g}, ${b})`;
// }