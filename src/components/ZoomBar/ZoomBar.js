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
                color="secondary"
                aria-label="zoom timeline"
                step={10}
                maxValue={2000}
                minValue={100}
                defaultValue={100}
                className="max-w-md"
                onChange={handleChange}
            />

        </div >
    );
}