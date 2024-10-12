import Page from "../../page";

export default function PaginatedPage({ params: { slug } }) {
  return <Page after={new Date(slug)}></Page>;
}
