import getFullDayDate from "@/services/getFullDayDate";
import getPreviewText from "@/services/GetPreviewText";
import ICalDownload from "../ICalDownload/ICalDownload";
import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";

// preview window, holding preview text, ical download and link to text

export default function TimeLinePreviewWindow({ entry }) {


    const startDate = getFullDayDate(entry.acf.date);
    const endDate = entry.acf.endDate !== entry.acf.date ? `${getFullDayDate(entry.acf.endDate)}` : "";

    const previewText = getPreviewText(entry.excerpt.rendered, entry.title.rendered.length, endDate.length);
    // console.log("DATA: ", entry);
    return (
        <>
            <div className="relative h-[188px] sm:h-[220px]">
                <h1 className={`font-surt-regular  ${endDate ? 'text-xl sm:text-2xl' : 'text-2xl'}`}>{`${startDate}${endDate ? ' -' : ''}`}</h1>
                <h1 className="font-surt-regular text-xl sm:text-2xl">{`${endDate}`}</h1>
                <p className={`font-surt-regular text-2xl hyphens-auto break-words sm:text-2xl ${endDate || entry.title.rendered.length > 55
                    ? 'text-lg'
                    : entry.title.rendered.length > 55
                        ? 'text-md'
                        : 'text-2xl'
                    } pt-4`}>{`${entry.title.rendered}`}</p>


                <div className={`max-sm:hidden font-surt pt-4 ${entry.title.rendered.length > 40 ? 'hidden' : ''}`} dangerouslySetInnerHTML={{ __html: `${previewText} ...` }} />


                <Link href={entry.link} className="absolute right-0 bottom-0 font-surt text-[#901f67]"><span className="inline-flex items-center">
                    mehr dazu<IoMdArrowDropright className="text-xl" /></span>
                </Link>

                <p className="absolute bottom-0 max-sm:hidden font-surt italic">{entry.acf.author}</p>



                <div className="absolute top-0 right-0">
                    <ICalDownload date={entry.acf.date} title={entry.title.rendered} iCalLink={entry.link} text={entry.excerpt.rendered} />
                </div>

            </div>
        </>
    );
};