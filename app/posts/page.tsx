import Link from "next/link";
import { client } from "../../tina/__generated__/databaseClient";
import LinkColourer from "../../components/linkColourer";

export default async function Page() {
  const { data } = await client.queries.postConnection();
  return (
    <>
      <LinkColourer />
      <div>
        {data!.postConnection!.edges!.map((post) => (
          <div className="text-2xl mb-8" key={post!.node!.id}>
            <Link href={`/posts/${post!.node!._sys.filename}`}>
              {post!.node!.title}
            </Link>
            <div className="text-neutral-700 text-base my-1">
              {post!.node!.shortDescription}
            </div>
            <div className="text-xs">
              {post!.node!.tags?.map((tag) => (
                <span className="mr-4 text-neutral-500">
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
