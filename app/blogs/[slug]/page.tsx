// app/blogs/[slug]/page.tsx
"use client";
import IMAGES from "@/assets/images";
import { useTheme } from "@/context/themeContext";
import Image from "next/image";
import { FaCalendarAlt, FaClock, FaUserCircle } from "react-icons/fa";

type BlogPostProps = {
  params: { slug: string };
};

const BlogPost = ({ params }: BlogPostProps) => {
  const { theme } = useTheme();
  const { slug } = params;
  console.log("slug", slug);

  const blogData = [
    {
      id: "1",
      title: "How to Build Software from Scratch: Guides and Tips",
      author: "Ador T",
      date: "September 10, 2024",
      readTime: "4 min read",
      imageUrl: IMAGES.CONACT_BANNER,
      content: [
        {
          heading: "Benefits of Knowing How to Build Software",
          paragraphs: [
            "In today’s digital age, practically everything runs on software. These tools can solve all sorts of problems, automate tasks, enhance productivity, and drive business growth. Sure, there is already a vast array of ready-made software available out there. But there’s still no shortage of demand for new ones across all industries.",
            "Knowing how to build software can dramatically increase your value in the job market. This skill also helps improve your innate skills like creative thinking, problem-solving, and overall creativity. In fact, if you can learn how to build software, you can be way ahead not only in the professional aspect but in terms of personal growth as well.",
          ],
        },
        {
          heading: "How to Build Software from Scratch in 5 Steps",
          paragraphs: [
            "The process of how to build software can be lengthy and meticulous. However, it will be a lot less daunting if we break it down into simple steps.",
            "Identifying the Requirements: It is vital to have a complete list of all the requirements for the software. This includes the problem that needs solving and every single requirement, down to the smallest detail. With this base, you can define the purpose of the software and the features you need to incorporate.",
          ],
        },
        {
          heading: "Simplifying How to Build Software with NetNexus",
          paragraphs: [
            "As you can see, there’s quite a bit of work involved in software development. Yes, it is possible for your company to handle it in-house but only if you have skilled staff capable of doing the job. In most cases, though, a much better solution would be to outsource these projects to an experienced and reliable software development company, like NetNexus Global.",
            "Why would you want to spend so much time, effort and company resources on how to build software when NetNexus Global can accomplish the job in less time, at a lower cost, and with guaranteed superior results?",
          ],
        },
      ],
    },
  ];

  const blog = blogData.find((b) => b.id === slug);

  if (!blog) {
    return <div className="mt-28">Blog not found</div>;
  }

  return (
    <div className={`gen-p py-28 ${theme} bg-background text-heading`}>
      {/* Breadcrumb */}
      <div className="text-sm mb-4">
        <a href="/blogs" className="hover:underline">
          Blogs
        </a>{" "}
        &gt; {blog?.title}
      </div>

      {/* Title and Author Section */}
      <h1 className="text-3xl lg:text-5xl font-bold text-center  mb-4">
        {blog?.title}
      </h1>
      <div className="flex items-center justify-center mb-4">
        <FaCalendarAlt className="mr-1" />
        <span className="text-sm mr-4">{blog?.date}</span>
        <FaClock className="mr-1" />
        <span className="text-sm mr-4">{blog?.readTime}</span>
      </div>

      <div className="flex items-center justify-center mb-8">
        <FaUserCircle className="mr-2 text-2xl" />
        <span className="text-sm">{blog?.author}</span>
      </div>

      {/* Main Image */}
      <div className="w-full mb-8">
        <Image
          src={blog?.imageUrl}
          alt={blog?.title}
          className="w-full h-[300px] object-cover rounded-lg mx-auto"
        />
      </div>

      {/* Content */}
      <div className="prose lg:prose-lg max-w-none">
        {blog?.content.map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{section.heading}</h2>
            {section.paragraphs.map((paragraph, i) => (
              <p key={i} className="leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPost;
