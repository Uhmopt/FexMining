import { Container, Grid } from "@mui/material";
import BlogCard from "components/BlogCard";
import CustomText from "components/typography/CustomText";
import React from "react";
import { blogs } from "./data/blogs";

export default function EssentialBenefits() {
  return (
    <div className="my-12">
      <Container>
        <CustomText className="my-8" variant="h4" align="center" bold>
          ESSENTIAL{" "}
          <CustomText variant="h4" span color="primary" bold>
            BENEFITS
          </CustomText>{" "}
        </CustomText>
        <CustomText className="mt-4 mb-12" helper align="center">
          We tend to put our investors first, to this, we have developed
          strategies to ensure you have maximum returns.
        </CustomText>
        <div className="my-8 flex justify-center items-center">
          <Grid container spacing={5}>
            {blogs.map((blog, blogIndex) => (
              <Grid key={blogIndex} item lg={4} md={4} sm={12} xs={12}>
                <BlogCard
                  image={blog?.image ?? ""}
                  title={blog?.title ?? ""}
                  description={blog?.description ?? ""}
                  action={blog?.action ?? ""}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </div>
  );
}
