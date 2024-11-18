import getFullDayDate from "@/services/getFullDayDate";
import getPreviewText from "@/services/GetPreviewText";
import ICalDownload from "../ICalDownload/ICalDownload";
import Link from "next/link";

export default function TimeLinePreviewWindow({ entry }) {


    const startDate = getFullDayDate(entry.acf.date);
    const endDate = entry.acf.endDate !== entry.acf.date ? `- ${getFullDayDate(entry.acf.endDate)}` : "";

    const previewText = getPreviewText(entry.excerpt.rendered, entry.title.rendered.length);


    return (
        <>
            <div className="relative h-[188px] sm:h-[220px]">
                <h1 className="font-bricolage font-extralight text-2xl">{`${startDate} ${endDate}`}</h1>
                <h1 className="font-bricolage font-extralight text-2xl pt-4">{`${entry.title.rendered}`}</h1>


                <div className="max-sm:hidden font-cormorant pt-4" dangerouslySetInnerHTML={{ __html: `${previewText} ...` }} />


                <Link href={entry.link} className="absolute right-0 bottom-0 font-cormorant underline max-sm:pt-8">
                    weiter lesen
                </Link>

                <p className="absolute bottom-0 max-sm:hidden font-cormorant italic">{entry.acf.author}</p>



                <div className="absolute top-0 right-0">
                    <ICalDownload date={entry.acf.date} title={entry.title.rendered} iCalSlug={entry.link} text={entry.excerpt.rendered} />
                </div>
            </div>
        </>
    );
};