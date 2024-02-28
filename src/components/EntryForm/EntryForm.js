// import { useState } from "react";

export default function EntryForm({ onHandleSubmit, update, entries }) {

    const { date, slug, datestring, title, author, text } = entries;



    return (
        <>
            <div className="items-center justify-between mt-4 ml-0 mr-0 mb-8 p-8 bg-white border-4 rounded-3xl shadow-xl">
                <form className="flex flex-col" onSubmit={(event) => onHandleSubmit(event)}>
                    <h1 className="font-bold">
                        {update ? "Eintrag bearbeiten" : "Neuer Eintrag"}
                    </h1>
                    <label htmlFor="date">
                        Datum für Position in der Timeline:
                        <input type="date" id="date" name="date" required defaultValue={entries.date}
                            placeholder="jjjj-mm-tt" />
                    </label>

                    <label htmlFor="slug">
                        Slug:
                        <input type="text" id="slug" name="slug" required
                            defaultValue={entries.slug}
                            placeholder="titel-des-eintrags" />
                    </label>

                    <label htmlFor="datestring">
                        Datum wie es angezeigt wird:
                        <input type="text" id="datestring" name="datestring" required
                            defaultValue={entries.datestring}
                            placeholder="Tag. Monat, z. B.: 26. März" />
                    </label>


                    <label htmlFor="title">
                        Titel:
                        <input type="text" id="title" name="title" required
                            defaultValue={entries.title}
                            placeholder="Titel des Ereignisses" />
                    </label>

                    <label htmlFor="author">
                        Autor:in:
                        <input type="text" id="author" name="author" required
                            defaultValue={entries.author}
                            placeholder="Vorname Nachname" />
                    </label>

                    <label htmlFor="textarea">
                        Text:</label>
                    <textarea rows="5" cols="33" id="text" name="text" required
                        defaultValue={entries.text}
                        placeholder="kompletter Text" />


                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
}


{/* <>
<div className="items-center justify-between mt-4 ml-0 mr-0 mb-8 p-8 bg-white border-4 rounded-3xl shadow-xl">
    <form className="flex flex-col" onSubmit={(event) => onHandleSubmit(event)}>
        <h1 className="font-bold">
            {update ? "Eintrag bearbeiten" : "Neuer Eintrag"}
        </h1>
        <label htmlFor="date">
            date:
            <input type="text" id="date" name="date" required
                {...(update ? { defaultValue: formData.date, onChange: (e) => handleInputChange(e, "date") } : { placeholder: "jjjj-mm-tt" })} />
        </label>

        <label htmlFor="slug">
            slug:
            <input type="text" id="slug" name="slug" required
                {...(update ? { value: slug } : { placeholder: "titel-des-eintrags" })} />
        </label>

        <label htmlFor="datestring">
            datestring:
            <input type="text" id="datestring" name="datestring" required
                {...(update ? { value: slug } : { placeholder: "Tag. Monat, z. B.: 26. März" })} />
        </label>


        <label htmlFor="title">
            title:
            <input type="text" id="title" name="title" required
                {...(update ? { value: title } : { placeholder: "Titel des Ereignisses" })} />
        </label>

        <label htmlFor="author">
            author:
            <input type="text" id="autor" name="autor" required
                {...(update ? { value: author } : { placeholder: "Vorname Nachname" })} />
        </label>

        <label htmlFor="textarea">
            text:</label>
        <textarea rows="5" cols="33" id="text" name="text" required
            {...(update ? { value: text } : { placeholder: "kompletter Text" })} />


        <button type="submit">Submit</button>
    </form>
</div>
</> */}