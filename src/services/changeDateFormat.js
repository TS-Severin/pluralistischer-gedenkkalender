import { reformatDate } from "./reformatDate";

export function changeDateFormat(entries) {
    return entries.map(entry => {
        const updatedEntry = { ...entry };
        updatedEntry.acf.date = reformatDate(updatedEntry.acf["event-date_start"]);
        return updatedEntry;
    });
}

