// // import {
// //   BackLink,
// //   Button,
// //   ErrorSummary,
// //   hint,
// //   Input,
// //   Tag,
// // } from "../../../../common/presentation/components";
// import { Hint } from "../SearchComponent/assets/components/Hint";
// import { Input } from "../SearchComponent/assets/components/Input";
// import { Button } from "../SearchComponent/assets/components/Button";

// // import { CaseSearchQueryParams } from "../../types/CaseSearchQueryParams";
// // import { useQueryParamsState } from "../../../../common/hooks/useQueryParamsState";

// // import { useSearchInputLogic } from "../../hooks/useSearchInputLogic";
// import { generatePath, Link } from "react-router-dom";
// // import { path as casePath } from "../case-details";
// // import {
// //   formatDate,
// //   CommonDateTimeFormats,
// // } from "../../../../common/utils/dates";
// // import { BackLinkingPageProps } from "../../../../common/presentation/types/BackLinkingPageProps";
// // import { PageContentWrapper } from "../../../../common/presentation/components";
// // import { WaitPage } from "../../../../common/presentation/components";
// // import { useApi } from "../../../../common/hooks/useApi";
// // import { searchUrn } from "../../api/gateway-api";
// // import { CaseSearchResult } from "../../domain/gateway/CaseSearchResult";

// // import classes from "./index.module.scss";
// // import { SectionBreak } from "../../../../common/presentation/components";
// // import {
// //   useAppInsightsTrackEvent,
// //   useAppInsightsTrackPageView,
// // } from "../../../../common/hooks/useAppInsightsTracks";
// export const path = "/case-search-results";

// // const validationFailMessage = "Enter a URN in the right format";

// // type Props = BackLinkingPageProps;

// // const CaseSearchResult: React.FC<Props> = ({ backLinkProps }) => {
// const CaseSearchResults = () => {
// 	// useAppInsightsTrackPageView("Case Search Result Page");
// 	// const trackEvent = useAppInsightsTrackEvent();

// 	// const getDefendantNameText = (item: CaseSearchResult) => {
// 	//   if (!item.leadDefendantDetails) {
// 	//     return null;
// 	//   }
// 	//   let titleString =
// 	//     item.leadDefendantDetails.type === "Organisation"
// 	//       ? item.leadDefendantDetails.organisationName
// 	//       : `${item.leadDefendantDetails.surname}, ${item.leadDefendantDetails.firstNames}`;

// 	//   if (item.numberOfDefendants > 1) {
// 	//     titleString = `${titleString} and others`;
// 	//   }
// 	//   return titleString;
// 	// };
// 	// const {
// 	//   urn: urnFromSearchParams,
// 	//   setParams,
// 	//   search,
// 	// } = useQueryParamsState<CaseSearchQueryParams>();

// 	// const { handleChange, handleKeyPress, handleSubmit, isError, urn } =
// 	//   useSearchInputLogic({ urnFromSearchParams, setParams, search });

// 	// const linkParams = new URLSearchParams(search);
// 	// linkParams.delete("urn");

// 	// const state = useApi(searchUrn, [urnFromSearchParams])!;

// 	// if (state.status === "loading" || state.status === "initial") {
// 	//   return <WaitPage />;
// 	// }

// 	// if (state.status === "failed") {
// 	//   throw state.error;
// 	// }

// 	// const { data } = state;
// 	const data =  ["01LX1000921", "42MZ7213221", "12AB1111111"];

// 	const handleSearch = () => {
// 	  // trackEvent("Search URN", {
// 	  //   page: "case-search-results",
// 	  //   searchParameter: urn,
// 	  // });
// 	  handleSubmit();
// 	};

// 	// remove this method after testing
// 	//start here
// 	const handleChange = (arg: string) => {
// 		console.log("handleChange: ", arg);
// 	};

// 	const handleSubmit = () => {
// 		console.log("handleSubmit: ");
// 	};

// 	const handleKeyPress = () => {
// 		console.log("handleKeyPress: ");
// 	};

// 	// end here

// 	return (

// 			<div className="govuk-grid-row">
// 				<div className="govuk-grid-column-two-thirds">
// fdfhgd
// 				</div>
// 			</div>
// 	)
// 	}

// export { CaseSearchResults };

import React, { useContext, useEffect, useState } from "react";
import { ContextCWA } from "../Context/ContextCWA";

const CaseSearchResults = ({ data }: any) => {
	const value = useContext(ContextCWA) as string;
	const objData = JSON.parse(data);
	const [urn, setUrn] = useState<string>("");
	const [res, setRes] = useState<any>();

	document.addEventListener("handleCustomEvent", (e: any): void => {
		console.log("Custom event received in CaseSearchResults: ", e?.detail);
		setUrn(e?.detail);
	});

	useEffect(() => {
		const res = () => {
			let r = objData.find(
				(el: any) => el.uniqueReferenceNumber.toString() === urn?.toString()
			);
			console.log("r ", r);
			r = r ? JSON.stringify(r) : "No case found";
			setRes(r);
		};
		res();
		// console.log("res ", res());
	}, [urn]);

	return (
		<div style={{ color: "#000" }}>
			{objData.map((item: any, index: number) => (
				<p key={index}>
					urn: {urn} res: {res}
				</p>
			))}
			{/* {`Case Search Results Component via prop: ${data}, URN: ${urn}`} */}
		</div>
	);
};

export { CaseSearchResults };
