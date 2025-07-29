import { Banner } from "./Banner";
import ReactDOM from "react-dom/client";
import styles from "./Banner.scss?inline";
import { type BannerProps, type BannerType } from "./Banner";

class BannerComponent extends HTMLElement {
  private _root: ReactDOM.Root;

  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this._root = ReactDOM.createRoot(this.shadowRoot!);

    this.createEventListeners();

    const style = document.createElement("style");
    style.textContent = styles;

    this.shadowRoot!.appendChild(style);
  }

  createEventListeners() {
    window.addEventListener("showBanner", (e) => {
      const customEvent = e as CustomEvent<BannerProps>;
      console.log("Typed payload:", customEvent.detail); // Now properly typed
      this._root.render(<Banner {...customEvent.detail} />);
    });
  }

  removeEventListeners() {
    window.removeEventListener("showBanner", this.createEventListeners);
  }

  destroy() {
    this._root.unmount();
    this.shadowRoot!.innerHTML = "";
    this.removeEventListeners();
  }

  connectedCallback() {
    const style = document.createElement("style");
    style.textContent = styles;
    this.shadowRoot!.appendChild(style);

    const type = (this.getAttribute("type") as BannerType);
    const header = this.getAttribute("header");
    const content = this.getAttribute("content");

    if (!type || !header || !content) {
      this._root.render(null);
    } else {
      this._root.render(<Banner type={type} header={header} content={content}/>);
    }
  }
}

if (!window.customElements.get("banner-component")) {
  window.customElements.define("banner-component", BannerComponent);
}

export default BannerComponent;
