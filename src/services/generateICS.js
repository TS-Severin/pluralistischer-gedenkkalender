export function generateICS(event) {
    return `BEGIN:VCALENDAR
    VERSION:2.0
    PRODID:-//sebbo.net//ical-generator//EN
    BEGIN:VEVENT
    UID:${event.acf["event-date_start"]}@example.com
    DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}
    DTSTART;VALUE=DATE:${event.acf["event-date_start"]}
    DTEND;VALUE=DATE:${event.acf["event-date_end"]}
    SUMMARY:${event.title.rendered}
    DESCRIPTION:${event.excerpt.rendered}
    END:VEVENT
    END:VCALENDAR`;
};