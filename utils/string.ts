export const handleLongString = (
  longString = "",
  sizeToNotExceed = 25
): string => {
  return longString?.length > sizeToNotExceed
    ? `${longString.substring(0, sizeToNotExceed)}...`
    : longString || "";
};
