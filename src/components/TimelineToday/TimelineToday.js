import GetTodayFullDateHelper from "../../services/GetTodayFullDateHelper"
import GetFormattedDateHelper from "@/services/GetFormattedDateHelper";
import GetMonthDayDateHelper from "../../services/GetMonthDayDateHelper";
import GetCurrentDayOfYearHelper from "@/services/GetCurrentDayOfYearHelper";
import styled from "styled-components";



export default function TimelineToday({ timelineZoom }) {






    const todayFullDate = GetTodayFullDateHelper();
    // gets the position of today on the X axis
    const currentPercentOfYear = GetCurrentDayOfYearHelper();
    return (
        <StyledTodayFullDate $currentPercentOfYear={currentPercentOfYear} $timelineZoom={timelineZoom}>
            <h3 className="font-bricolage">{todayFullDate}</h3>
        </StyledTodayFullDate>
    );
}


const StyledTodayFullDate = styled.div`
display: flex;
flex-direction: column;
position: absolute;
left: ${(props) => props.$currentPercentOfYear < 50 ? props.$currentPercentOfYear : 'auto'};
right: ${(props) => props.$currentPercentOfYear > 50 ? `${100 - props.$currentPercentOfYear}%` : 'auto'};
overflow: hidden;
transform: translateX(5px);
font-size: ${(props) => (props.$timelineZoom / 1000 + 0.8)}rem;
transition: all 0.3s ease;
`;