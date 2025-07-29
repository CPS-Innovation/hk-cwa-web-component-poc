import "./App.css";
import "./components/StatusTagComponent/StatusTagComponent";
import "./components/NotificationBannerComponent/NotificationBannerComponent.tsx";
import "./components/CaseInfoSummaryComponent/CaseInfoSummaryComponent";

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
    </div>
  );
}

export default App;
