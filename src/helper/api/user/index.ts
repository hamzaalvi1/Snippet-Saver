const MODULE_PREFIX = "user";

import { FetchAPI } from "@/utils/fetch.utils";
import { UserResponseType } from "./responseType";

const routes = {
  ME: `${MODULE_PREFIX}/me`,
};

export const getMe = () =>
  new FetchAPI(routes.ME, "GET").send<UserResponseType>();
