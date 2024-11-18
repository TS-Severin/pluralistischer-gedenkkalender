import GetFormattedDateHelper from "./GetFormattedDateHelper";
import GetMonthDayDateHelper from "./GetMonthDayDateHelper";

// Function to find an entry in the array with today's date
export default function findEntryWithTodayDate(entries) {
    // Get today's date in "mm-dd" format
    // get today's date in yyyy-mm-dd
    const today = GetFormattedDateHelper()
    // convert today's date to mm-dd => today
    const todayFormatted = GetMonthDayDateHelper(today);
    // console.log("heute :", today);
    // console.log("heute mm-dd: ", todayFormatted);
    // console.log(entries);

    // Iterate over entries and find the one with today's date
    for (const entry of entries) {
        const entryDateFormatted = GetMonthDayDateHelper(entry.acf.date);
        // console.log("alle mm-dd daten: ", entryDateFormatted);
        if (entryDateFormatted === todayFormatted) {
            return entry; // Return the entry with today's date
        }
    }
    return null; // Return null if no entry found for today's date
}

