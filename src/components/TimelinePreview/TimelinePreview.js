// import GetPreviewText from "@/services/GetPreviewText";
import findEntryWithTodayDate from "@/services/findEntryWithTodayDate";
import TimeLinePreviewWindow from "../TimeLinePreviewWindow/TimeLinePreviewWindow";

export default function TimelinePreview({ entries, previewIsClicked }) {


    // FILTER boolean array
    const clickedEntryId = previewIsClicked.find(
        entryObj => entryObj.clicked === true
    );

    const todayEntry = findEntryWithTodayDate(entries);

    if (!clickedEntryId && todayEntry !== null) {
        return (
            <>
                <TimeLinePreviewWindow entry={todayEntry} />

            </>
        );

    }

    const clickedEntry = entries.find(entryObj => entryObj.id === clickedEntryId.id);

    if (!clickedEntry) {
        return null
    }

    return (
        <>
            <TimeLinePreviewWindow entry={clickedEntry} />
        </>
    );
}

