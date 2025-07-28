declare global {
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        "status-tag": React.DetailedHTMLProps<
          React.HTMLAttributes<HTMLElement>,
          HTMLElement
        > & { status?: string };
      }
    }
  }
}
export {};
