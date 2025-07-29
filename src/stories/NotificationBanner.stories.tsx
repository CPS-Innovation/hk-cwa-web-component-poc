import type { Meta, StoryObj } from "@storybook/react-vite";

import "../components/NotificationBannerComponent/NotificationBannerComponent"
import { type NotificationBannerType } from "../components/NotificationBannerComponent/NotificationBanner";

const meta: Meta = {
    title: "Components/NotificationBanner",
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
    type: NotificationBannerType;
    header: string;
    content?: string;
};

type Story = StoryObj<Args>;

export const Information: Story = {
    render: (args) => (
        <notification-banner {...args} />
    ),
    args: {
        type: "important",
        header: "Important",
        content: "Auto reclassification ran successfully but no materials found to reclassify.",
    },
};

export const Success: Story = {
    render: (args) => (
        <notification-banner {...args} />
    ),
    args: {
        type: "success",
        header: "Success",
        content: "Material reclassified successfully.",
    },
};

export const Error: Story = {
    render: (args) => (
        <notification-banner {...args} />
    ),
    args: {
        type: "error",
        header: "There was a problem",
        content: "The server returned an error when attempting to reclassify the material.",
    },
};