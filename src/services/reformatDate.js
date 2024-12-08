// convert datestring "yyyymmdd" in js readable format yyyy-mm-dd

export function reformatDate(originalDateString) {
    const year = originalDateString.slice(0, 4);  // Get the year (first 4 characters)
    const month = originalDateString.slice(4, 6); // Get the month (characters 5-6)
    const day = originalDateString.slice(6, 8);   // Get the day (last 2 characters)

    return `${year}-${month}-${day}`; // Format as "yyyy-mm-dd"
}