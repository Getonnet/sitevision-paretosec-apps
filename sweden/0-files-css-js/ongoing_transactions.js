// Function to create HTML elements dynamically
function createTransactionElement(transaction) {
  const div = document.createElement("div");
  div.classList.add("sv-text-portlet", "sv-use-margins", "sv-template-portlet");

  const p = document.createElement("p");
  p.classList.add("sv-font-small-paragraph");
  p.style.marginTop = "1em";
  p.style.marginBottom = "1em";
  p.textContent = transaction.publishdate;

  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add("sv-custom-module", "sv-marketplace-sitevision-button", "sv-template-portlet");

  const link = document.createElement("a");
  link.classList.add("env-button", "env-button--link", "env-button--noicon");
  link.href = transaction.pageurl;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  // link.textContent = transaction.title;
  link.innerHTML = '<span class="text">' + transaction.title + "</span>";

  const icon = document.createElement("span");
  icon.classList.add("arrow-icon");
  icon.textContent = "→";
  link.appendChild(icon);

  buttonDiv.appendChild(link);
  div.appendChild(p);
  div.appendChild(buttonDiv);

  return div;
}

// Function to add transactions to the HTML
function addTransactionsToHTML(jsonData) {
  const container = document.getElementById("ongoing-transactions");

  jsonData.forEach((transaction) => {
    const transactionElement = createTransactionElement(transaction);
    container.appendChild(transactionElement);
  });
}

$(document).ready(function () {
  const data = [
    {
      title: "Subsequent repair offering in Nordic Halibut AS (11 December 2023)",
      publishdate: "December 10 2023",
      pageurl: "https://paretosec.com/updates/transactions/subsequent-repair-offering-in-nordic-halibut-as-11-december-2023"
    },
    {
      title: "Medivir AB â€“ rights issue of approximately SEK 148 million",
      publishdate: "December 6 2023",
      pageurl: "https://paretosec.com/updates/transactions/medivir-ab-rights-issue-of-approximately-sek-148-million"
    },
    {
      title: "Listing prospectus and subsequent repair offering in Prosafe SE (29 November 2023)",
      publishdate: "November 29 2023",
      pageurl: "https://paretosec.com/updates/transactions/listing-prospectus-and-subsequent-repair-offering-in-prosafe-se-29-november-2023"
    },
    {
      title: "Biovica International AB - Rights issue of units of approximately SEK 120 million",
      publishdate: "November 28 2023",
      pageurl: "https://paretosec.com/updates/transactions/rights-issue-of-units-of-approximately-sek-120-million"
    }
  ];
  //addTransactionsToHTML(data);

  fetch("https://paretosec.com/json/ongoingtransactions")
    .then((response) => response.text())
    .then((data) => {
      // Replace single quotes with double quotes
      const fixedData = data.replace(/'([^']+)'/g, '"$1"');

      // Parse the fixed JSON-like string into an actual JSON object
      const jsonData = JSON.parse(fixedData);

      // Now you can work with the parsed JSON data
      addTransactionsToHTML(jsonData);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});
