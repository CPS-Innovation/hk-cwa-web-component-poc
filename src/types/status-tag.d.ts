declare global {
  namespace JSX {
    interface IntrinsicElements {
      "status-tag": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          status?: string;
        },
        HTMLElement
      >;
    }
  }
}
export {};
