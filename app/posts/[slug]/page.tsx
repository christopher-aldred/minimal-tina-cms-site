import { PostRender } from "../../../components/postRender";
import { client } from "../../../tina/__generated__/databaseClient";

export async function generateStaticParams() {
  const posts = await client.queries.postConnection();
  const paths = posts.data?.postConnection?.edges?.map((edge) => ({
    filename: edge?.node?._sys.breadcrumbs,
  }));
  return paths || [];
}

export default async function Posts({ params: { slug } }) {
  const res = await client.queries.post({
    relativePath: `${slug}.md`,
  });
  return (
    <PostRender
      data={JSON.parse(JSON.stringify(res.data))}
      query={res.query}
      variables={res.variables}
    />
  );
}
