import Link from "next/link";
import { client } from "../../tina/__generated__/databaseClient";
import LinkColourer from "../../components/linkColourer";

// Page listing all posts
export default async function Page() {
  const { data } = await client.queries.postConnection();
  let posts = data!.postConnection!.edges!;
  posts = posts.sort(
    (a, b) =>
      new Date(b?.node?.added!).valueOf() - new Date(a?.node?.added!).valueOf()
  );

  return (
    <>
      <LinkColourer />
      {posts.length < 1 ? (
        <center>
          <h1>No posts yet!</h1>
        </center>
      ) : null}
      <div>
        {posts.map((post) => (
          <div className="text-2xl mb-8" key={post!.node!.id}>
            <div className="flex items-baseline justify-between">
              <Link
                href={`/posts/${post!.node!._sys.filename}`}
                className="flex-1"
              >
                {post!.node!.title}
              </Link>
              <div className="text-sm text-neutral-500 italic ml-2 whitespace-nowrap">
                {new Date(post!.node!.added).toDateString()}
              </div>
            </div>
            <div className="text-neutral-700 dark:text-neutral-300 text-base my-1">
              {post!.node!.shortDescription}
            </div>
            <div className="text-xs">
              {post!.node!.tags?.map((tag) => (
                <span
                  className="mr-4 text-neutral-600 dark:text-neutral-400"
                  key={tag}
                >
                  <Link href={`/tag/${tag}`}>{`#${tag}`}</Link>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
