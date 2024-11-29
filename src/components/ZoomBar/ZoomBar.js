import { Slider, Button } from "@nextui-org/slider";
import { VolumeLowIcon } from "./VolumeLowIcon";
import { VolumeHighIcon } from "./VolumeHighIcon";

export default function ZoomBar({ handleZoomChange }) {

    const handleChange = (value) => {
        handleZoomChange(value);

    };


    return (
        <div className="flex justify-evenly w-full bg-white border-4 p-2">



            <Slider

                aria-label="zoom timeline"
                step={10}
                maxValue={2000}
                minValue={100}
                defaultValue={100}
                className="max-w-md"
                onChange={handleChange}
                classNames={{
                    thumb: "bg-[#901f67] focus:bg-[#901f67] active:bg-[#901f67]",

                    range: "bg-[#901f67]",
                    filler: "bg-[#901f67]",


                }}
            />

        </div >
    );
}