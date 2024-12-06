import findEntryWithTodayDate from "@/services/findEntryWithTodayDate";
import TimeLinePreviewWindow from "../TimeLinePreviewWindow/TimeLinePreviewWindow";
import getUpcomingDate from "@/services/getUpcomingDate";

export default function TimelinePreview({ entries, previewIsClicked }) {



    // FILTER boolean array
    const clickedEntryId = previewIsClicked.find(
        entryObj => entryObj.clicked === true
    );

    console.log("CLICKEDENTRY", clickedEntryId);


    const todayEntry = findEntryWithTodayDate(entries, previewIsClicked);

    const upcomingEntry = getUpcomingDate(entries);



    if (todayEntry !== null && !clickedEntryId) {
        return (
            <>{entries ?
                <TimeLinePreviewWindow entry={todayEntry} entries={entries} /> : "null"}

            </>
        );

    }

    if (clickedEntryId) {
        const clickedEntry = entries.find(entryObj => entryObj.id === clickedEntryId.id);

        return (
            <>{entries ?
                <TimeLinePreviewWindow entry={clickedEntry} entries={entries} /> : "null"}
            </>
        );
    } else {

        return (
            <>
                {upcomingEntry && entries ? (
                    <TimeLinePreviewWindow entry={upcomingEntry} entries={entries} />
                ) : (null)

                }
            </>

        );
    }


}

