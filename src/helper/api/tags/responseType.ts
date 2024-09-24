export type GetTagResponseType = {
  total: number;
  message: string;
  tags: Array<{ id: string; tag: string }>;
};
