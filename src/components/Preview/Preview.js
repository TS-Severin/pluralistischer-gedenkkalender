import TimelinePreview from "../TimelinePreview/TimelinePreview";



export default function Preview({ previewIsClicked, entries }) {


    //   if (error) return <div>Error fetching data</div>;
    // if (isLoading) return <div>Loading...</div>;

    return (
        <div className="w-full bg-white h-64 sm:h-72 mt-4 p-8 border-4 shadow-xl">

            <TimelinePreview entries={entries} previewIsClicked={previewIsClicked} />
        </div>
    );
}