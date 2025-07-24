// @ts-nocheck ignore type checking for this file
import { StatusTag } from "../components/StatusTagComponent/StatusTag";

export default {
  title: "Components/StatusTag",
  component: <StatusTag />,
  argTypes: {
    status: { control: "text" },
  },
};

export const Unused = (args) => <status-tag {...args} />;
Unused.args = {
  status: "Unused",
};

export const Used = (args) => <status-tag {...args} />;
Used.args = {
  status: "Used",
};
export const None = (args) => <status-tag {...args} />;
None.args = {
  status: "None",
};

export const Reclassified = (args) => <status-tag {...args} />;
Reclassified.args = {
  status: "Reclassified",
};

export const Renamed = (args) => <status-tag {...args} />;
Renamed.args = {
  status: "Renamed",
};

export const New = (args) => <status-tag {...args} />;
New.args = {
  status: "New",
};
