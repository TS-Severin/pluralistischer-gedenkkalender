import styled from "styled-components";
import GetDayOfYearHelper from "../../services/GetDayOfYearHelper";
import useGSAP from "./useDotAnimation";
import React, { useRef, useState, useEffect } from 'react';
import Link from "next/link";
import getPurpleFromPercentage from "@/services/getPurpleFromPercentage";

// dots in timeline (with gsap animation)

export default function TimelineDot({ id, date, link, handlePreviewClick, timelineZoom }) {
  const percentOfYear = GetDayOfYearHelper(date);

  const purpleFromPercentage = getPurpleFromPercentage(percentOfYear);

  // define reference for gsap animatin of dots (pass as props)
  const dotRef = useRef(null);
  const mobileDotRef = useRef(null);


  // Apply GSAP animation when the component mounts

  useGSAP(dotRef);
  useGSAP(mobileDotRef);

  // State to track screen width
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Function to update isSmallScreen state based on screen width
  const updateScreenSize = () => {
    setIsSmallScreen(window.innerWidth < 640);
  };

  // Add event listener for screen resize
  useEffect(() => {
    updateScreenSize(); // Initial check

    window.addEventListener('resize', updateScreenSize);
    return () => {
      window.removeEventListener('resize', updateScreenSize);

    };
  }, []); // Empty dependency array to run only on mount and unmount

  // the conditional link ensures that the link only works on desktop size, otherwise it only opens the preview window
  var ConditionalLink = !isSmallScreen ? Link : "div";


  return (
    <>



      <StyledTimelineDot
        key={id}
        ref={isSmallScreen ? mobileDotRef : dotRef}
        $purpleFromPercentage={purpleFromPercentage}
        $percentOfYear={percentOfYear}

        onClick={isSmallScreen ? () => handlePreviewClick(id) : undefined}
        $timelineZoom={timelineZoom}
      ><ConditionalLink href={link} onMouseEnter={!isSmallScreen ? () => handlePreviewClick(id) : undefined} /></StyledTimelineDot>


    </>
  );
}



const StyledTimelineDot = styled.div`

opacity: 1;
position: absolute;
left: ${(props) => props.$percentOfYear}%;
transform: translateX(-50%);
transform: translateY(-1px);
overflow: visible;
height: ${(props) => (props.$timelineZoom / 100 + 10)}px;
width: ${(props) => (props.$timelineZoom / 100 + 10)}px;
background-color: #901f67;
box-shadow: rgb(0 0 0 / 20%) 0 0 ${(props) => (props.$timelineZoom / 100 + 10)}px;
border-radius: 50%;
z-index: 1000;
justify-self: center;
transition: all 3s ease;
&:hover {
  background-color: white;
  box-shadow: rgb(144, 31, 103)
  0px 7px 29px ${(props) => (props.$timelineZoom / 100 + 10)}px;
  transition: all 0.01s ease;

}

  @media (max-width: 640px) {
    scale: 1;
    opacity: 1;
    position: absolute;
left: ${(props) => props.$percentOfYear}%;
transform: translateX(-50%);
overflow: visible;
height: ${(props) => (props.$timelineZoom / 100 + 8)}px;
width: ${(props) => (props.$timelineZoom / 100 + 8)}px;
background-color: #901f67;
box-shadow: rgb(0 0 0 / 20%) 0 0 ${(props) => (props.$timelineZoom / 100 + 8)}px;
border-radius: 50%;
z-index: 1000;
justify-self: center;
transition: all 3s ease;
&:hover {
  background-color: white;
  box-shadow: rgb(144, 31, 103)
  0px 7px 29px ${(props) => (props.$timelineZoom / 100 + 4)}px;
  transition: all 0.01s ease;

}

`;

// background-color: ${(props) => props.$purpleFromPercentage};
// old color for box shadow on hover: rgb(118, 56, 200)