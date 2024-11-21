import GetCurrentDayOfYearHelper
    from "./GetCurrentDayOfYearHelper";
import GetDayOfYearHelper from "./GetDayOfYearHelper";


// returns upcoming entry comparing the current date in percent with the dates in percent of entries

export default function getUpcomingDate(entries) {

    const currentPercentage = GetCurrentDayOfYearHelper();

    const nextEntry = entries
        .map(entry => ({
            ...entry,
            percentage: GetDayOfYearHelper(entry.acf.date)
        }))
        .filter(item => item.percentage > currentPercentage)
        .sort((a, b) => a.percentage - b.percentage)[0];


    return nextEntry;
}
