import StatusTagComponent from "../components/StatusTagComponent/StatusTagComponent";

type Props = { status: string };

export default {
  title: "Components/StatusTag",
  component: StatusTagComponent,
  argTypes: {
    status: { control: "text" },
  },
};

export const Unused = (args: Props) => <status-tag {...args} />;
Unused.args = {
  status: "Unused",
};

export const Used = (args: Props) => <status-tag {...args} />;
Used.args = {
  status: "Used",
};
export const None = (args: Props) => <status-tag {...args} />;
None.args = {
  status: "None",
};

export const Reclassified = (args: Props) => <status-tag {...args} />;
Reclassified.args = {
  status: "Reclassified",
};

export const Renamed = (args: Props) => <status-tag {...args} />;
Renamed.args = {
  status: "Renamed",
};

export const New = (args: Props) => <status-tag {...args} />;
New.args = {
  status: "New",
};
