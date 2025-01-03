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
  var ConditionalLink = !isSmallScreen ? "a" : "div";


  return (
    <>


      <ConditionalLink href={link} target="_blank" style={{ position: 'absolute', left: `${percentOfYear}%` }} tabIndex="-1">
        <StyledTimelineDot
          key={id}
          ref={isSmallScreen ? mobileDotRef : dotRef}
          $purpleFromPercentage={purpleFromPercentage}

          onMouseEnter={!isSmallScreen ? () => handlePreviewClick(id) : undefined}
          onClick={isSmallScreen ? () => handlePreviewClick(id) : undefined}
          onFocus={!isSmallScreen ? () => handlePreviewClick(id) : undefined}
          $timelineZoom={timelineZoom}
          tabIndex="0"
        />
      </ConditionalLink>

    </>
  );
}



const StyledTimelineDot = styled.button`
all: unset;
display: block;
opacity: 1;
transform: translateX(-50%);
transform: translateY(5px);
overflow: visible;
height: ${(props) => (props.$timelineZoom / 100 + 10)}px;
width: ${(props) => (props.$timelineZoom / 100 + 10)}px;
background-color: #901f67;
box-shadow: rgb(0 0 0 / 20%) 0 0 ${(props) => (props.$timelineZoom / 100 + 10)}px;
border-radius: 50%;
z-index: 1000;
justify-self: center;
transition: all 3s ease;
&:hover,
&:focus {
  background-color: white;
  box-shadow: rgb(144, 31, 103)
  0px 7px 29px ${(props) => (props.$timelineZoom / 100 + 10)}px;
  transition: all 0.01s ease;

}

  @media (max-width: 640px) {
    scale: 1;
    opacity: 1;
    all: unset;
    display: block;
transform: translateX(-50%);
transform: translateY(9px);
overflow: visible;
height: ${(props) => (props.$timelineZoom / 100 + 8)}px;
width: ${(props) => (props.$timelineZoom / 100 + 8)}px;
background-color: #901f67;
box-shadow: rgb(0 0 0 / 20%) 0 0 ${(props) => (props.$timelineZoom / 100 + 8)}px;
border-radius: 50%;
z-index: 1000;
justify-self: center;
transition: all 3s ease;
&:hover,
&:focus {
  background-color: white;
  box-shadow: rgb(144, 31, 103)
  0px 7px 29px ${(props) => (props.$timelineZoom / 100 + 4)}px;
  transition: all 0.01s ease;

}

`;

// background-color: ${(props) => props.$purpleFromPercentage};
// old color for box shadow on hover: rgb(118, 56, 200)