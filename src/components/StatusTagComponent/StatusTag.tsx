type Props = { status: string };

export const StatusTag = ({ status }: Props) => {
  let className = "govuk-tag";

  switch (status) {
    case "Unused":
      className += " govuk-tag--yellow";
      break;
    case "Used":
      className += " govuk-tag--blue";
      break;
    case "None":
      className += " govuk-tag--grey";
      break;
    case "Reclassified":
      className += " govuk-tag--purple reclassified-tag";
      break;
    case "Renamed":
      className += " govuk-tag--green renamed-tag";
      break;
    case "New":
      className += " govuk-tag--blue new-tag";
      break;
    default:
      className += " govuk-tag--grey";
  }

  return <span className={className}>{status}</span>;
};
