// import GetPreviewText from "@/services/GetPreviewText";
import Link from "next/link";
import ICalDownload from "../ICalDownload/ICalDownload";
import getFullDayDate from "@/services/getFullDayDate";
import getPreviewText from "@/services/GetPreviewText";


export default function TimelinePreview({ entries, previewIsClicked }) {


    // FILTER boolean array
    const clickedEntryId = previewIsClicked.find(
        entryObj => entryObj.clicked === true
    );

    if (!clickedEntryId) {
        return (
            <>
                <h1 className="font-cormorant text-2xl max-sm:text-xl">Der Pluralistische Gedenkkalender der <Link href="https://www.dialogueperspectives.org/de/coalition-for-pluralistic-public-discourse/">CPPD</Link> umfasst erinnerungspolitische Ereignisse und stellt sie in den Kontext pluralistischen Erinnerns.</h1 >

            </>
        );

    }

    const clickedEntry = entries.find(entryObj => entryObj.id === clickedEntryId.id);

    if (!clickedEntry) {
        return null
    }


    const startDate = getFullDayDate(clickedEntry.acf.date);
    const endDate = clickedEntry.acf.endDate !== clickedEntry.acf.date ? `- ${getFullDayDate(clickedEntry.acf.endDate)}` : "";

    const previewText = getPreviewText(clickedEntry.excerpt.rendered);

    // const { title, author, date, datestring, slug, } = clickedEntry;
    // console.log("error clickedentryid:", clickedEntryId, entries);
    // const previewText = clickedEntry.excerpt.rendered;

    console.log(clickedEntry);

    // const previewTextMarkup = dangerouslySetInnerHTML = { createMarkup(previewText) };

    return (
        <>
            <div className="relative h-[220px]">
                <h1 className="font-bricolage font-extralight text-2xl">{`${startDate} ${endDate}`}</h1>
                <h1 className="font-bricolage font-extralight text-2xl pt-4">{`${clickedEntry.title.rendered}`}</h1>


                <div className="max-sm:hidden font-cormorant pt-4" dangerouslySetInnerHTML={{ __html: `${previewText} ...` }} />


                <Link href={clickedEntry.link} className="absolute right-0 bottom-0 font-cormorant underline max-sm:pt-8">
                    weiter lesen
                </Link>

                <p className="absolute bottom-0 max-sm:hidden font-cormorant italic">{clickedEntry.acf.author}</p>



                <div className="absolute top-0 right-0">
                    <ICalDownload date={clickedEntry.acf.date} title={clickedEntry.title.rendered} iCalSlug={clickedEntry.link} text={clickedEntry.excerpt.rendered} />
                </div>
            </div>
        </>
    );
}

