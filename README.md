# This is a calender showing comemmorative dates coming from the project: https://cppdnetwork.com/pluralistischer-gedenkkalender/

The project is created in next.js by Tillmann Severin. Written in JSX.

Libraries used are next-ui for the slider-component and the Spinner which is shown while the data is loading.

All the helper Functions are in the directory services.

It works with tailwind and global styles are applied with sass.

(On the branch old-version is another option for importing Calender Dates. (DateDownloadButton and api) It can be used for implementing an option for downloading all dates at once later).

The Length of the texts and the size and appearance can be changed in the service function getPreviewText.js and in the TimeLinePreviewWindow itself. This is crucial when changes in the overall format of the Headings occur.

The Ical-Download creates a link for .ics-files including a yearly repetition, a small preview text and a link.

The app is not fully accessible. The Links to the dates and the dots are not linked. To achieve better accessiblility this should be changed later in TimelineDot.js.
