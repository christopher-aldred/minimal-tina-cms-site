import { client } from "../tina/__generated__/databaseClient";

// Look at 100 posts and collect unqiue tags
export default async function getAllTags(): Promise<string[]> {
  const { data } = await client.queries.postConnection();
  const tags = new Set<string>();
  data?.postConnection.edges?.slice(0, 999).forEach((post) => {
    post?.node?.tags?.forEach((tag) => {
      tags.add(tag!);
    });
  });
  return [...tags];
}
