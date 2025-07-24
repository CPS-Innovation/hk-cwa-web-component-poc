declare global {
  namespace JSX {
    interface IntrinsicElements {
      "banner-component": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          type?: string;
          header?: string;
          content?: string;
        },
        HTMLElement
      >;
    }
  }
}
export {};
