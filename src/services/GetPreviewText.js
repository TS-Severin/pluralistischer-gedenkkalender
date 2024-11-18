export default function getPreviewText(text, titleLength) {
    // Split the text into words
    const words = text.split(/\s+/);
    let previewLength = 30;
    // first words number

    if (titleLength > 40) {
        previewLength = 9;
    };
    const previewWords = words.slice(0, previewLength);

    // Join the words back into a string
    const previewText = previewWords.join(' ');

    return previewText;
}