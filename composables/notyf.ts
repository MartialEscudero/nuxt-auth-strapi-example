import { Notyf } from "notyf";
import "notyf/notyf.min.css";

const options = {
  duration: 5000,
};

export const useNotyf = {
  error: (message: string) => {
    if (import.meta.client) {
      const notyf = new Notyf(options);
      notyf.error(message);
    }
  },

  success: (message: string) => {
    if (import.meta.client) {
      const notyf = new Notyf(options);
      notyf.success(message);
    }
  },
};