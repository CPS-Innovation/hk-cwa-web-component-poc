import type { Meta, StoryObj } from "@storybook/react-vite";
import "../components/StatusTagComponent/StatusTagComponent";

const meta: Meta = {
  title: "Components/StatusTag",
  tags: ["autodocs"],
  argTypes: {
    status: {
      defaultValue: "None",
      control: "select",
      options: ["Unused", "Used", "None", "Reclassified", "Renamed", "New"],
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: (args) => {
    return <status-tag {...args}></status-tag>;
  },
  args: {
    status: "Used",
  },
};
