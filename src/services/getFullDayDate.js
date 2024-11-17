export default function getFullDayDate(dateString) {
    const dateObj = new Date(dateString);
    const options = {
        month: 'long',
        day: 'numeric',
    };

    const fullDayDate = dateObj.toLocaleDateString('de-DE', options);
    return fullDayDate
}
