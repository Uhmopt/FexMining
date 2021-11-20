export const getObjectItem = (data = {}, selector = "") => {
  const type = typeof selector;
  if (type === "string") return data?.[selector];
  if (type === "function") return selector(data);
  return null;
};

export const formatArray = (data) => (Array.isArray(data) ? data : []);

export const convertId2String = (data = []) =>
  (data ?? []).map((item = {}) => ({
    ...(item ?? {}),
    id: String(item?.id ?? ""),
  }));

export const loopSelf = (
  data = [],
  onEach = () => {},
  onFinish = () => {},
  current = 0
) => {
  if (current < data?.length) {
    onEach(
      // next
      () => {
        loopSelf(data, onEach, onFinish, current + 1);
      },
      // current item
      data?.[current],
      // current index
      current,
      // self
      data
    );
  } else {
    onFinish();
  }
};
