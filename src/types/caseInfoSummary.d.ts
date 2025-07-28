declare global {
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        "case-info-summary": React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLElement> & {
          caseInfo?: {
            id?: number;
            urn?: string;
            leadDefendantFirstNames?: string;
            leadDefendantSurname?: string;
            numberOfDefendants?: number;
          };
        },
            HTMLElement
        >;
      }
    }
  }
}
export {};
