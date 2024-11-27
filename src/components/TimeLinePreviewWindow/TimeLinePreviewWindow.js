import getFullDayDate from "@/services/getFullDayDate";
import getPreviewText from "@/services/GetPreviewText";
import ICalDownload from "../ICalDownload/ICalDownload";
import DateDownloadButton from "../DateDownloadButton/DateDownloadButton";
import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";

export default function TimeLinePreviewWindow({ entry, entries }) {


    const startDate = getFullDayDate(entry.acf.date);
    const endDate = entry.acf.endDate !== entry.acf.date ? `${getFullDayDate(entry.acf.endDate)}` : "";

    const previewText = getPreviewText(entry.excerpt.rendered, entry.title.rendered.length, endDate.length);

    return (
        <>
            <div className="relative h-[188px] sm:h-[220px]">
                <h1 className={`font-surt text-lg sm:text-2xl ${endDate ? 'text-md' : 'text-2xl'}`}>{`${startDate}${endDate ? ' -' : ''}`}</h1>
                <h1 className="font-surt text-lg sm:text-2xl">{`${endDate}`}</h1>
                <p className={`font-surt text-lg hyphens-auto break-words sm:text-2xl ${endDate || entry.title.rendered.length > 55
                    ? 'text-md'
                    : entry.title.rendered.length > 55
                        ? 'text-md'
                        : 'text-2xl'
                    } pt-4`}>{`${entry.title.rendered}`}</p>


                <div className="max-sm:hidden font-surt pt-4" dangerouslySetInnerHTML={{ __html: `${previewText} ...` }} />


                <Link href={entry.link} className="absolute right-0 bottom-0 font-surt text-[#7837c9]"><span className="inline-flex items-center">
                    mehr dazu<IoMdArrowDropright className="text-xl" /></span>
                </Link>

                <p className="absolute bottom-0 max-sm:hidden font-surt italic">{entry.acf.author}</p>



                <div className="absolute top-0 right-0">
                    <ICalDownload date={entry.acf.date} title={entry.title.rendered} iCalSlug={entry.acf.date} text={entry.excerpt.rendered} />
                </div>
                {/* <DateDownloadButton event={entry} entries={entries} /> */}
            </div>
        </>
    );
};