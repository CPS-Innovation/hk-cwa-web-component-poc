import { StatusTag } from "./StatusTag";
import ReactDOM from "react-dom/client";
import styles from "./StatusTag.scss?inline";

class StatusTagComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const style = document.createElement("style");
    style.textContent = styles;
    this.shadowRoot!.appendChild(style);

    const status = this.getAttribute("status") ?? "not-started";
    const root = ReactDOM.createRoot(this.shadowRoot!);
    root.render(<StatusTag status={status} />);
  }
}

if (!window.customElements.get("status-tag")) {
  window.customElements.define("status-tag", StatusTagComponent);
}

export default StatusTagComponent;
