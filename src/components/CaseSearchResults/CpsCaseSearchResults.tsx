import React from "react";
import ReactDOM from "react-dom/client";
import styles from "./CaseSearchResults.scss?inline";
import { Page } from "./CaseSearchResults";

class CaseSearchResultsComponent extends HTMLElement {
	private _root: ReactDOM.Root;

	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this._root = ReactDOM.createRoot(this.shadowRoot!);
		const style = document.createElement("style");
		style.textContent = styles;
		this.shadowRoot!.appendChild(style);

		this._root.render(<Page />);
	}
}

if (!window.customElements.get("cps-case-search-results")) {
	window.customElements.define(
		"cps-case-search-results",
		CaseSearchResultsComponent
	);
}
