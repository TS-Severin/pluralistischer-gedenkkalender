import GetCurrentDayOfYearHelper from "@/services/GetCurrentDayOfYearHelper";
// import GetTodayFullDateHelper from "@/services/GetTodayFullDateHelper";
import styled from "styled-components";

const StyledTimelineAxis = styled.span`
position: absolute;
left: ${(props) => props.$currentPercentOfYear}%;
width: 1px;
height: 176px;
overflow: visible;
background-color: black;
transform: translateY(50%);
`;

// const StyledTodayAxisElement = styled.p`
//     grid-column: ${dayCount};
//     transform: translateY(500%);
// `

export default function TimelineAxis({title, date}) {
    const currentPercentOfYear = GetCurrentDayOfYearHelper();
    // console.log("ganzes Datum", todayFullDate);
    return (
        
        <>
        <StyledTimelineAxis $currentPercentOfYear={currentPercentOfYear} />
        </>
        
    );
}