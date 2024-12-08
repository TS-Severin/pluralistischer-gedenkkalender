import GetCurrentDayOfYearHelper from "@/services/GetCurrentDayOfYearHelper";
import styled from "styled-components";

// vertica. axis indicating the date today

export default function TimelineAxis({ timelineZoom = { timelineZoom } }) {
    const currentPercentOfYear = GetCurrentDayOfYearHelper();
    return (

        <>
            <StyledTimelineAxis $currentPercentOfYear={currentPercentOfYear} $timelineZoom={timelineZoom} />
        </>

    );
}


const StyledTimelineAxis = styled.span`
position: absolute;
left: ${(props) => props.$currentPercentOfYear}%;
width: ${(props) => (props.$timelineZoom / 250 + 2)}px;
height: ${(props) => (props.$timelineZoom / 100 + 48)}px;
overflow: visible;
background-color: #901f67;
z-index: 1000
transition: all 0.3s ease;
`;