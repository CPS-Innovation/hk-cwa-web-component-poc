import type { Meta, StoryObj } from "@storybook/react-vite";
import type { CaseInfoResponseType } from "../schemas/caseInfo.ts";
import "../components/CaseInfoSummaryComponent/CaseInfoSummaryComponent";

import { http, HttpResponse, delay } from "msw";

const meta: Meta = {
  title: "Components/CaseInfoSummary",
  tags: ["autodocs"],
  argTypes: {
    'caseInfoSummary-isLoading': {
      description: 'Emitted when case info data is being fetched',
      table: {
        category: 'events',
        subcategory: 'Emitted'
      }
    },
    'caseInfoSummary-isError': {
      description: 'Emitted when there has been an error fetch the case info data',
      table: {
        category: 'events',
        subcategory: 'Emitted'
      }
    },
    'caseInfoSummary-refresh': {
      description: 'Triggers a refresh of the case info data',
      table: {
        category: 'events',
        subcategory: 'Listeners'
      }
    }
  }
};

export default meta;

type Story = StoryObj;

const testData: CaseInfoResponseType = {
  id: 12345,
  urn: "123456",
  leadDefendantFirstNames: "Joe",
  leadDefendantSurname: "Bloggs",
  numberOfDefendants: 1,
};

export const Default: Story = () => <case-info-summary />
Default.parameters = {
  msw: {
    handlers: [
      http.get('https://localhost:7104/api/case-info', async () => {
        await delay(2000);
        return HttpResponse.json(testData);
      }),
    ]
  }
}
