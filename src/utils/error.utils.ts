import { ZodError } from "zod";

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
