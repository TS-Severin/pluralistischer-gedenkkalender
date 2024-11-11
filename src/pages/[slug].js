import { useRouter } from "next/router"
import useSWR from "swr"
import ICalDownload from "@/components/ICalDownload/ICalDownload";
import { useState } from "react";



export default function DateDetailsPage() {
  // const [isEditMode, setIsEditMode] = useState(false);
  // const { user, error, isLoading } = useUser();
  const router = useRouter()
  const { slug } = router.query
  const { data: entries, error: swrError, mutate } = useSWR(slug ? `/api/${slug}` : null)
  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>{error.message}</div>;





  if (swrError) return <div>Error fetching data</div>
  if (!entries) return <div>Loading...</div>
  const { title, author, datestring, text, date, slug: iCalSlug } = entries;

  const createMarkup = (htmlString) => {
    return { __html: htmlString }
  };



  return (
    <>
      <div className="relative bg-white m-4 p-8 border-4 rounded-3xl shadow-xl">

        <h1 className="font-bricolage font-extralight text-2xl">{`${datestring}:`}</h1>
        <h1 className="font-bricolage font-extralight pt-2 text-2xl">{title}</h1>
        <h2 className="italic font-cormorant pt-8">{author}</h2>
        <div className="font-cormorant pt-4" dangerouslySetInnerHTML={createMarkup(text)} />
        <div className="absolute top-8 right-8">
          <ICalDownload date={date} title={title} iCalSlug={iCalSlug} text={text} />
        </div>
      </div>

    </>
  )
}
