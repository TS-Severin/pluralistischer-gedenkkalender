import Head from "next/head";
import Timeline from "@/components/Timeline/Timeline";
import Preview from "@/components/Preview/Preview";
import ZoomBar from "@/components/ZoomBar/ZoomBar";

export default function Home({ handlePreviewClick, previewIsClicked, entries, handleZoomChange, timelineZoom }) {
  // const { user, error, isLoading } = useUser();

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>{error.message}</div>;

  return (
    <>
      <Head>
        <title>erinnerungsfutur</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <div className="mx-4">

          <Preview previewIsClicked={previewIsClicked} />

          <Timeline
            handlePreviewClick={handlePreviewClick}
            previewIsClicked={previewIsClicked}
            timelineZoom={timelineZoom}

          />
          <ZoomBar handleZoomChange={handleZoomChange} />
        </div>
      </main>
    </>
  );
}
