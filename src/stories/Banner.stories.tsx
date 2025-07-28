import type { Meta, StoryObj } from "@storybook/react-vite";

import "../components/BannerComponent/BannerComponent.tsx"

const meta: Meta = {
    title: "Components/Banner",
    tags: ["autodocs"],
    argTypes: {
        type: {
            control: { type: "select" },
            options: ["success", "important", "error"],
        },
        header: { control: "text" },
        content: { control: "text" },
    },
};

export default meta;

type Args = {
    type: "success" | "important" | "error";
    header: string;
    content?: string;
};

type Story = StoryObj<Args>;

export const Default: Story = {
    render: (args) => (
        <banner-component
            type={args.type}
            header={args.header}
            content={args.content}
        ></banner-component>
    ),
    args: {
        type: "success",
        header: "Case submitted successfully",
        content: "You can view the case summary on the next screen.",
    },
};
