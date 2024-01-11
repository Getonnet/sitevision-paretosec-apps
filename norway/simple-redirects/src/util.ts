// export const getFormattedValues = (string: string) => {
//   const mergedObject: any = {};
//   const lines = string.split("\n");
//   lines.map((line) => {
//     const lineArr = line.split(",").map((item) => item.trim());
//     // removing domain name, so redirects will work even if domain changes
//     let nodeUrl = lineArr[1].replace("https://www.paretosec.no/", "/");
//     nodeUrl = nodeUrl.replace("https://paretosec.no/", "/");
//
//     if (mergedObject.hasOwnProperty(lineArr[1])) {
//       mergedObject[nodeUrl] = [...mergedObject[lineArr[1]], lineArr[0]];
//     } else {
//       mergedObject[nodeUrl] = [lineArr[0]];
//     }
//   });
//   return mergedObject;
// };
