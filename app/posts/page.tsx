import Link from "next/link";
import { client } from "../../tina/__generated__/databaseClient";
import LinkColourer from "../../components/linkColourer";

interface PaginationProps {
  after?: Date | null;
}

// Page listing all posts
export default async function Page({ after = new Date() }: PaginationProps) {
  const itemsPerPage = 2;
  after?.setDate(after.getDate() + 1);
  const { data } = await client.queries.postConnection({
    sort: "added",
    last: itemsPerPage,
    filter: { added: { before: after?.toDateString() } },
  });
  let posts = data!.postConnection!.edges!;

  // posts = posts.sort(
  //   (a, b) =>
  //     new Date(b?.node?.added!).valueOf() - new Date(a?.node?.added!).valueOf()
  // );

  return (
    <>
      <LinkColourer />
      {/* <center>
        <h1>{after?.toDateString()}</h1>
      </center> */}
      {posts.length < 1 ? (
        <center>
          <h1>No posts!</h1>
        </center>
      ) : null}
      <div>
        {posts.map((post) => (
          <div className="text-2xl mb-10" key={post!.node!.id}>
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

      <center className="space-x-4">
        {posts.length > 0 ? (
          <Link
            href={`/posts/page/${
              new Date(posts[posts.length - 1]?.node?.added!)
                .toISOString()
                .split("T")[0]
            }`}
          >
            Older →
          </Link>
        ) : null}
      </center>
    </>
  );
}
