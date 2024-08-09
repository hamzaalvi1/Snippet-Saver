import { ZodError } from "zod";
import { AxiosError } from "axios";

export interface ErrorResponseData {
  message?: string;
}

export const zodError = (error: ZodError) => {
  let errors: string[] = [];
  let { fieldErrors, formErrors } = error.flatten();
  if (formErrors.length > 0) {
    errors = [...formErrors];
  }

  if (Object.keys(fieldErrors).length > 0) {
    for (let errorField in fieldErrors) {
      let errorMessage = `${errorField}: ${fieldErrors[errorField]}`;
      errors.push(errorMessage);
    }
  }

  return errors[0];
};

export const axiosError = (error: unknown) => {
  const { response } = error as AxiosError<ErrorResponseData>;
  const message = response?.data?.message || "An unknown error occurred.";
  return { response, message };
};
