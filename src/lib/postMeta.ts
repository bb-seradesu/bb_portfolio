type PostData = {
  displayDate?: string;
  kind: "intern" | "lab" | "project" | "writing";
  stack: string[];
};

const categoryTagMap: Record<Exclude<PostData["kind"], "writing">, string> = {
  intern: "インターン",
  lab: "研究室",
  project: "課外活動"
};

export function getDisplayTags(data: PostData) {
  if (data.kind === "writing") {
    return data.stack.filter((item) => item !== "Technical Writing").slice(0, 3);
  }

  return [categoryTagMap[data.kind]];
}

export function getDisplayTagPath(tag: string) {
  return `/tags/${encodeURIComponent(tag)}/`;
}

export function formatPostDate(data: PostData & { publishedAt: Date }) {
  return data.displayDate ?? data.publishedAt.toLocaleDateString("ja-JP");
}
