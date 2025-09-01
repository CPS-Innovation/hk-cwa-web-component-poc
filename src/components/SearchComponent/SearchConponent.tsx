import React from "react";
// import { useQueryParamsState } from "./assets/useQueryParamsState";
import type { TCaseSearchQueryParams } from "./TCaseSearchQueryParams";
import * as GDS from "govuk-react-jsx";
import { ErrorSummary } from "./assets/components/ErrorSummary";
import { Hint } from "./assets/components/Hint";
import { Input } from "./assets/components/Input";
import { Button } from "./assets/components/Button";
import * as styles from "./SearchConponent.scss?inline";
import { useRef } from "react";
// import { useSearchInputLogic } from "./assets/useSearchInputLogic.ts";

// import { PageContentWrapper } from "../../../../common/presentation/components";
// import {
//   useAppInsightsTrackEvent,
//   useAppInsightsTrackPageView,
// } from "../../../../common/hooks/useAppInsightsTracks";
export const path = "/case-search";

const validationFailMessage = "Enter a URN in the right format";

const SearchComponent = (props: any) => {
const inputRef = useRef<HTMLInputElement>(null);

	const onCustomEventHandler = (e: any) => new CustomEvent("handleCustomEvent", { detail: e });

	// // useAppInsightsTrackPageView("Case Search Page");
	// // const trackEvent = useAppInsightsTrackEvent();	
	// const {
	// 	urn: urnFromSearchParams,
	// 	setParams,
	// 	search,
	// } = useQueryParamsState<CaseSearchQueryParams>();

	// const { handleChange, handleKeyPress, handleSubmit, isError, urn } =
	// 	useSearchInputLogic({ urnFromSearchParams, setParams, search });

	const handleChange = (arg: string) => {
		console.log("handleChange: ", arg);
	};

	const handleSubmit = () => {
		console.log("handleSubmit: ");
		document.dispatchEvent(onCustomEventHandler(inputRef.current?.value));
	};

	const handleKeyPress = () => {
		console.log("handleKeyPress: ");
	};

	const handleSearch = () => {
		// trackEvent("Search URN", { page: "case-search", searchParameter: urn });
		handleSubmit();
	};

	return (
		// <PageContentWrapper>
		<div className="govuk-grid-row">
			<div className="govuk-grid-column-two-thirds">
				<h1 className="govuk-heading-xl">
					Find a case
					<Hint className="govuk-hint">
						Search and review a CPS case in England and Wales
					</Hint>
				</h1>

				<div className="govuk-form-group">
					<Input
						id="urn"
						name="urn"
						onChange={handleChange}
						onKeyPress={handleKeyPress}
						ref={inputRef}
						// value={""}
						data-testid="input-search-urn"
						// errorMessage={
						// isError
						//   ? {
						//       children: (
						//         <span data-testid="input-search-urn-error">
						//           {validationFailMessage}
						//         </span>
						//       ),
						//     }
						//   : undefined
						// }
						label={{
							className: "govuk-label--s",
							children: "Search for a case URN",
						}}
					/>
				</div>
				<Button onClick={handleSearch} data-testid="button-search">
					Search
				</Button>
			</div>
		</div>
		// </PageContentWrapper>
	);
};

export { SearchComponent };
