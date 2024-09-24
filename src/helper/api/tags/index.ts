const MODULE_PREFIX = "tags";

import { FetchAPI } from "@/utils/fetch.utils";

import { GetTagResponseType } from "./responseType";

const routes = {
  GET_TAGS: `${MODULE_PREFIX}`,
};

export const getAllTags = () => {
  return new FetchAPI(routes.GET_TAGS, "GET").send<GetTagResponseType>();
};
