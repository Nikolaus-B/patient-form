const normalizeSpaces = (value: string, type: string) => {
  if (type === "password") {
    return value.replace(/\s+/g, "");
  }

  return value.replace(/\s+/g, " ");
};

export default normalizeSpaces;
