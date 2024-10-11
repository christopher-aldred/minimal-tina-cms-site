import LinkColourer from "../components/linkColourer";
import { PageRender } from "../components/pageRender";
import { client } from "../tina/__generated__/databaseClient";

export default async function Home() {
  const res = await client.queries.page({ relativePath: "home.mdx" });
  return (
    <>
      <LinkColourer />
      <PageRender
        data={JSON.parse(JSON.stringify(res.data))}
        query={res.query}
        variables={res.variables}
      />
    </>
  );
}
