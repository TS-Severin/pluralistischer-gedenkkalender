import GenerateICalFiles from "@/services/GenerateICalFile";
import Link from "next/link";
import { TbCalendarPlus } from "react-icons/tb";

export default function ICalDownload({ date, title, iCalLink, text }) {

    // ICAL LOGIC
    // get preview text for ical-file

    // function for removing html-tags for the calender preview on clientsite calendars
    function removeHtmlTags(input) {
        return input.replace(/<[^>]*>/g, '').replace(/&hellip;/g, '...').replace(/[\[\]]/g, '');
    }

    const previewTextWithoutHtml = removeHtmlTags(text);


    const iCalText = `${previewTextWithoutHtml} Weiter lesen unter dem Link`;

    // ical download
    // function that generates ical files
    const kalender = GenerateICalFiles(date, title, iCalLink, iCalText)

    const icalDownloadLink = `data:text/calendar;charset=utf-8,${encodeURIComponent(kalender)}`;

    // create title for download-file
    const titleForDownload = title.trim().replace(/\s+/g, '-').replace(/ö/g, 'oe').replace(/ä/g, 'ae').replace(/ü/g, 'ue').replace(/ß/g, 'ss');

    return (
        <>

            <Link href={icalDownloadLink} download={`${titleForDownload}.ics`}>

                <TbCalendarPlus className="text-3xl text-[#901f67]" />

            </Link>
        </>

    );





}