import ReactDOM from "react-dom/client";
import styles from "./NotificationBanner.scss?inline";
import { type NotificationBannerProps, type NotificationBannerType, NotificationBanner } from "./NotificationBanner";

class NotificationBannerComponent extends HTMLElement {
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
    window.addEventListener("notificationBanner-show", (e) => {
      const customEvent = e as CustomEvent<NotificationBannerProps>;
      this._root.render(<NotificationBanner {...customEvent.detail} />);
    });
  }

  removeEventListeners() {
    window.removeEventListener("banner-show", this.createEventListeners);
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

    const type = (this.getAttribute("type") as NotificationBannerType);
    const header = this.getAttribute("header");
    const content = this.getAttribute("content");

    if (!type || !header || !content) {
      this._root.render(null);
    } else {
      this._root.render(<NotificationBanner type={type} header={header} content={content}/>);
    }
  }
}

if (!window.customElements.get("notification-banner")) {
  window.customElements.define("notification-banner", NotificationBannerComponent);
}

export default NotificationBannerComponent;
