import { Home } from "@mui/icons-material";
import { Container, Stack } from "@mui/material";
import LinkButton from "components/buttons/LinkButton";
import RawImage from "components/RawImage";
import CustomText from "components/typography/CustomText";
import React from "react";

export default function PageHeader({ title = "", subTitle = "", image = "" }) {
  return (
    <div className="w-full relative">
      <RawImage className="absolute h-full w-full object-cover" src={image} />
      <div className="relative h-full w-full flex flex-col justify-center items-center py-36 bg-black bg-opacity-60 text-white">
        <Container>
          <Stack spacing={2}>
            <div className="border-l-4 border-primary pl-4">
              <CustomText variant="h4" bold>
                {title}
              </CustomText>
            </div>
            <div className="flex items-center">
              <LinkButton icon={<Home />} active to="/">
                HOME
              </LinkButton>
              <CustomText color="primary" className="px-2">
                -
              </CustomText>
              <LinkButton active>{subTitle ?? ""}</LinkButton>
            </div>
          </Stack>
        </Container>
      </div>
    </div>
  );
}
