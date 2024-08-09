import toast, { ToastOptions } from "react-hot-toast";

export const successLogger = (message: string, optParams?: ToastOptions) =>
  toast.success(message, {
    position: "bottom-right",
    duration: 3000,
    ...optParams,
  });

export const errorLogger = (message: string, optParams?: ToastOptions) =>
  toast.error(message, {
    position: "bottom-right",
    duration: 3000,
    ...optParams,
  });
