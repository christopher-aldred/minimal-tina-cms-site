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
      <h3 className="text-center mb-8 -mt-1">Posts tagged with "{slug}"</h3>
      <div>
        {posts?.map((post) => (
          <PostPreview post={post} />
        ))}
      </div>
    </>
  );
}
