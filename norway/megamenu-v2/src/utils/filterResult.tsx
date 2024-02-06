interface filterResultType {
  result: any[];
  exclude: any[];
}

export const filterResult = ({ result, exclude }: filterResultType) => {
  return result.filter((item) => {
    return !exclude.includes(item);
  });
};
