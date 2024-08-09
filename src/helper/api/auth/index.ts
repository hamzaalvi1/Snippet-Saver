const MODULE_PREFIX = "auth";

import { FetchAPI } from "@/utils/fetch.utils";
import { AuthResponseType } from "./responseType";
import { LoginIn, SignUp as SignUpType } from "@/types";

const routes = {
  REGISTER: `${MODULE_PREFIX}/signup`,
  LOGIN: `${MODULE_PREFIX}/login`,
};

const Login = (data: LoginIn) => {
  return new FetchAPI(routes.LOGIN, "POST")
    .setData(data)
    .send<AuthResponseType>();
};

const SignUp = (data: SignUpType) => {
  return new FetchAPI(routes.REGISTER, "POST")
    .setData(data)
    .send<AuthResponseType>();
};

export { Login, SignUp };
