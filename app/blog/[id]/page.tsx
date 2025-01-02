import Image from "next/image";
import { blogs } from "@/app/lib/blogs";
import CommentForm from "@/app/ui/comment-form";

const BlogPage = ({ params }: { params: { id: string } }) => {
  const blog = blogs.find((b) => b.id === parseInt(params.id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-1">
          <Image
            src={blog.image}
            alt={blog.title}
            width={500}
            height={500}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="col-span-1">
          <h1 className="text-4xl font-bold my-4">{blog.title}</h1>
          <p className="text-gray-500 mb-6">{blog.content}</p>
        </div>
      </div>

      {/* Comment section */}
      <CommentForm />
    </div>
  );
};

export default BlogPage;
