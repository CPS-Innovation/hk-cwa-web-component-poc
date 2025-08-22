import "./App.css";
import "./components/StatusTagComponent/StatusTagComponent";
import "./components/NotificationBannerComponent/NotificationBannerComponent.tsx";
import "./components/CaseInfoSummaryComponent/CaseInfoSummaryComponent";
import "./components/SearchComponent/WebSearchComponent.tsx"

import "./govuk-frontend.min.css";

function App() {
  return (
    <div className="App">
      <case-info-summary />

      <status-tag status="Renamed" />

      <notification-banner
        type="success"
        header="Success Header"
        content="Success Content"
      />

      <web-search-component />
    </div>
  );
}

export default App;
