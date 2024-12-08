import "@/styles/globals.scss";
import { SWRConfig } from "swr";
import { useEffect } from "react";
import { useState } from "react";
import useSWR from "swr";
import { NextUIProvider } from "@nextui-org/react";
import { changeDateFormat } from "@/services/changeDateFormat";
import SpinnerComponent from "@/components/SpinnerComponent/Spinner";

export default function App({ Component, pageProps }) {
  const fetcher = async (...args) => {
    const response = await fetch(...args);
    if (!response.ok) {
      throw new Error(`Request with ${JSON.stringify(args)} failed.`);
    }
    return response.json();
  };

  // fetch all dates in two pages (max entries per page is 100 in the wordpress api)
  const { data: dataPage1, isLoading: isLoadingPage1 } = useSWR("https://cppdnetwork.com/wp-json/wp/v2/plgk-eintrag/?per_page=100&_fields=id,title,excerpt,link,acf", fetcher);

  const { data: dataPage2, isLoading: isLoadingPage2 } = useSWR("https://cppdnetwork.com/wp-json/wp/v2/plgk-eintrag/?per_page=100&offset=100&_fields=id,title,excerpt,link,acf", fetcher);


  // Combined loading state
  const isLoading = isLoadingPage1 || isLoadingPage2;

  // State to hold the combined data
  const [entries, setEntries] = useState([]);

  // useEffect to set entries only once after both pages have been loaded
  useEffect(() => {
    if (dataPage1 && dataPage2) {
      const combinedEntries = [...dataPage1, ...dataPage2];
      // make dateformat js readable yyyy-mm-dd
      const updatedEntries = changeDateFormat(combinedEntries);
      setEntries(updatedEntries);
    }
  }, [dataPage1, dataPage2]); // Only run when dataPage1 and dataPage2 change





  // INITIALIZING STATE FOR ZOOM
  const [timelineZoom, setTimelineZoom] =
    useState(100);

  // INITIALIZING STATE FOR PREVIEW
  const [previewIsClicked, setPreviewIsClicked] =
    useState([]);
  // do it once when loading
  useEffect(() => {
    if (entries.length > 0) {
      const initialState = entries.map(entry => ({ id: entry.id, clicked: false }
      ));
      setPreviewIsClicked(initialState);

    }
  }, [entries]);
  if (isLoading) return <div><SpinnerComponent /></div>;





  const handleZoomChange = (value) => {
    setTimelineZoom(value);
  }

  // SETTING CLICK STATE

  //   set state to true when hovering
  const handlePreviewClick = (clickedId) => {
    setPreviewIsClicked(prevState =>
      prevState.map(entry => ({
        ...entry,
        clicked: entry.id === clickedId ? true : false
      }
      ))

    );
  };

  if (isLoading) return <div>Loading...</div>;


  // timelineZoom={timelineZoom}
  return (
    <NextUIProvider>
      <div >
        <SWRConfig value={{ fetcher }}>




          <Component {...pageProps}
            handlePreviewClick={handlePreviewClick}
            previewIsClicked={previewIsClicked}
            entries={entries}
            handleZoomChange={handleZoomChange}
            timelineZoom={timelineZoom}
          />


        </SWRConfig>
      </div>
    </NextUIProvider >
  );
}
