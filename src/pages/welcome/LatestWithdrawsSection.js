import { Container } from "@mui/material";
import CustomText from "components/typography/CustomText";
import React from "react";
import { withdrawals } from "./data/withdrawals";

export default function LatestWithdrawsSection() {
  return (
    <div className="my-12">
      <Container>
        <CustomText className="my-8" variant="h4" align="center" bold>
          LATEST{" "}
          <CustomText variant="h4" span color="primary" bold>
            WITHDRAWALS
          </CustomText>{" "}
        </CustomText>
        <div className="my-8 flex justify-center items-center">
          <table border={1} className="border-collapse bg-green-400">
            <tbody>
              {withdrawals.map((transaction, transactionIndex) => (
                <tr key={transactionIndex}>
                  <td className="p-4">{transaction?.address ?? ""}</td>
                  <td className="p-4">{transaction?.value ?? ""}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
}
