import getAllTags from "../utils/getAllTags";
import Link from "next/link";

interface tagsProps {
  className?: string;
  tags?: (string | null)[] | null | undefined;
}

export default async function Tags(props: tagsProps) {
  let tags: (string | null)[] | null | undefined = [];

  if (props.tags === undefined) {
    tags = await getAllTags();
  } else {
    tags = props.tags;
  }

  return (
    <>
      {tags!.length > 0 ? (
        <div className={`mt-10 tagsBar ${props.className}`}>
          <h3>View posts by tag</h3>
          {tags?.map((tag) => (
            <span
              className="mr-4 text-neutral-600 dark:text-neutral-400"
              key={tag}
            >
              <Link href={`/tag/${tag}`}>{`#${tag}`}</Link>
            </span>
          ))}
        </div>
      ) : null}
    </>
  );
}
