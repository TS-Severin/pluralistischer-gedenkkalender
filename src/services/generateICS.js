export function generateICS(event) {
    const icsContent = `BEGIN:VCALENDAR\r\n
  VERSION:2.0\r\n
  PRODID:-//sebbo.net//ical-generator//EN\r\n
  METHOD:REQUEST\r\n
  BEGIN:VEVENT\r\n
  UID:${event.id}@example.com\r\n
  SEQUENCE:0\r\n
  DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}\r\n
  DTSTART;VALUE=DATE:${event.acf["event-date_start"]}\r\n
  DTEND;VALUE=DATE:${event.acf["event-date_end"]}\r\n
  X-MICROSOFT-CDO-ALLDAYEVENT:TRUE\r\n
  X-MICROSOFT-MSNCALENDAR-ALLDAYEVENT:TRUE\r\n
  RRULE:FREQ=YEARLY\r\n
  SUMMARY:${event.title.rendered}\r\n
  DESCRIPTION:${event.excerpt.rendered}\r\n
  URL;VALUE=URI:${event.link}\r\n
  END:VEVENT\r\n
  END:VCALENDAR`;

    return icsContent;
}

