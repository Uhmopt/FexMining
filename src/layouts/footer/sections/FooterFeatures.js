import BlogThumb from "components/BlogThumb";
import CustomText from "components/typography/CustomText";
import { blogs } from "pages/welcome/data/blogs";
import React from "react";

export default function FooterFeatures() {
  return (
    <div className="text-gray-400">
      <CustomText className="mb-4" color="white" variant="h4">
        <span className="border-b-2 border-primary pb-2">CORE</span> FEATURES
      </CustomText>
      {blogs.map((blog, blogIndex) => (
        <BlogThumb
          key={blogIndex}
          image={blog?.image ?? ""}
          title={blog?.title ?? ""}
          description={blog?.description ?? ""}
        />
      ))}
    </div>
  );
}
