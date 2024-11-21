// import GetPreviewText from "@/services/GetPreviewText";
import findEntryWithTodayDate from "@/services/findEntryWithTodayDate";
import TimeLinePreviewWindow from "../TimeLinePreviewWindow/TimeLinePreviewWindow";

export default function TimelinePreview({ entries, previewIsClicked }) {


    // FILTER boolean array
    const clickedEntryId = previewIsClicked.find(
        entryObj => entryObj.clicked === true
    );

    const todayEntry = findEntryWithTodayDate(entries, previewIsClicked);

    if (todayEntry !== null) {
        return (
            <>
                <TimeLinePreviewWindow entry={todayEntry} />

            </>
        );

    }

    if (clickedEntryId) {
        const clickedEntry = entries.find(entryObj => entryObj.id === clickedEntryId.id);
        return (
            <>
                <TimeLinePreviewWindow entry={clickedEntry} />
            </>
        );
    } else {
        return null
    }


}

