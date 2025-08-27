import ReactDOM from "react-dom/client";
import styles from "./SearchConponent.scss?inline";
import { SearchComponent } from "./SearchConponent";

class WebSearchComponentComponent extends HTMLElement {
	private _root: ReactDOM.Root;

	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this._root = ReactDOM.createRoot(this.shadowRoot!);
		const style = document.createElement("style");
		style.textContent = styles;
		this.shadowRoot!.appendChild(style);

		this._root.render(<SearchComponent />);
	}
}

if (!window.customElements.get("web-earch-component")) {
	window.customElements.define(
		"cps-search-component",
		WebSearchComponentComponent
	);
}
