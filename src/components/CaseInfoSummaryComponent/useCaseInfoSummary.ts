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

      const event = new CustomEvent("cps-error", {
        detail: {
          type: "error",
          message: "There was an error fetching case info data"
        },
        bubbles: true,
        composed: true,
      });

      window.dispatchEvent(event);
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

  return {
    data,
    isLoading
  }
}