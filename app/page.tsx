import { MarkdownRender } from "../components/markdownRender";
import { client } from "../tina/__generated__/databaseClient";

export default async function Home() {
  const res = await client.queries.page({ relativePath: "home.mdx" });
  return (
    <MarkdownRender
      data={JSON.parse(JSON.stringify(res.data))}
      query={res.query}
      variables={res.variables}
    />
  );
}
