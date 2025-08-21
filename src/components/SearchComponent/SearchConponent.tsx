import React from "react";
// import { useQueryParamsState } from "./assets/useQueryParamsState";
import type { CaseSearchQueryParams } from "./TCaseSearchQueryParams";
import * as GDS from "govuk-react-jsx";
import { ErrorSummary } from "./assets/components/ErrorSummary";
import { Hint } from "./assets/components/Hint";
import { Input } from "./assets/components/Input";
import { Button } from "./assets/components/Button";

import { useSearchInputLogic } from "./assets/useSearchInputLogic.ts";
// import classes from "./assets/components/index.module.scss";
// import { PageContentWrapper } from "../../../../common/presentation/components";
// import {
//   useAppInsightsTrackEvent,
//   useAppInsightsTrackPageView,
// } from "../../../../common/hooks/useAppInsightsTracks";
export const path = "/case-search";

const validationFailMessage = "Enter a URN in the right format";

const SearchComponent: React.FC = () => {
	// // useAppInsightsTrackPageView("Case Search Page");
	// // const trackEvent = useAppInsightsTrackEvent();
	// const {
	// 	urn: urnFromSearchParams,
	// 	setParams,
	// 	search,
	// } = useQueryParamsState<CaseSearchQueryParams>();

	// const { handleChange, handleKeyPress, handleSubmit, isError, urn } =
	// 	useSearchInputLogic({ urnFromSearchParams, setParams, search });

	const handleSearch = (val: string) => {
		// trackEvent("Search URN", { page: "case-search", searchParameter: urn });
    // alert(val)
		// handleSubmit();
	};

	return (
		// <PageContentWrapper>
		// <div>WebSearchComponent</div>
		<div className="govuk-grid-row">
		  <div className="govuk-grid-column-two-thirds">
		    {/* {isError && (
		      <ErrorSummary
		        errorList={[
		          {
		            reactListKey: "1",
		            children: validationFailMessage,
		            href: "#urn",
		            "data-testid": "link-validation-urn",
		          },
		        ]}
		      />
		    )} */}

		    <h1 className="govuk-heading-xl">
		      <Hint>
		        Search and review a CPS case in England and Wales
		      </Hint>
		    </h1>

		    <div className="govuk-form-group">
		      <Input
		        id="urn"
		        name="urn"
            onChange={()=>alert('f')}
		        //onChange={()=>handleChange()}
		        // onKeyPress={handleKeyPress}
		        value={'urn'}
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
