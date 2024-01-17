import * as React from "react";
import styles from "./App.scss";
import { FormType } from "../../index";

export interface AppProperties {
  formType: FormType;
  redirectPageUrl: string;
}

const APIurl = "https://secure.infrontservices.com/cgi/IFMail.dll/DemoReg";

const MobileDefaults = {
  ReferrerPage: "Infront Mobile",
  ProviderDir: "PARMSE",
  OwnerBroker: "PAR",
  BrokerCountry: "46",
  Professional: "1",
};

const WebDefaults = {
  ReferrerPage: "Infront Web Trader",
  ProviderDir: "PARLSE",
  OwnerBroker: "PAR",
  BrokerCountry: "46",
  Professional: "1",
};

const ActiveDefaults = {
  ReferrerPage: "Infront Active Trader",
  ProviderDir: "PARSE",
  OwnerBroker: "PAR",
  BrokerCountry: "46",
  Professional: "1",
};

const App: React.FunctionComponent<AppProperties> = ({
  formType,
  redirectPageUrl,
}) => {
  const [formData, setFormData] = React.useState({
    firstname: "",
    lastname: "",
    address: "",
    country: "Sweden",
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
        if (typeof window !== "undefined") {
          redirectPageUrl === "#"
            ? window.location.reload()
            : (window.location.href = redirectPageUrl);
        }
      } else {
        console.log("Network response was not ok.");
      }
    } catch (error) {
      console.error("There was a problem with your fetch operation:", error);
    }
  };

  return (
    <div className={`${styles.wrapper} form-wrapper`}>
      <form onSubmit={handleSubmit} className={"sv-defaultFormTheme"}>
        <div className="form-group">
          <label htmlFor="firstname" className="control-label">
            Förnamn
          </label>
          <input
            type="text"
            id="firstname"
            className="form-control"
            required
            onChange={handleChange}
            value={formData.firstname}
            placeholder="Förnamn"
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastname" className="control-label">
            Efternamn
          </label>
          <input
            type="text"
            id="lastname"
            className="form-control"
            required
            onChange={handleChange}
            value={formData.lastname}
            placeholder={"Efternamn"}
          />
        </div>

        <div className="form-group">
          <label htmlFor="address" className="control-label">
            Adress
          </label>
          <input
            type="text"
            id="address"
            className="form-control"
            required
            onChange={handleChange}
            value={formData.address}
            placeholder={"Adress"}
          />
        </div>

        <div className="form-group">
          <label htmlFor="country" className="control-label">
            Land
          </label>
          <select
            id="country"
            className="form-control"
            name="country"
            onChange={handleChange}
            value={formData.country}
            required
          >
            <option value="Australia">Australia</option>
            <option value="Austria">Austria</option>
            <option value="Azerbaijan">Azerbaijan</option>
            <option value="Barbados">Barbados</option>
            <option value="Belgium">Belgium</option>
            <option value="Brazil">Brazil</option>
            <option value="Brunei Darussalam">Brunei Darussalam</option>
            <option value="Bulgaria">Bulgaria</option>
            <option value="Cambodia">Cambodia</option>
            <option value="Cameroon">Cameroon</option>
            <option value="Chile and Easter Island">
              Chile and Easter Island
            </option>
            <option value="China">China</option>
            <option value="Colombia">Colombia</option>
            <option value="Costa Rica">Costa Rica</option>
            <option value="Croatia">Croatia</option>
            <option value="Cuba">Cuba</option>
            <option value="Cyprus">Cyprus</option>
            <option value="Czech Republic">Czech Republic</option>
            <option value="Denmark">Denmark</option>
            <option value="Ecuador">Ecuador</option>
            <option value="Egypt">Egypt</option>
            <option value="El Salvador">El Salvador</option>
            <option value="Estonia">Estonia</option>
            <option value="Faroe Islands">Faroe Islands</option>
            <option value="Finland">Finland</option>
            <option value="France">France</option>
            <option value="Georgia">Georgia</option>
            <option value="Germany">Germany</option>
            <option value="Gibraltar">Gibraltar</option>
            <option value="Greece">Greece</option>
            <option value="Greenland">Greenland</option>
            <option value="Guatemala">Guatemala</option>
            <option value="Haiti">Haiti</option>
            <option value="Honduras">Honduras</option>
            <option value="Hong Kong">Hong Kong</option>
            <option value="Hungary">Hungary</option>
            <option value="Iceland">Iceland</option>
            <option value="India">India</option>
            <option value="Indonesia">Indonesia</option>
            <option value="Iran (Islamic Republic of)">
              Iran (Islamic Republic of)
            </option>
            <option value="Iraq">Iraq</option>
            <option value="Ireland">Ireland</option>
            <option value="Israel">Israel</option>
            <option value="Italy">Italy</option>
            <option value="Jamaica">Jamaica</option>
            <option value="Japan">Japan</option>
            <option value="Jordan">Jordan</option>
            <option value="Kazakhstan">Kazakhstan</option>
            <option value="Kenya">Kenya</option>
            <option value="Kiribati">Kiribati</option>
            <option value="Kuwait">Kuwait</option>
            <option value="Kyrgyzstan">Kyrgyzstan</option>
            <option value="Laos">Laos</option>
            <option value="Latvia">Latvia</option>
            <option value="Lebanon">Lebanon</option>
            <option value="Lesotho">Lesotho</option>
            <option value="Liberia">Liberia</option>
            <option value="Libyan Arab Jamahiriya">
              Libyan Arab Jamahiriya
            </option>
            <option value="Liechtenstein">Liechtenstein</option>
            <option value="Lithuania">Lithuania</option>
            <option value="Luxembourg">Luxembourg</option>
            <option value="Macau">Macau</option>
            <option value="Macedonia">Macedonia</option>
            <option value="Madagascar">Madagascar</option>
            <option value="Malawi">Malawi</option>
            <option value="Malaysia">Malaysia</option>
            <option value="Maldives">Maldives</option>
            <option value="Mali">Mali</option>
            <option value="Malta">Malta</option>
            <option value="Marshall Islands">Marshall Islands</option>
            <option value="Martinique (French Antilles)">
              Martinique (French Antilles)
            </option>
            <option value="Mauritania">Mauritania</option>
            <option value="Mauritius">Mauritius</option>
            <option value="Mayotte">Mayotte</option>
            <option value="Mexico">Mexico</option>
            <option value="Micronesia, Federated States of">
              Micronesia, Federated States of
            </option>
            <option value="Moldova, Republic of">Moldova, Republic of</option>
            <option value="Monaco">Monaco</option>
            <option value="Mongolia">Mongolia</option>
            <option value="Montserrat">Montserrat</option>
            <option value="Morocco">Morocco</option>
            <option value="Mozambique">Mozambique</option>
            <option value="Myanmar">Myanmar</option>
            <option value="Namibia">Namibia</option>
            <option value="Nauru">Nauru</option>
            <option value="Nepal">Nepal</option>
            <option value="Netherlands">Netherlands</option>
            <option value="Netherlands Antilles">Netherlands Antilles</option>
            <option value="New Caledonia">New Caledonia</option>
            <option value="New Zealand">New Zealand</option>
            <option value="Nicaragua">Nicaragua</option>
            <option value="Niger">Niger</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Niue">Niue</option>
            <option value="Norfolk Island">Norfolk Island</option>
            <option value="North Korea">North Korea</option>
            <option value="Northern Mariana Islands">
              Northern Mariana Islands
            </option>
            <option value="Norway" selected>
              Norway
            </option>
            <option value="Oman">Oman</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Panama">Panama</option>
            <option value="Paraguay">Paraguay</option>
            <option value="Peru">Peru</option>
            <option value="Philippines">Philippines</option>
            <option value="Poland">Poland</option>
            <option value="Portugal">Portugal</option>
            <option value="Puerto Rico">Puerto Rico</option>
            <option value="Qatar">Qatar</option>
            <option value="Romania">Romania</option>
            <option value="Russian Federation">Russian Federation</option>
            <option value="Saudi Arabia">Saudi Arabia</option>
            <option value="Singapore">Singapore</option>
            <option value="Slovakia (Slovak Republic)">
              Slovakia (Slovak Republic)
            </option>
            <option value="Slovenia">Slovenia</option>
            <option value="South Africa">South Africa</option>
            <option value="South Korea">South Korea</option>
            <option value="Spain">Spain</option>
            <option value="Sri Lanka">Sri Lanka</option>
            <option value="Svalbard and Jan Mayen Islands">
              Svalbard and Jan Mayen Islands
            </option>
            <option value="Sweden">Sweden</option>
            <option value="Switzerland">Switzerland</option>
            <option value="Syrian Arab Republic">Syrian Arab Republic</option>
            <option value="Taiwan">Taiwan</option>
            <option value="Tajikistan">Tajikistan</option>
            <option value="Thailand">Thailand</option>
            <option value="Tonga">Tonga</option>
            <option value="Tunisia">Tunisia</option>
            <option value="Turkey">Turkey</option>
            <option value="Turkmenistan">Turkmenistan</option>
            <option value="Ukraine">Ukraine</option>
            <option value="United Arab Emirates">United Arab Emirates</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="United States">United States</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="phone" className="control-label">
            Telefon
          </label>
          <input
            type="text"
            id="phone"
            className="form-control"
            required
            onChange={handleChange}
            value={formData.phone}
            placeholder={"Telefon"}
          />
        </div>

        <div className="form-group">
          <label htmlFor="submit_by" className="control-label">
            E-post
          </label>
          <input
            type="email"
            id="submit_by"
            className="form-control"
            required
            onChange={handleChange}
            value={formData.submit_by}
            placeholder={"E-post"}
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
            placeholder={"Kommentar"}
          />
        </div>

        <div className="form-group">
          <input
            id="btnSubmit"
            className="btn btn-info"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
};

export default App;
