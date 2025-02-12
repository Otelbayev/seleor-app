import { QueryProps } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import qs from "query-string";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("uz-UZ", {
    style: "currency",
    currency: "UZS",
  }).format(price);
};

export const formUrlQuery = ({ key, params, value }: QueryProps) => {
  const currentUrl = qs.parse(params);

  currentUrl[key] = value!;

  return qs.stringifyUrl(
    { url: window.location.pathname, query: currentUrl },
    { skipNull: true }
  );
};

export const removeUrlQuery = ({ params, key }: QueryProps) => {
  const currentUrl = qs.parse(params);

  delete currentUrl[key];

  return qs.stringifyUrl(
    { url: window.location.pathname, query: currentUrl },
    { skipNull: true }
  );
};
