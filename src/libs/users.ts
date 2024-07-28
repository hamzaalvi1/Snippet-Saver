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
