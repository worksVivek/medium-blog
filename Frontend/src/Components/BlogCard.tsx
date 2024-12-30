import { Link } from "react-router-dom";

interface BlogProps {
    authorName: string;
    title: string;
    content: string;
    id:string;
    publishedDate: string;
  }
  
  export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate
  }: BlogProps) => {
    return ( <Link to={`/blog/${id}`}>
      <article className="py-8 border-b border-gray-200 last:border-b-0 cursor-pointer">
        <div className="flex items-center space-x-2 mb-4">
          <Avatar name={authorName} />
          <div className="flex items-center text-sm">
            <span className="font-medium text-gray-700">{authorName}</span>
            <span className="mx-1 text-gray-500">·</span>
            <time className="text-gray-500">{publishedDate}</time>
          </div>
        </div>
        <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 hover:underline">
          {title}
        </h2>
        <p className="mb-4 text-base text-gray-700 line-clamp-3">
          {content}
        </p>
        <div className="flex items-center text-sm text-gray-500">
          <span>{`${Math.ceil(content.length / 100)} min read`}</span>
          <span className="mx-1">·</span>
          <span>Selected for you</span>
        </div>
        
      </article>
      </Link>
    )
  }
  
 export function Avatar({ name }: { name: string }) {
    return (
      <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden text-xs font-medium text-gray-600 bg-gray-200 rounded-full">
        <span>{name[0].toUpperCase()}</span>
      </div>
    )
  }
  
  