const ASPECT_MAP = {
  "1:1": "1 / 1",
  "4:5": "4 / 5",
  "9:16": "9 / 16",
  "16:9": "16 / 9",
};

export function creativeAspectRatio(aspect) {
  return ASPECT_MAP[aspect] ?? "4 / 5";
}

export function creativeAspectClass(aspect) {
  if (aspect === "1:1") return "square";
  if (aspect === "16:9") return "landscape";
  if (aspect === "4:5") return "feed";
  return "portrait";
}
