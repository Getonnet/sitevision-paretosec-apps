export function formatTimestampToNorwegianDate(timestamp) {
  // Convert milliseconds to seconds
  const timestampInSeconds = timestamp / 1000;

  // Create a new Date object with the timestamp in seconds
  const date = new Date(timestampInSeconds * 1000);

  // Define an array for Norwegian month names
  const norwegianMonths = [
    "Januar",
    "Februar",
    "Mars",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  // Extract components of the date
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  // Formatted date string in Norwegian
  return `${day} ${norwegianMonths[monthIndex]} ${year}`;
}

// export const convertHtmlEntities = (input) => {
//   const textarea = document.createElement("textarea");
//   textarea.innerHTML = input;
//   return textarea.value;
// };

export function filterNonASCIICharacters(str) {
  // console.log("article title: " + str);
  return str.replace(/[^\x00-\x7F]/g, "");
}

export function limitSentenceTo15Words(sentence) {
  const words = sentence.split(" ");
  const limitedWords = words.slice(0, 15);
  return limitedWords.join(" ");
}

export const getArticleType = (path) => {
  if (path.includes("Aktuelt")) {
    return "Aktuelt";
  } else if (path.includes("Pareto TV")) {
    return "Pareto TV";
  } else {
    return "Visning";
  }
};
