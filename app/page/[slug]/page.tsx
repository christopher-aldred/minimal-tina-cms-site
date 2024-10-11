import LinkColourer from "../../../components/linkColourer";
import { PageRender } from "../../../components/pageRender";
import { client } from "../../../tina/__generated__/databaseClient";

export async function generateStaticParams() {
  const pages = await client.queries.pageConnection();
  const paths = pages.data?.pageConnection?.edges?.map((edge) => ({
    filename: edge?.node?._sys.breadcrumbs,
  }));

  return paths || [];
}

const DynamicPage = async ({ params: { slug } }) => {
  const res = await client.queries.page({
    relativePath: `${slug}.mdx`,
  });

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
};

export default DynamicPage;
