import findEntryWithTodayDate from "@/services/findEntryWithTodayDate";
import TimeLinePreviewWindow from "../TimeLinePreviewWindow/TimeLinePreviewWindow";
import getUpcomingDate from "@/services/getUpcomingDate";

export default function TimelinePreview({ entries, previewIsClicked }) {



    // FILTER boolean array to make sure the date which is hovered, clicked is found in order to render the preview in the preview window
    const clickedEntryId = previewIsClicked.find(
        entryObj => entryObj.clicked === true
    );

    // find today date to show it initially if there is a date today
    const todayEntry = findEntryWithTodayDate(entries, previewIsClicked);

    // find upcoming date to show if there is no date today
    const upcomingEntry = getUpcomingDate(entries);


    // logic for showing either today entry, upcoming entry or clicked / hovered entry
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

