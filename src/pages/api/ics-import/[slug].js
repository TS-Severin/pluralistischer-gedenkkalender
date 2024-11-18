import { generateICS } from "@/services/generateICS";


const fetchEntriesFromWpApi = async () => {
    const responsePage1 = await fetch("https://cppdnetwork.com/wp-json/wp/v2/plgk-eintrag/?per_page=100&_fields=id,title,excerpt,link,acf");
    const responsePage2 = await fetch("https://cppdnetwork.com/wp-json/wp/v2/plgk-eintrag/?per_page=100&offset=100&_fields=id,title,excerpt,link,acf");

    const dataPage1 = await responsePage1.json();
    const dataPage2 = await responsePage2.json();

    const data = [...dataPage1, ...dataPage2];
    return data;

};


export default async function handler(req, res) {

    const { slug } = req.query; // Get the entire 'slug' (which contains the id)

    const id = parseInt(slug); // Extract the numeric id (e.g., 4161)

    try {
        // Fetch the entries data from an external API or database
        const entries = await fetchEntriesFromWpApi();

        // Find the event matching the slug
        const event = entries.find((entry) => entry.id === id);

        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }

        // Generate the iCalendar content for the event
        // const icsContent = generateICS(event);
        const icsContent = generateICS(event);

        // Set the appropriate headers for the .ics file download
        res.setHeader('Content-Type', 'text/calendar');
        res.setHeader('Content-Disposition', `attachment; filename=${event.title.rendered}.ics`);
        res.send(icsContent); // Send the .ics content

    } catch (error) {
        console.error('Error fetching event data:', error);
        res.status(500).json({ message: 'Server error' });
    }
}









