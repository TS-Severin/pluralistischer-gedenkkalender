import Link from "next/link";

export default function DateDownloadButton({ event }) {
    const icalDownloadLink = `/api/ics-import/${event.id}`;

    return (

        <Link href={icalDownloadLink} download={`${event.id}.ics`}>

            <button>Download Event</button>

        </Link>

    );
};