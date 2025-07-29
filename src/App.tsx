// @ts-nocheck
import "./App.css";
import "./components/StatusTagComponent/StatusTagComponent";
import "./components/BannerComponent/BannerComponent";
import "./components/CaseInfoSummaryComponent/CaseInfoSummaryComponent";
import "./components/LinkButton/LinkButton"

function App() {
  return (
    <div className="App">
      {/* <case-info-summary-component
        data={{
          id: 2161796,
          urn: "16XL9132025",
          leadDefendantFirstNames: "Homer",
          leadDefendantSurname: "SIMPSON",
          numberOfDefendants: 2,
          unitName: "Hull TU",
        }}
      /> */}

      <status-tag status="Renamed" />
{/*       
      <banner-component
        type="success"
        header="Success Header"
        content="Success Content"
      ></banner-component> */}

      <link-button text="This is a text!!!" />
    </div>
  );
}

export default App;
