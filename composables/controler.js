export const showDdMenu = ref(false);
export const togDropdMenu = () => {
  showDdMenu.value = !showDdMenu.value;
};

export const currentRoute = ref(null);
export const loading = ref(false);

import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export const notify = (msg, type) => {
  toast(msg, {
    theme: "colored",
    type: type,
    autoClose: 2000,
    hideProgressBar: true,
    dangerouslyHTMLString: true,
  });
};
