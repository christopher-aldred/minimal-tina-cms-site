import Link from "next/link";
import { client } from "../../../tina/__generated__/databaseClient";
import LinkColourer from "../../../components/linkColourer";

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
      <h1 className="text-center mb-8">Tag: {slug}</h1>
      <div>
        {posts?.map((post) => (
          <div className="text-2xl mb-10" key={post!.node!.id}>
            <div className="flex items-baseline justify-between">
              {/* Title */}
              <Link
                href={`/posts/${post!.node!._sys.filename}`}
                className="flex-1"
              >
                {post!.node!.title}
              </Link>

              {/* Date */}
              <div className="text-sm text-neutral-500 italic ml-2 whitespace-nowrap">
                {new Date(post!.node!.added).toDateString()}
              </div>
            </div>

            {/* Description */}
            <div className="text-neutral-700 dark:text-neutral-300 text-base my-1">
              {post!.node!.shortDescription}
            </div>

            {/* Tags */}
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
