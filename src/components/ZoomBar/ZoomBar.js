import { Slider } from "@nextui-org/slider";
import { FaPlus, FaMinus } from "react-icons/fa6";

// slider for zooming in and out

export default function ZoomBar({ handleZoomChange }) {

    const handleChange = (value) => {
        handleZoomChange(value);

    };


    return (
        <div className="flex justify-evenly w-full bg-white border-4 p-2">



            <Slider
                color="foreground"
                size="sm"
                aria-label="zoom timeline"
                step={10}
                maxValue={2000}
                minValue={100}
                defaultValue={100}
                className="max-w-md"
                onChange={handleChange}
                classNames={{
                    thumb: "bg-[#901f67] focus:bg-[#901f67] active:bg-[#901f67] hover:bg-[#901f67]",
                    foreground: "bg-[#901f67]",
                    range: "bg-[#901f67]",


                    track: "bg-[#901f67]",
                    // Optional: If you want to remove focus outline or customize it
                    focusRing: "focus:outline-none",  // Optional: Remove default outline
                }}
                startContent={<FaMinus className="text-xl" />}
                endContent={<FaPlus className="text-xl" />}
            />

        </div >
    );
}

