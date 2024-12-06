import GenerateICalFiles from "@/services/GenerateICalFile";
import Link from "next/link";
import Image from "next/image";
import { TbCalendarPlus } from "react-icons/tb";

export default function ICalDownload({ date, title, iCalLink, text }) {

    // ICAL LOGIC
    // get preview text for ical-file
    // const previewText = GetPreviewText(text);

    // function for removing html-tags for the calender preview on clientsite calendars
    function removeHtmlTags(input) {
        return input.replace(/<[^>]*>/g, '').replace(/&hellip;/g, '...').replace(/[\[\]]/g, '');
    }

    const previewTextWithoutHtml = removeHtmlTags(text);


    const iCalText = `${previewTextWithoutHtml} Weiter lesen unter dem Link`;

    // ical download
    // define function that generates ical files
    const kalender = GenerateICalFiles(date, title, iCalLink, iCalText)
    // console.log("iCalFiles", kalender)
    const icalDownloadLink = `data:text/calendar;charset=utf-8,${encodeURIComponent(kalender)}`;
    // console.log("ICALDATA ", icalDownloadLink);

    const titleForDownload = title.trim().replace(/\s+/g, '-').replace(/ö/g, 'oe').replace(/ä/g, 'ae').replace(/ü/g, 'ue').replace(/ß/g, 'ss');

    return (
        <>

            <Link href={icalDownloadLink} download={`${titleForDownload}.ics`}>

                <TbCalendarPlus className="text-3xl text-[#901f67]" />

            </Link>
        </>

    );

    // className="absolute top-8 right-8"



}