import { Link } from "react-router-dom";
import blogData from "../components/blogData";

export default function blog() {
  return (
    <div className="bg-white">
      <ul role="list" className="divide-y divide-white/5 !mt-12 group">
        {blogData.map((blogData) => (
          <Link
            key={blogData.id}
            to={blogData.to}
            className="flex items-center justify-between py-2 transition-opacity duration-300 group-hover:opacity-40 hover:!opacity-100"
            id="blog-ul"
          >
            <div className="flex items-center gap-12">
              <p className="text-xl font-semibold text-white">{blogData.name}</p>
            </div>

            <p className="text-xl text-white">{blogData.date}</p>
          </Link>
        ))}
      </ul>
    </div>
  );
}
