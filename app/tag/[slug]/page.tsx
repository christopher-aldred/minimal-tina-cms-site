import { client } from "../../../tina/__generated__/databaseClient";
import LinkColourer from "../../../components/linkColourer";
import PostPreview from "../../../components/postPreview";

export default async function Tag({ params: { slug } }) {
  const { data } = await client.queries.postConnection({
    sort: "added",
    last: 999,
    filter: { tags: { in: slug } },
  });
  let posts = data!.postConnection!.edges!;
  return (
    <>
      <LinkColourer />
      <center className="text-neutral-500 dark:text-neutral-400 -mt-1 mb-8">
        Posts tagged with "{slug}"
      </center>
      <div>
        {posts?.map((post) => (
          <PostPreview post={post} />
        ))}
      </div>
    </>
  );
}
