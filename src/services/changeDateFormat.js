import { reformatDate } from "./reformatDate";

export function changeDateFormat(entries) {
    return entries.map(entry => {
        const updatedEntry = { ...entry };

        // Check if 'acf' and the dates exist in the entry
        if (updatedEntry.acf) {
            const { "event-date_start": date, "event-date_end": endDate } = updatedEntry.acf;

            if (date) {
                updatedEntry.acf.date = reformatDate(date);
            }

            // Only reformat endDate if it's not null
            if (endDate !== null && endDate !== undefined && endDate !== "") {
                updatedEntry.acf.endDate = reformatDate(endDate);
            }

        }






        return updatedEntry;
    });
}

