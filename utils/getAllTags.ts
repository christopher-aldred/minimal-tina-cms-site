import { client } from "../tina/__generated__/databaseClient";

// Collect unqiue tags from last 100 posts
export default async function getAllTags(): Promise<string[]> {
  const { data } = await client.queries.postConnection({
    sort: "added",
    last: 100,
  });
  const tags = new Set<string>();
  data?.postConnection.edges?.forEach((post) => {
    post?.node?.tags?.forEach((tag) => {
      tags.add(tag!);
    });
  });
  return [...tags];
}
