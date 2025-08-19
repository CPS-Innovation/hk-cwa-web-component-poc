/// <reference types="vite/client" />
import { h } from '@stencil/core';
import React, { useEffect } from 'react';
import { CommonDateTimeFormats, formatDate, getAgeFromIsoDate } from '../../utils/dates';
import { Tag } from '../../../common/components/Tag';
import { CaseDetails, Defendant, DefendantDetails } from '../../types/CaseDetails';
import { LinkButton } from '../LinkButton';
// import classes from "./index.module.scss";

export const KeyDetails: React.FC<{
  caseDetails?: any;
  isMultipleDefendantsOrCharges?: boolean;
  handleOpenPdf?: () => void;
  dacDocumentId?: string;
}> = ({ caseDetails, isMultipleDefendantsOrCharges, dacDocumentId }) => {

    const getOrderedDefendantsList = (caseDetails: CaseDetails) => {    
    const  defendants = caseDetails?.defendants;
    defendants?.sort((a, b) => a.defendantDetails.listOrder - b.defendantDetails.listOrder);
    return defendants;
  };

  const getDefendantName = (defendantDetail: DefendantDetails | null) => {
    if (!defendantDetail) return '';
    if (defendantDetail.type === 'Organisation') {
      return defendantDetail.organisationName;
    }
    return `${defendantDetail.surname}, ${defendantDetail.firstNames}`;
  };

  const getDefendantNameText = (isMultipleDefendantsOrCharges: boolean, defendantsList: Defendant[] = []) => {
    if (!isMultipleDefendantsOrCharges) {
      return getDefendantName(caseDetails?.leadDefendantDetails);
    }
    return defendantsList.reduce((acc, item) => {
      const { defendantDetails } = item;
      if (!acc) return `${getDefendantName(defendantDetails)}`;
      return `${acc}; ${getDefendantName(defendantDetails)}`;
    }, '');
  };

  const getDOBText = () => {
    if (isMultipleDefendantsOrCharges || !caseDetails?.leadDefendantDetails || caseDetails?.leadDefendantDetails?.type === 'Organisation') {
      return '';
    }
    return (
      <>
        DOB: <span class={'dobValue'}>{formatDate(caseDetails?.leadDefendantDetails.dob, CommonDateTimeFormats.ShortDateTextMonth)}</span>, Age:{' '}
        <span class={'ageValue'}>{getAgeFromIsoDate(caseDetails?.leadDefendantDetails.dob)}</span>
      </>
    );
  };

  const isYouthOffender = () => {
    if (!isMultipleDefendantsOrCharges && caseDetails?.leadDefendantDetails?.youth) return true;
    return false;
  };

  const defendantsList = getOrderedDefendantsList(caseDetails);

  {
    console.log(isYouthOffender(), isMultipleDefendantsOrCharges, dacDocumentId);
  }

  return (
    <div class={'keyDetails'} data-testid="key-details">
      {
        <>
          {getDefendantNameText(isMultipleDefendantsOrCharges, defendantsList) && (
            <h1 class={`govuk-heading-m ${'defendantName'}`} data-testid="defendant-name">
              {getDefendantNameText(isMultipleDefendantsOrCharges, defendantsList)}
            </h1>
          )}
          <h2 class={`govuk-heading-s ${'uniqueReferenceNumber'}`} data-testid="txt-case-urn">
            {caseDetails?.uniqueReferenceNumber}
          </h2>
          {getDOBText() && (
            <h2 class={`govuk-heading-s ${'defendantDOB'}`} data-testid="txt-defendant-DOB">
              {getDOBText()}
            </h2>
          )}
          {isYouthOffender() && <p>youth offender</p>}

          {Tag && isYouthOffender() && <Tag gdsTagColour="blue"> Youth offender!</Tag>}
          {console.log('keydetails page')}
          {/* {console.log(isYouthOffender(), isMultipleDefendantsOrCharges, dacDocumentId)} */}
          {dacDocumentId && (
            <></>
            // <LinkButton
            //   dataTestId="link-defendant-details"
            //   className={'defendantDetailsLink'}
            //   // onClick={handleOpenPdf}
            //   onClick={() => alert('clicked')}
            //   children={'fld'}
            // >
            //   <p>static text</p>
            //   {/* {`View ${defendantsList.length} ${
            //     defendantsList.length > 1 ? "defendants" : "defendant"
            //   } and charges`} */}
            // </LinkButton>
          )}
        </>
      }
    </div>
  );
};
