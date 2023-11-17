import * as env from "@/constants/env";
export const fetchConfig = {
  headers: {
    "X-MICROCMS-API-KEY": env.MICROCMS_API_KEY || "",
  },
  baseURL: `https://${env.MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1`,
};
