declare global {
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        "cps-case-search-results": React.DetailedHTMLProps<
          React.HTMLAttributes<HTMLElement>,
          HTMLElement
        > & { data?: any };
      }
    }
  }
}
export {};