import {
  ArrowLeftIcon,
  FileLockIcon,
  FileTextIcon,
  LockIcon,
  StarIcon,
} from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const PropertyOverviewSection = (): JSX.Element => {
  // Data for risk approach cards
  const riskApproaches = [
    {
      title: "BUSINESS\nAS USUAL",
      icon: <FileTextIcon className="w-6 h-6 text-[#49493c]" />,
      badge: "Risk approach",
      profitType: "Predicted Profit",
      profitValue: "-7",
      profitColor: "#f44336",
      backgroundImage: "url(public/business-as-usual-1.png)",
      values: [{ label: "Physical", value: "$320.000", color: "#44c26d" }],
      description: "No price protection, margins at risk if costs rise.",
      showPriceTag: false,
    },
    {
      title: "FUTURES\nCONTRACT",
      icon: <FileLockIcon className="w-6 h-6 text-[#33332a]" />,
      badge: "Fixed",
      profitType: "Secured Margin",
      profitValue: "5",
      profitColor: "#44c26d",
      backgroundImage: "url(public/futures-contract-1.png)",
      values: [
        { label: "Physical", value: "$320.000", color: "#44c26d" },
        { label: "Futures", value: "-$100.000", color: "#f44336" },
        { label: "Net Profit", value: "$220.000", color: "#44c26d" },
      ],
      description:
        "Fixes a future price, reducing risk but requiring commitment",
      showPriceTag: true,
    },
    {
      title: "OPTION",
      icon: <FileTextIcon className="w-6 h-6 text-[#33332a]" />,
      badge: "Flexible",
      profitType: "Option Premium",
      profitValue: "5",
      profitColor: "#44c26d",
      backgroundImage: "url(public/option-1.png)",
      values: [
        { label: "Physical", value: "$320.000", color: "#44c26d" },
        { label: "Premium", value: "-$88.200", color: "#f44336" },
        { label: "Net Profit", value: "$231.800", color: "#44c26d" },
        {
          label: "Option Called",
          value: "-",
          color: "#838378",
          disabled: true,
        },
      ],
      description:
        "Provides flexibility with downside protection at a premium.",
      showPriceTag: true,
      strikePrice: true,
    },
  ];

  return (
    <section className="w-full bg-[#fbfbfa] overflow-y-auto py-8">
      <div className="container max-w-[1170px] mx-auto">
        <h3 className="text-center font-typography-heading-h3 font-[number:var(--typography-heading-h3-font-weight)] text-[#101218] text-[length:var(--typography-heading-h3-font-size)] tracking-[var(--typography-heading-h3-letter-spacing)] leading-[var(--typography-heading-h3-line-height)] mb-6">
          Risk assessment
        </h3>

        <div className="flex flex-col gap-6">
          {/* Projected Spot Price Slider */}
          <div className="flex items-end justify-between w-full">
            <div className="flex items-end gap-2">
              <div className="flex flex-col w-[286px] gap-2">
                <label className="text-[#49493c] text-[length:var(--typography-lable-sm-font-size)] tracking-[var(--typography-lable-sm-letter-spacing)] leading-[var(--typography-lable-sm-line-height)] font-typography-lable-sm font-[number:var(--typography-lable-sm-font-weight)]">
                  Projected&nbsp;&nbsp;Spot Price
                </label>
                <div className="flex h-11 items-center gap-4 px-2 py-0 rounded-lg border border-solid border-[#dadad2]">
                  <div className="flex items-center gap-4 flex-1 bg-[#bdbdb4] rounded-[999px]">
                    <div className="relative flex-1 h-1 bg-[#dadad2] rounded-[30px]">
                      <div className="relative w-48 h-3 -top-1">
                        <div className="w-[52px] flex h-1 items-center justify-end absolute top-1 left-0 bg-[#33332a] rounded-[60px]">
                          <div className="relative w-3 h-3 mt-[-4.00px] mb-[-4.00px] bg-white rounded-md border-2 border-solid border-[#33332a]" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-typography-lable-md font-[number:var(--typography-lable-md-font-weight)] text-[#33332a] text-[length:var(--typography-lable-md-font-size)] tracking-[var(--typography-lable-md-letter-spacing)] leading-[var(--typography-lable-md-line-height)]">
                      50
                    </span>
                    <div className="flex w-[38px] h-4 items-center justify-center gap-1 bg-[#bdbdb4] rounded-sm">
                      <span className="text-[#fbfbfa] text-[10px]">dollar</span>
                      <span className="text-[#fbfbfa] text-xs">/ mt</span>
                    </div>
                  </div>
                </div>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="w-11 h-11 opacity-25 rounded-lg border border-solid border-[#dadad2]"
              >
                <StarIcon className="h-5 w-5 text-[#33332a]" />
              </Button>
            </div>
          </div>

          {/* Risk Approach Cards */}
          <div className="grid grid-cols-3 gap-6">
            {riskApproaches.map((approach, index) => (
              <Card
                key={index}
                className="flex flex-col gap-px p-6 bg-[#f4f4f1] rounded-xl bg-cover bg-center"
                style={{ backgroundImage: approach.backgroundImage }}
              >
                <CardHeader className="p-0 flex justify-between items-start">
                  <div className="flex items-center gap-[18px]">
                    <div className="flex w-10 h-10 items-center justify-center p-2.5 rounded-[999px] border border-solid border-[#dadad2]">
                      {approach.icon}
                    </div>
                    <h4 className="font-typography-subheadings-lg font-[number:var(--typography-subheadings-lg-font-weight)] text-[#33332a] text-[length:var(--typography-subheadings-lg-font-size)] tracking-[var(--typography-subheadings-lg-letter-spacing)] leading-[var(--typography-subheadings-lg-line-height)] whitespace-pre-line">
                      {approach.title}
                    </h4>
                  </div>
                  <Badge className="bg-white text-[#33332a] px-4 py-2.5 rounded-[30px]">
                    {approach.badge}
                  </Badge>
                </CardHeader>

                <CardContent className="p-0 mt-9 h-[171px] relative">
                  <div className="flex items-center gap-[29px]">
                    <div className="flex flex-col w-[111px] items-start">
                      <div className="flex items-end justify-between w-full">
                        <div className="relative h-20 overflow-hidden">
                          <span className="font-typography-dislpay-large font-[number:var(--typography-dislpay-large-font-weight)] text-[${approach.profitColor}] text-[length:var(--typography-dislpay-large-font-size)] tracking-[var(--typography-dislpay-large-letter-spacing)] leading-[var(--typography-dislpay-large-line-height)]">
                            {approach.profitValue}
                          </span>
                        </div>
                        <span className="font-typography-heading-h5 font-[number:var(--typography-heading-h5-font-weight)] text-[#838378] text-[length:var(--typography-heading-h5-font-size)] tracking-[var(--typography-heading-h5-letter-spacing)] leading-[var(--typography-heading-h5-line-height)]">
                          %
                        </span>
                      </div>
                      <span className="font-typography-lable-md font-[number:var(--typography-lable-md-font-weight)] text-[#33332a] text-[length:var(--typography-lable-md-font-size)] tracking-[var(--typography-lable-md-letter-spacing)] leading-[var(--typography-lable-md-line-height)]">
                        {approach.profitType}
                      </span>
                    </div>

                    {index === 0 && (
                      <img
                        className="absolute w-[60px] h-[60px] top-[19px] left-[263px]"
                        alt="Component"
                        src="public/component-10.svg"
                      />
                    )}

                    {index === 1 && (
                      <div className="flex w-[60px] h-[60px] items-center justify-center p-2.5 absolute top-[19px] left-[263px] bg-[#e9e9e4] rounded-[999px]">
                        <LockIcon className="w-6 h-6 text-[#44c26d] text-xl" />
                      </div>
                    )}

                    {index === 2 && (
                      <div className="flex w-[60px] h-[60px] items-center justify-center p-2.5 absolute top-[19px] left-[263px] bg-[#e9e9e4] rounded-[999px]">
                        <StarIcon className="w-6 h-6 text-[#f44336] text-xl" />
                      </div>
                    )}
                  </div>
                </CardContent>

                <div className="flex flex-col gap-2.5 pt-2 pb-6 px-0">
                  <div className="flex items-center justify-between gap-3 px-5">
                    {approach.values.map((item, i) => (
                      <div
                        key={i}
                        className={`flex flex-col max-w-20 items-center gap-1 flex-1 ${item.disabled ? "opacity-25" : ""}`}
                      >
                        <span className="font-typography-lable-sm font-[number:var(--typography-lable-sm-font-weight)] text-[#838378] text-[length:var(--typography-lable-sm-font-size)] tracking-[var(--typography-lable-sm-letter-spacing)] leading-[var(--typography-lable-sm-line-height)]">
                          {item.label}
                        </span>
                        <span
                          className={`font-typography-lable-lg font-[number:var(--typography-lable-lg-font-weight)] text-[${item.color}] text-[length:var(--typography-lable-lg-font-size)] tracking-[var(--typography-lable-lg-letter-spacing)] leading-[var(--typography-lable-lg-line-height)]`}
                        >
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex h-[183px] items-start justify-between gap-3 px-5 relative">
                    {approach.values.map((_, i) => (
                      <div
                        key={i}
                        className="relative flex-1 max-w-20 self-stretch"
                      >
                        {i === 0 && (
                          <div className="relative w-20 h-[68px] top-[21px] bg-[#33332a] rounded-[16px_16px_0px_0px]" />
                        )}
                        {i === 1 && approach.values.length > 1 && (
                          <div className="w-20 h-[21px] bg-[#dadad2] relative top-[94px] rounded-[0px_0px_16px_16px]" />
                        )}
                        {i === 2 && approach.values.length > 2 && (
                          <div className="relative w-20 h-[47px] top-[42px] bg-[#53e683] rounded-[16px_16px_0px_0px]" />
                        )}
                        {i === 3 && approach.values.length > 3 && (
                          <div className="relative w-20 h-[21px] top-[68px] bg-[#eeeeee] rounded-[16px_16px_0px_0px]" />
                        )}
                      </div>
                    ))}
                    <div className="absolute w-full h-px top-[91px] left-0 bg-[#d9d9d9]" />
                  </div>
                </div>

                <CardFooter className="p-0 flex-col items-start gap-2.5">
                  <Separator className="w-full bg-[#dadad2]" />
                  <div className="flex flex-col gap-2 w-full">
                    <p className="font-typography-paragraph-md font-[number:var(--typography-paragraph-md-font-weight)] text-black text-[length:var(--typography-paragraph-md-font-size)] tracking-[var(--typography-paragraph-md-letter-spacing)] leading-[var(--typography-paragraph-md-line-height)]">
                      {approach.description}
                    </p>
                    {approach.showPriceTag && (
                      <Badge
                        variant="outline"
                        className="bg-[#dadad2] rounded-[30px] w-fit"
                      >
                        <span className="font-typography-lable-sm font-[number:var(--typography-lable-sm-font-weight)] text-[#33332a] text-[length:var(--typography-lable-sm-font-size)] tracking-[var(--typography-lable-sm-letter-spacing)] leading-[var(--typography-lable-sm-line-height)]">
                          {approach.strikePrice
                            ? "Strike price at $52.5"
                            : "Price at $52.5"}
                        </span>
                      </Badge>
                    )}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Back Button */}
          <div className="flex justify-center mt-4">
            <Button
              variant="outline"
              className="rounded-full border border-solid border-[#dadad2] pl-5 pr-6 py-1 h-10 flex items-center gap-1"
            >
              <ArrowLeftIcon className="h-5 w-5 text-[#49493c]" />
              <span className="font-typography-lable-sm font-[number:var(--typography-lable-sm-font-weight)] text-[#49493c] text-[length:var(--typography-lable-sm-font-size)] tracking-[var(--typography-lable-sm-letter-spacing)] leading-[var(--typography-lable-sm-line-height)]">
                Back
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
