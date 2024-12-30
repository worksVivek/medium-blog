import { Blog } from "../hooks"
import { AppBar } from "./AppBar"

export const FullBlog = ({ blog }: { blog: Blog }) => {
    
    return <div>
        <AppBar />
        <div className="flex justify-center">
            <div className="grid grid-cols-12 px-10 w-full  max-w-screen-xl pt-12 ">
                <div className="col-span-8 ">
                    <div className="text-5xl font-extrabold">
                        {blog.title}
                    </div>
                    <div className="text-slate-500 pt-2">
                        Posted on 5th september
                    </div>
                    <div className="pt-4">
                        {blog.content}
                    </div>
                </div>
                <div className="col-span-4 pt-2 ">
                    Author
                    <div className="font-bold text-xl  pt-2">
                    {blog.author.name || "Anonymous"}
                    </div>
                   
                   <div className="pt-1 text-slate-500">
                    A random catchphrase about the author's ability to grab the users attention
                </div>
                </div>
                
            </div>
        </div>
    </div>
}