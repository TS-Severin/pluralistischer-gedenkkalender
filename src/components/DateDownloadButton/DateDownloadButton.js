import Link from "next/link";

export default function DateDownloadButton({ event }) {
    const icalDownloadLink = `https://pluralistischer-gedenkkalender.vercel.app/api/ics-import/${event.id}`;

    return (

        <Link href={icalDownloadLink} download="event.ics">

            <button>Download Event</button>

        </Link>

    );
};