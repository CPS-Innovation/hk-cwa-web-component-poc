import type { CaseInfoType } from "../../schemas/caseInfo";

type Props = { caseInfo?: CaseInfoType };

export const CaseInfoSummary = ({ caseInfo }: Props) => {
  if (!caseInfo) {
    return null;
  }

  const surname = caseInfo?.leadDefendantSurname?.toString().toUpperCase();
  const firstNames = caseInfo?.leadDefendantFirstNames
    ? `, ${caseInfo?.leadDefendantFirstNames}`
    : "";
  const plusNumber =
    caseInfo?.numberOfDefendants > 1
      ? ` +${caseInfo?.numberOfDefendants - 1}`
      : "";

  const caseInfoName = `${surname}${firstNames}${plusNumber}`;

  return (
    <div className="govuk-grid-row case-info-details">
      <div className="govuk-grid-row">
        {caseInfo ? (
          <>
            <h2 className="govuk-heading-m case-info-name">{caseInfoName}</h2>
            <p className="govuk-body">{caseInfo?.urn}</p>
          </>
        ) : (
          <p className="govuk-body">Please wait...</p>
        )}
      </div>

      <div className="case-info-links">
        <span className="case-info-links__item">
          <a
            href={`${import.meta.env.VITE_CWA_URL}/polaris-ui/case-details/${
              caseInfo?.urn
            }/${caseInfo?.id}`}
            className="govuk-link"
          >
            Further housekeeping
          </a>
        </span>
      </div>
    </div>
  );
};
