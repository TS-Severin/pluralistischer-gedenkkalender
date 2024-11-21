import { generateICS } from "@/services/generateICS";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { entries, eventId } = req.body; // Extract the data from the request body

        try {
            // Find the event from the passed entries
            const event = entries.find(entry => entry.id === eventId);

            if (!event) {
                return res.status(404).json({ message: 'Event not found' });
            }


            // Generate the iCalendar content for the event
            const icsContent = generateICS(event);

    try {
        // Set CORS headers
        res.setHeader("Access-Control-Allow-Origin", "https://pluralistischer-gedenkkalender.vercel.app/");
        // Fetch the entries data from an external API or database
        const entries = await fetchEntriesFromWpApi();


            // Set the appropriate headers for the .ics file download
            res.setHeader("Content-Type", "text/calendar");
            res.setHeader("Content-Disposition", `attachment; filename="${event.title.rendered}.ics"`);
            res.send(icsContent); // Send the .ics content

        } catch (error) {
            console.error('Error generating ics:', error);
            res.status(500).json({ message: 'Server error' });
        }
    } else {
        res.status(405).json({ message: "Method Not Allowed" });
    }
}








