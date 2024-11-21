import { useEffect, useState } from "react";

export default function DateDownloadButton({ event, entries }) {
    const [icalDownloadLink, setIcalDownloadLink] = useState("");

    // Generate the download link when the component mounts
    useEffect(() => {
        const generateDownloadLink = async () => {
            // Send the entries data to your API to generate the .ics file
            const response = await fetch(`/api/ics-import/${event.id}`, {
                method: "POST", // Send data via POST
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    entries: entries, // Send the entries data here
                    eventId: event.id, // Optionally send the eventId as well
                }),
            });

            // Set the download link (you can use a blob or return the actual .ics content)
            if (response.ok) {
                const blob = await response.blob();
                const url = URL.createObjectURL(blob);
                setIcalDownloadLink(url);
            }
        };

        generateDownloadLink();
    }, [entries, event.id]);

    return (
        <a href={icalDownloadLink} download={`${event.title.rendered}.ics`}>
            <button>Download Event</button>
        </a>
    );
}
