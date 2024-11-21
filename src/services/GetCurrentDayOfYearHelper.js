import GetDayOfYearHelper from "./GetDayOfYearHelper";
import GetFormattedDateHelper from "./GetFormattedDateHelper";

// accepts yyyy-mm-dd

export default function GetCurrentDayOfYearHelper() {
    const formattedDate = GetFormattedDateHelper();
    const currentDayOfYear = GetDayOfYearHelper(formattedDate);
    return currentDayOfYear;
}

// current day of year in percent of the whole year