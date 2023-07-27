import {ValidationError} from "joi";

export const randomID = () => {
  return `id-${Math.floor(Math.random() * 1000)}-${Math.floor(
    Math.random() * 1000
  )}`;
};

export const formErrorHandler = (error: ValidationError) => {
  const transformedErrors: {[key: string | number]: string} = {};

  error.details.forEach((err) => {
    transformedErrors[err.path[0]] = err.message.replace(/"/g, "");
  });

  return transformedErrors;
};
