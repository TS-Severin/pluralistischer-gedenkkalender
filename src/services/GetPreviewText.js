export default function getPreviewText(text, titleLength, endDateLength) {
    // Split the text into words
    const words = text.split(/\s+/);
    let previewLength = 30;
    // first words number

    if (titleLength > 40 || endDateLength > 0) {
        previewLength = 20;
    }
    const previewWords = words.slice(0, previewLength);

    // Join the words back into a string
    const previewText = previewWords.join(' ');

    return previewText;
}