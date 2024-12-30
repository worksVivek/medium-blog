import { Avatar } from "./BlogCard"
import { Link } from "react-router-dom"
export const AppBar = () => {
    return (
        <div className="border-b flex items-center justify-between px-10 py-4">
            <div className="flex items-center gap-2">
                <Link to={`/blogs`}>
                <span className="text-4xl font-bold"
                style={{ fontFamily: 'Noe Display-Bold', fontWeight: 'bold' }}
>
                    Medium
                    </span>
                </Link>
                
                
            </div>
            <div>
                <Link to={`/publish`}>
                <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none  focus:ring-green-300 font-medium rounded-full text-sm px-4 py-2  text-center me-2 mb-2 ">New</button>

                </Link>

                <Avatar name="Vivek" />
            </div>
        </div>
    )
}