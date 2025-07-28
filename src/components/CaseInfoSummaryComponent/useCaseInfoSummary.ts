import { useEffect, useState } from "react";
import axios from "axios";

import type { CaseInfoType } from "../../schemas/caseInfo";

export const useCaseInfoSummary = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<CaseInfoType>();

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios<CaseInfoType>({
        url: 'https://localhost:7104/api/case-info',
        method: 'get',
        withCredentials: true,
      });

      setData(response?.data);
      setIsLoading(false);
    } catch (error) {
      console.log({ hookError: error });
      setIsLoading(false);

      window.dispatchEvent(new CustomEvent('caseInfoSummary-isError', {
        bubbles: true,
        composed: true,
      }));

      window.dispatchEvent(new CustomEvent("cps-error", {
        detail: {
          type: "error",
          message: "There was an error fetching case info data"
        },
        bubbles: true,
        composed: true,
      }));
    }
  }

  const registerEvents = () => {
    window.addEventListener('caseInfoSummary-refresh', fetchData);
  }

  const deregisterEvents = () => {
    window.removeEventListener('caseInfoSummary-refresh', fetchData);
  }

  useEffect(() => {
    registerEvents();
    setIsLoading(true);
    fetchData();

    return deregisterEvents
  }, []);

  useEffect(() => {
    window.dispatchEvent(new CustomEvent(isLoading ? 'caseInfoSummary-isLoading' : 'caseInfoSummary-isLoaded', {
      bubbles: true,
      composed: true,
    }));
  }, [isLoading])

  return {
    data,
    isLoading
  }
}