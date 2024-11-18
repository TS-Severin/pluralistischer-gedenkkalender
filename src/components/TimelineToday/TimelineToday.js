import GetTodayFullDateHelper from "../../services/GetTodayFullDateHelper"
import GetFormattedDateHelper from "@/services/GetFormattedDateHelper";
import GetMonthDayDateHelper from "../../services/GetMonthDayDateHelper";
import GetCurrentDayOfYearHelper from "@/services/GetCurrentDayOfYearHelper";
import styled from "styled-components";
import findEntryWithTodayDate from "@/services/findEntryWithTodayDate";


export default function TimelineToday({ entries, previewIsClicked, timelineZoom }) {



    const todayEntry = findEntryWithTodayDate(entries);
    // console.log("heutiges ereignis: ", todayEntry);

    // find date which is currently shown in Preview, the title of the date today only shows when it is not the same as shown in the preview by hovering

    const clickedEntryId = previewIsClicked.find(
        entryObj => entryObj.clicked === true);

    // console.log("beim hovern: ", clickedEntryId);


    const todayFullDate = GetTodayFullDateHelper();
    // gets the position of today on the X axis
    const currentPercentOfYear = GetCurrentDayOfYearHelper();
    return (
        <StyledTodayFullDate $currentPercentOfYear={currentPercentOfYear} $timelineZoom={timelineZoom}>
            <h3 className="font-bricolage">{todayFullDate}</h3>
            {todayEntry && (
                clickedEntryId === undefined || clickedEntryId.id !== todayEntry.id ? (
                    <p className="font-bricolage">{todayEntry.title.rendered}</p>
                ) : null
            )}


        </StyledTodayFullDate>
    );
}
// <p>{todayEntry && clickedEntryId && todayEntry.id !== clickedEntryId.id && todayEntry.title}</p>

const StyledTodayFullDate = styled.div`
display: flex;
flex-direction: column;
position: absolute;
left: ${(props) => props.$currentPercentOfYear}%;
overflow: visible;
transform: translateX(5px);
font-size: ${(props) => (props.$timelineZoom / 1000 + 0.8)}rem;
transition: all 0.3s ease;
`;