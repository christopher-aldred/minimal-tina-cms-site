import Link from "next/link";
import { client } from "../../tina/__generated__/databaseClient";
import LinkColourer from "../../components/linkColourer";
import PostPreview from "../../components/postPreview";
import GoBackLink from "../../components/gobackLink";

interface PaginationProps {
  after?: Date | null;
}

// Page listing all posts
export default async function Page({ after = new Date() }: PaginationProps) {
  const ITEMS_PER_PAGE = 12;
  after?.setDate(after.getDate() + 1);
  const { data } = await client.queries.postConnection({
    sort: "added",
    last: ITEMS_PER_PAGE,
    filter: { added: { before: after?.toDateString() } },
  });
  let posts = data!.postConnection!.edges!;

  return (
    <>
      <LinkColourer />

      {posts.length < 1 ? (
        <center>
          <h1>No more posts!</h1>
          <GoBackLink />
        </center>
      ) : null}

      <div>
        {posts.map((post) => (
          <PostPreview post={post} />
        ))}
      </div>

      <center>
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
