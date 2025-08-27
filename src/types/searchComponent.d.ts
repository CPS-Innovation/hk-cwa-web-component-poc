declare global {
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        "cps-search-component": React.DetailedHTMLProps<
          React.HTMLAttributes<HTMLElement>,
          HTMLElement
        > & { data?: any };
      }
    }
  }
}
export {};
