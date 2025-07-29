declare global {
    namespace React {
        namespace JSX {
            interface IntrinsicElements {
                "notification-banner": React.DetailedHTMLProps<
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
}
export {};
