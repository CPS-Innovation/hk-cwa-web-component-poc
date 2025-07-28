// @ts-nocheck
import "./App.css";
import "./components/StatusTagComponent/StatusTagComponent";
import "./components/BannerComponent/BannerComponent";
import "./components/CaseInfoSummaryComponent/CaseInfoSummaryComponent";

function App() {
  return (
    <div className="App">
      <case-info-summary-component />

      <status-tag status="Renamed" />

      <banner-component
        type="success"
        header="Success Header"
        content="Success Content"
      />
    </div>
  );
}

export default App;
