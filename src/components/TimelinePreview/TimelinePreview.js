import findEntryWithTodayDate from "@/services/findEntryWithTodayDate";
import TimeLinePreviewWindow from "../TimeLinePreviewWindow/TimeLinePreviewWindow";
import getUpcomingDate from "@/services/getUpcomingDate";

export default function TimelinePreview({ entries, previewIsClicked }) {



    // FILTER boolean array
    const clickedEntryId = previewIsClicked.find(
        entryObj => entryObj.clicked === true
    );




    const todayEntry = findEntryWithTodayDate(entries, previewIsClicked);

    const upcomingEntry = getUpcomingDate(entries);



    if (todayEntry !== null) {
        return (
            <>
                <TimeLinePreviewWindow entry={todayEntry} />

            </>
        );

    }




    if (clickedEntryId) {
        const clickedEntry = entries.find(entryObj => entryObj.id === clickedEntryId.id);
        console.log("CLLLL", clickedEntry);
        return (
            <>
                <TimeLinePreviewWindow entry={clickedEntry} />
            </>
        );
    } else {

        return (
            <>
                {upcomingEntry ? (
                    <TimeLinePreviewWindow entry={upcomingEntry} />
                ) : (null)

                }
            </>

        );
    }


}

