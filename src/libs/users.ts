import { User as UserType } from "@/types";

import { User } from "@/models";

type FindUserType = {
  email: string;
  select?: string[];
  exclude?: string;
};
export const createUser = async (user: UserType) => {
  try {
    await User.create({ ...user });
  } catch (error) {
    console.log(error);
  }
};

export const isUserAlreadyExist = async (emailAddress: string) => {
  const isExist = await User.findOne({ email: emailAddress });
  return !!isExist;
};

export const findUser = async (findObj: FindUserType) => {
  const { email, select, exclude } = findObj;
  let user;
  const selectedKeys = select ? select.join(" ") : "";
  if (selectedKeys.length > 0) {
    user = await User.findOne({ email }).select(selectedKeys);
  } else {
    user = await User.findOne({ email }, exclude);
  }

  return user;
};
