import { z } from "zod";

export const CaseInfoSchema = z
  .object({
    id: z.number(),
    urn: z.string(),
    leadDefendantFirstNames: z.string(),
    leadDefendantSurname: z.string(),
    numberOfDefendants: z.number(),
  })
  .strict();

export const CaseInfoRequestSchema = z.null();

export const CaseInfoResponseSchema = CaseInfoSchema;

export type CaseInfoType = z.infer<typeof CaseInfoSchema>;
export type CaseInfoRequestType = z.infer<typeof CaseInfoRequestSchema>;
export type CaseInfoResponseType = z.infer<typeof CaseInfoResponseSchema>;
