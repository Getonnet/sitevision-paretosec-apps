import * as React from "react";
// import styles from "./App.scss";
import { FormType } from "../../index";

export interface AppProperties {
  formType: FormType;
}

const APIurl = "https://secure.infrontservices.com/cgi/IFMail.dll/DemoReg";

const MobileDefaults = {
  ReferrerPage: "Pareto-appen til iPhone/iPad/Android",
  ProviderDir: "PARL",
  OwnerBroker: "PARB",
  BrokerCountry: "47",
  Professional: "1",
};
// const MobileApiUrl =
//   "https://secure.infrontservices.com/cgi/IFMail.dll/DemoReg";

const WebDefaults = {
  ReferrerPage: "Web Trader",
  ProviderDir: "PARL",
  OwnerBroker: "PARB",
  BrokerCountry: "47",
  Professional: "1",
};
// const WebApiUrl = "https://secure.infrontservices.com/cgi/IFMail.dll/DemoReg";
// const activeUrl = "https://secure.infrontservices.com/cgi/IFMail.dll/DemoReg";

const ActiveDefaults = {
  ReferrerPage: "Infront Active Trader",
  ProviderDir: "PAR",
  OwnerBroker: "PAR",
  BrokerCountry: "47",
  Professional: "1",
};

const App: React.FunctionComponent<AppProperties> = ({ formType }) => {
  const [formData, setFormData] = React.useState({
    firstname: "",
    lastname: "",
    address: "",
    country: "",
    phone: "",
    submit_by: "",
    addinfo: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload = {
      ...formData,
      ...(formType === "mobile"
        ? MobileDefaults
        : formType === "web"
        ? WebDefaults
        : ActiveDefaults),
    };

    console.log(payload);

    // TODO: remove this after testing
    return;

    try {
      const response = await fetch(APIurl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(payload),
      });

      if (response.ok) {
        console.log("OK!");
        typeof window !== "undefined" &&
          (window.location.href = "../../Default.aspx?ID=128");
      } else {
        console.log("Network response was not ok.");
      }
    } catch (error) {
      console.error("There was a problem with your fetch operation:", error);
    }
  };

  // TODO: add styling for form,
  // TODO: copy from, home page fields
  return (
    <div className="env-flex">
      <div className="env-flex__item env-flex__item--length-1">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstname" className="control-label">
              Fornavn
            </label>
            <input
              id="firstname"
              className="form-control"
              required
              onChange={handleChange}
              value={formData.firstname}
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastname" className="control-label">
              Etternavn
            </label>
            <input
              id="lastname"
              className="form-control"
              required
              onChange={handleChange}
              value={formData.lastname}
            />
          </div>

          <div className="form-group">
            <label htmlFor="address" className="control-label">
              Adresse
            </label>
            <input
              id="address"
              className="form-control"
              required
              onChange={handleChange}
              value={formData.address}
            />
          </div>

          <div className="form-group">
            <label htmlFor="country" className="control-label">
              Land
            </label>
            <input
              id="country"
              className="form-control"
              required
              onChange={handleChange}
              value={formData.country}
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone" className="control-label">
              Telefon
            </label>
            <input
              id="phone"
              className="form-control"
              required
              onChange={handleChange}
              value={formData.phone}
            />
          </div>

          <div className="form-group">
            <label htmlFor="submit_by" className="control-label">
              E-post
            </label>
            <input
              id="submit_by"
              className="form-control"
              required
              onChange={handleChange}
              value={formData.submit_by}
            />
          </div>

          <div className="form-group">
            <label htmlFor="addinfo" className="control-label">
              Kommentar
            </label>
            <textarea
              id="addinfo"
              className="form-control"
              onChange={handleChange}
              value={formData.addinfo}
            />
          </div>

          <div className="form-group">
            <button id="btnSubmit" className="btn btn-info">
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="env-flex__item env-flex__item--length-1" />
    </div>
  );
};

export default App;
