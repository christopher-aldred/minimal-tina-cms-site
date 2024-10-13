import Link from "next/link";

export default async function PostPreview({ post }) {
  return (
    <div className="text-2xl mb-10" key={post!.node!.id}>
      <div className="flex items-baseline justify-between">
        {/* Title */}
        <Link href={`/posts/${post!.node!._sys.filename}`} className="flex-1">
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
  );
}
