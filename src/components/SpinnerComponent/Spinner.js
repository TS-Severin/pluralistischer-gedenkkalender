import { Spinner } from "@nextui-org/spinner";

export default function SpinnerComponent() {

    return (

        <div className="absolute top-[25%] left-[50%] translate-x-[-50%]">
            <Spinner
                size="lg"
                color="default"
            />

        </div>


    );

}