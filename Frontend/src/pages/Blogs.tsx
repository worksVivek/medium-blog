import { AppBar } from "../Components/AppBar"
import { BlogCard } from "../Components/BlogCard"
import { useBlogs } from "../hooks"
import { Skeleton } from "../Components/Skeletons"
export const Blogs = () => {
    const {loading,blogs}=useBlogs();
    if(loading){
        return <div>
            <AppBar />
            <div className="flex justify-center flex-col ">
            < Skeleton />
             < Skeleton />
             < Skeleton />
             < Skeleton />
             < Skeleton />
             < Skeleton />
            </div>
            

        </div>
    }
    return <div>
        <AppBar />
        <div className="flex justify-center">
            <div className=" max-w-xl">
                {blogs.map(blog=> <BlogCard
                    id={blog.id}
                    authorName={blog.author.name || "Anonymous"}
                    title={blog.title}
                    content={blog.content}
                    publishedDate={"18th December"}
               
                />
                )}
                

            </div>
        </div>
    </div>
}