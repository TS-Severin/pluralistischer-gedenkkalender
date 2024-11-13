import "@/styles/globals.scss";
import { SWRConfig } from "swr";
import Navigation from "@/components/Navigation/Navigation";
import { useEffect } from "react";
import { useState } from "react";
import useSWR from "swr";
// import fetcher from "../pages/lib/fetcher";
import { Cormorant_Garamond, Bricolage_Grotesque } from 'next/font/google'
import { NextUIProvider } from "@nextui-org/react";
import { changeDateFormat } from "@/services/changeDateFormat";


const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-cormorant',
})

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bricolage',
})

export default function App({ Component, pageProps }) {
  const fetcher = async (...args) => {
    const response = await fetch(...args);
    if (!response.ok) {
      throw new Error(`Request with ${JSON.stringify(args)} failed.`);
    }
    return response.json();
  };

  const { data: dataPage1, isLoading: isLoadingPage1 } = useSWR("https://cppdnetwork.com/wp-json/wp/v2/plgk-eintrag/?per_page=100&_fields=id,title,excerpt,link,acf", fetcher);

  const { data: dataPage2, isLoading: isLoadingPage2 } = useSWR("https://cppdnetwork.com/wp-json/wp/v2/plgk-eintrag/?per_page=100&offset=100&_fields=id,title,excerpt,link,acf", fetcher);

  // Initializing state for entries in order to concat all the entries fetched with two calls from the WP REST API which only allows to fetch 100 entries per page
  // const [entries, setEntries] = useState([]);

  // Combined loading state
  const isLoading = isLoadingPage1 || isLoadingPage2;

  // State to hold the combined data
  const [entries, setEntries] = useState([]);

  // useEffect to set entries only once after both pages have been loaded
  useEffect(() => {
    if (dataPage1 && dataPage2) {
      const combinedEntries = [...dataPage1, ...dataPage2];
      const updatedEntries = changeDateFormat(combinedEntries);
      setEntries(updatedEntries);
    }
  }, [dataPage1, dataPage2]); // Only run when dataPage1 and dataPage2 change


  // console.log("ALLES ", entries);



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
  if (isLoading) return <div>Loading...</div>;

  console.log("PREVIEW IS CLICKED ", previewIsClicked);



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
  // if (!dataPage1 || !dataPage2) return <div>Failed to load data</div>;

  // timelineZoom={timelineZoom}
  return (
    <NextUIProvider>
      <div className={`${cormorant.variable}  ${bricolage.variable} `}>
        <SWRConfig value={{ fetcher }}>



          <Navigation />
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
