import { Container } from "@mui/material";
import image from "assets/img/back/w-6.png";
import RawImage from "components/RawImage";
import CustomText from "components/typography/CustomText";
import React from "react";
import TradeViewChart from "react-crypto-chart";

export default function BitcoinLivePriceTableSection() {
  return (
    <div className="w-full relative">
      <RawImage className="absolute h-full w-full object-cover" src={image} />
      <div className="relative w-full h-full bg-white bg-opacity-80">
        <Container>
          <div className="relative h-full w-full flex flex-col justify-center items-center py-4">
            <div className="my-8">
              <div>
                <CustomText variant="h4" span bold>
                  BITCOIN LIVE
                </CustomText>{" "}
                <CustomText variant="h4" span color="primary" bold>
                  PRICE
                </CustomText>{" "}
                <CustomText variant="h4" span bold>
                  TABLES
                </CustomText>{" "}
              </div>
            </div>
            <CustomText className="mt-4 mb-12" helper>
              Bitcoin remains the most popular cryptocurrency in the world at
              the moment.
            </CustomText>
            <div className="mt-8 pb-8 w-full h-96 bitcoin-price-chart">
              <TradeViewChart pair="BTCBUSD" />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
