import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div className="w-full border-0 py-4 lg:px-24 px-10 bg-gray-950">
            <h1 className="text-3xl text-white">
                <Link to="/">
                    Tasty React
                </Link>
            </h1>
        </div>
    )
}