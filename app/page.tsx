import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/app/lib/blogs";
import { IBlog } from "@/app/lib/definitions";

const HomePage = () => {
  return (
    <main className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog: IBlog) => (
          <div
            key={blog.id}
            className="border rounded-lg overflow-hidden shadow-md"
          >
            <Image
              src={blog.image}
              alt={blog.title}
              width={500}
              height={500}
              layout="responsive"
            />
            <div className="p-4 mt-4">
              <h2 className="text-xl font-semibold line-clamp-1">
                {blog.title}
              </h2>
              <p className="mt-2 text-gray-600 line-clamp-2">{blog.content}</p>
              <Link href={`/blog/${blog.id}`}>
                <button className="text-black mt-4 block p-2 px-4 rounded-lg bg-yellow-300 hover:bg-yellow-200">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default HomePage;
