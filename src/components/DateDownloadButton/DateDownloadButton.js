

export default function DateDownloadButton({ event }) {
    const icalDownloadLink = `/api/ics-import/${event.id}`;

    return (

        <a href={icalDownloadLink} download="event.ics">

            <button>Download Event</button>

        </a>

    );
};