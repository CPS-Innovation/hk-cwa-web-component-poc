import React from "react";
import "./App.css";
import "./components/StatusTagComponent/StatusTagComponent";
import "./components/NotificationBannerComponent/NotificationBannerComponent.tsx";
import "./components/CaseInfoSummaryComponent/CaseInfoSummaryComponent";

/*CWA imports*/
import { ContextCWA } from "./components/Context/ContextCWA";
import "./components/SearchComponent/CpsSearchComponent.tsx";
import "./components/CaseSearchResults/CpsCaseSearchResults.tsx";

//import a react component just for testing purposes
import { CaseSearchResults } from "./components/CaseSearchResults/CaseSearchResults.tsx";
function App() {
	//sets data to be passed via props and context
	const [data, setData] = React.useState([
		{
			id: 2160797,
			uniqueReferenceNumber: "54KR7689125",
			isCaseCharged: false,
			numberOfDefendants: 1,
			owningUnit: "Hull TU",
			leadDefendantDetails: {
				id: 2783630,
				listOrder: 1,
				firstNames: "Carmine",
				surname: "ZUCCARINI",
				organisationName: "ZUCCARINI",
				dob: "2008-11-01",
				age: "16",
				youth: true,
				type: "Person",
			},
			headlineCharge: {
				charge: null,
				date: null,
				earlyDate: null,
				lateDate: null,
				nextHearingDate: null,
			},
			defendants: [
				{
					id: 2783630,
					listOrder: 1,
					defendantDetails: {
						id: 2783630,
						listOrder: 1,
						firstNames: "Carmine",
						surname: "ZUCCARINI",
						organisationName: "ZUCCARINI",
						dob: "2008-11-01",
						age: "16",
						youth: true,
						type: "Person",
					},
					custodyTimeLimit: {
						expiryDate: null,
						expiryDays: null,
						expiryIndicator: null,
					},
					charges: [
						{
							id: 2258971,
							listOrder: 1,
							isCharged: true,
							nextHearingDate: null,
							earlyDate: null,
							lateDate: null,
							code: "NYC",
							shortDescription: "Not Yet Charged",
							longDescription: "Not Yet Charged",
							custodyTimeLimit: {
								expiryDate: null,
								expiryDays: null,
								expiryIndicator: null,
							},
						},
					],
					proposedCharges: [],
				},
			],
			witnesses: [
				{
					id: 2783632,
					shoulderNumber: null,
					title: null,
					name: "Carmine Victim",
					hasStatements: true,
					listOrder: null,
					child: true,
					expert: false,
					greatestNeed: false,
					prisoner: false,
					interpreter: false,
					vulnerable: false,
					police: false,
					professional: false,
					specialNeeds: false,
					intimidated: false,
					victim: true,
				},
			],
			preChargeDecisionRequests: [
				{
					versionId: 0,
					caseOutline: [
						{
							heading: "Summary of Key Evidence",
							text: "This is a test for CM01",
							textWithCmsMarkup: "This is a test for CM01",
						},
					],
					comments: {
						text: null,
						textWithCmsMarkup: null,
					},
					suspects: [
						{
							surname: "ZUCCARINI",
							firstNames: "Carmine",
							dob: null,
							bailConditions: null,
							bailDate: null,
							remandStatus: null,
							proposedCharges: [
								{
									charge: "PL96002\u00A0Assault",
									earlyDate: "2024-11-25",
									lateDate: null,
									location:
										"20 Newtons Road,\u00A0Newton,\u00A0Surrey,\u00A0SM4 4DN,\u00A0UK",
									category: "SUM",
								},
							],
						},
					],
					id: 141956,
					decisionRequiredBy: "2025-01-26",
					decisionRequested: "2025-01-16",
					presentationFlags: null,
				},
			],
		},
	]);

	return (
		<div className="App">
			{/* <case-info-summary />
			<status-tag status="Renamed" />

			<notification-banner
				type="success"
				header="Success Header"
				content="Success Content"
			/> */}

			<ContextCWA.Provider value={{ data } as any}>
				<>
					{/*just for testing purposes
				 	shows a react child<CaseSearchResults /> workin correctly with useContext*/}
					{/* <CaseSearchResults /> */}

					<cps-search-component />
					<cps-case-search-results data={JSON.stringify(data)} />
				</>
			</ContextCWA.Provider>
		</div>
	);
}

export default App;
