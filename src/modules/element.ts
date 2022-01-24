import { UserModule } from "~/types";

import ElementPlus from "element-plus";
import "element-plus/theme-chalk/index.css";

export const install: UserModule = ({ app }) => {
  app.use(ElementPlus);
};
