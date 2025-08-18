import { KeyDetails } from '../../app/common/components/keydetails/KeyDetails';
import { Component, Prop, State, h } from '@stencil/core';
// import { TestComponent } from '../../app/common/components/keydetails/Test';

@Component({
  tag: 'cps-key-details',
  styleUrl: 'cps-key-details.css',
  // assetsDirs: ['../../../../node_modules/govuk-frontend/govuk/assets/images/'],
  shadow: true,
})

export class CPSKeyDetails {
  @Prop() name: string = 'Key Details page';
  @State() times: number = 100;
  constructor() {
    this.times += 100;
    console.log('consructor');
  }

  render() {
    return (
      <div>
        this is {this.name} {this.times} page
        {/* <TestComponent /> */}
        <KeyDetails
          // handleOpenPdf={() => {
          //   // handleOpenPdf({
          //   //   documentId: 1234234,// dacDocumentId,
          //   //   mode: "read",
          //   // });
          // }}
          caseDetails={{
            id: 2160797,
            uniqueReferenceNumber: '54KR7689125',
            isCaseCharged: false,
            numberOfDefendants: 1,
            owningUnit: 'Hull TU',
            leadDefendantDetails: {
              id: 2783630,
              listOrder: 1,
              firstNames: 'Carmine',
              surname: 'ZUCCARINI',
              organisationName: 'ZUCCARINI',
              dob: '2008-11-01',
              youth: true,
              type: 'Person',
            },
            headlineCharge: {
              charge: null,
              date: null,
              // earlyDate: null,
              // lateDate": null,
              nextHearingDate: null,
            },
            defendants: [
              {
                // "id": 2783630,
                // "listOrder": 1,
                defendantDetails: {
                  id: 2783630,
                  listOrder: 1,
                  firstNames: 'Carmine',
                  surname: 'ZUCCARINI',
                  organisationName: 'ZUCCARINI',
                  dob: '2008-11-01',
                  // "age": "16",
                  youth: true,
                  type: 'Person',
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
                    code: 'NYC',
                    shortDescription: 'Not Yet Charged',
                    longDescription: 'Not Yet Charged',
                    custodyTimeLimit: {
                      expiryDate: null,
                      expiryDays: null,
                      expiryIndicator: null,
                    },
                  },
                ],
                // "proposedCharges": []
              },
            ],
            witnesses: [
              {
                id: 2783632,
                shoulderNumber: null,
                title: null,
                name: 'Carmine Victim',
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
          }}

          isMultipleDefendantsOrCharges={false}
          dacDocumentId={'1234234'}
        >
          cps-key-details web component
        </KeyDetails>
      </div>
    );
  }
}
