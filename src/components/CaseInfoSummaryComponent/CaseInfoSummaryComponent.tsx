import ReactDOM from "react-dom/client";
import styles from "./CaseInfoSummary.scss?inline";
import {CaseInfoSummary} from "./CaseInfoSummary.tsx";

class CaseInfoSummaryComponent extends HTMLElement {
  private _root: ReactDOM.Root;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._root = ReactDOM.createRoot(this.shadowRoot!);
    const style = document.createElement("style");
    style.textContent = styles;
    this.shadowRoot!.appendChild(style);

    this._root.render(<CaseInfoSummary />);
  }
}

if (!window.customElements.get("case-info-summary-component")) {
  window.customElements.define(
    "case-info-summary-component",
    CaseInfoSummaryComponent
  );
}


