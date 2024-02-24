import TimelinePreview from "../TimelinePreview/TimelinePreview";
import useSWR from "swr";
import styles from "./Preview.module.scss";


export default function Preview({ previewIsClicked }) {
    const { data: entries, isLoading } = useSWR("/api");

    //   if (error) return <div>Error fetching data</div>;
    if (isLoading) return <div>Loading...</div>;

    return (
        <div className="w-full bg-white p-8 h-32 border-4 rounded-t-3xl shadow-xl">

            <TimelinePreview entries={entries} previewIsClicked={previewIsClicked} />
        </div>
    );
}

// .previewcontainer {
//     width: 100%;
//     // border: 2px solid black;
//     background-color: white;
//     display: flex;
//     flex-direction: column;
//     height: 120px;
//     padding: 16px;
//     }