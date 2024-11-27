export default function getPreviewText(text, titleLength, endDateLength) {
    // Split the text into words
    const words = text.split(/\s+/);
    let previewLength = 25;
    // first words number

    if (titleLength > 30 || endDateLength > 0) {
        previewLength = 5;
    }
    const previewWords = words.slice(0, previewLength);

    // Join the words back into a string
    const previewText = previewWords.join(' ');

    return previewText;
}