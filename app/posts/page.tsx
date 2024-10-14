import Link from "next/link";
import { client } from "../../tina/__generated__/databaseClient";
import LinkColourer from "../../components/linkColourer";
import PostPreview from "../../components/postPreview";
import GoBackLink from "../../components/gobackLink";

// Page listing all posts
export default async function Page({ searchParams }) {
  const ITEMS_PER_PAGE = 2;

  const { data } = await client.queries.postConnection({
    sort: "added",
    last: ITEMS_PER_PAGE,
    filter:
      searchParams["after"] === undefined
        ? {}
        : {
            added: { before: new Date(searchParams["after"])?.toDateString() },
          },
  });

  let posts = data!.postConnection!.edges!;

  return (
    <>
      <LinkColourer />

      {posts.length < 1 ? (
        <center>
          <h1 className="m-32">No posts!</h1>
          <GoBackLink />
        </center>
      ) : null}

      <div>
        {posts.map((post) => (
          <PostPreview post={post} />
        ))}
      </div>

      <center className="space-x-6">
        {posts.length > 0 ? (
          <Link
            href={`/posts/?after=${
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
