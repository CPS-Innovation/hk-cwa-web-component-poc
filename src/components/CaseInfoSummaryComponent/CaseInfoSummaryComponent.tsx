import { CaseInfoSummary } from "./CaseInfoSummary";
import ReactDOM from "react-dom/client";
import { type CaseInfoType } from "../../schemas/caseInfo";
import styles from "./CaseInfoSummary.scss?inline";

class CaseInfoSummaryComponent extends HTMLElement {
  private _root: ReactDOM.Root;
  private _data?: CaseInfoType;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._root = ReactDOM.createRoot(this.shadowRoot!);
    const style = document.createElement("style");
    style.textContent = styles;
    this.shadowRoot!.appendChild(style);
  }

  set data(value: CaseInfoType) {
    this._root.render(<CaseInfoSummary caseInfo={value} />);
  }

  get data(): CaseInfoType | undefined {
    return this._data;
  }
}

if (!window.customElements.get("case-info-summary-component")) {
  window.customElements.define(
    "case-info-summary-component",
    CaseInfoSummaryComponent
  );
}

export default CaseInfoSummaryComponent;
