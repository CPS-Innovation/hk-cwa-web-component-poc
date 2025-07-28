import type { Meta, StoryObj } from "@storybook/react-vite";
import type { CaseInfoResponseType } from "../schemas/caseInfo.ts";
import "../components/CaseInfoSummaryComponent/CaseInfoSummaryComponent";

import { http, HttpResponse, delay } from 'msw';

const meta: Meta = {
  title: "Components/CaseInfoSummary",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj;

const testData: CaseInfoResponseType = {
  id: 12345,
  urn: '123456',
  leadDefendantFirstNames: 'James',
  leadDefendantSurname: 'Chapman',
  numberOfDefendants: 1
}

export const Default: Story = {
  render: () => <case-info-summary-component />,
  parameters: {
    msw: {
      handlers: [
        http.get('https://localhost:7104/api/case-info', async () => {
          await delay(2000);
          return HttpResponse.json(testData);
        }),
      ]
    }
  }
}
