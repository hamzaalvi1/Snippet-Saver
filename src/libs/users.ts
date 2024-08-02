import { User as UserType } from "@/types";

import { User } from "@/models";

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

export const findUser = async (
  emailAddress: string,
  select?: string[],
  exclude?: string
) => {
  let user;
  const selectedKeys = select ? select.join(" ") : "";
  if (selectedKeys.length > 0) {
    user = await User.findOne({ email: emailAddress }).select(selectedKeys);
  } else {
    user = await User.findOne({ email: emailAddress }, exclude);
  }

  return user;
};