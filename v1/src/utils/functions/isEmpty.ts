const isEmpty = (...args: string[]): boolean => {
  let len = args.length;
  for (let i = len - 1; i >= 0; --i) {
    if (args[i].trim().length === 0) {
      return true;
    }
  }
  return false;
};

export default isEmpty;
