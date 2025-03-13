import {
  ArrowLeftIcon,
  FileLockIcon,
  FileTextIcon,
  LockIcon,
  RotateCcwIcon,
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

export const ContentWrapperSection = (): JSX.Element => {
  // Data for the risk assessment cards
  const riskCards = [
    {
      id: 1,
      title: "BUSINESS\nAS USUAL",
      icon: <FileTextIcon className="w-6 h-6 text-[#49493c]" />,
      badge: "Risk approach",
      profitValue: "-7",
      profitLabel: "Predicted Profit",
      chartSrc: "public/component-10-2.svg",
      physicalValue: "$20.000",
      description: "No price protection, margins at risk if costs rise.",
      bgImage: "public/business-as-usual-3.png",
      showPriceTag: false,
    },
    {
      id: 2,
      title: "FUTURES\nCONTRACT",
      icon: <FileLockIcon className="w-6 h-6 text-[#33332a]" />,
      badge: "Fixed",
      profitValue: "5",
      profitLabel: "Secured Margin",
      chartIcon: <LockIcon className="w-6 h-6 text-[#44c26d]" />,
      physicalValue: "$20.000",
      futuresValue: "$200.000",
      netProfitValue: "$220.000",
      description:
        "Fixes a future price, reducing risk but requiring commitment",
      bgImage: "public/futures-contract-3.png",
      showPriceTag: true,
    },
    {
      id: 3,
      title: "OPTION",
      icon: <FileTextIcon className="w-6 h-6 text-[#33332a]" />,
      badge: "Flexible",
      profitValue: "7",
      profitLabel: "Option Premium",
      chartIcon: <FileTextIcon className="w-6 h-6 text-[#44c26d]" />,
      physicalValue: "$120.000",
      premiumValue: "-$88.200",
      netProfitValue: "$131.800",
      optionCalledValue: "$200.000",
      description:
        "Provides flexibility with downside protection at a premium.",
      bgImage: "public/option-3.png",
      showPriceTag: true,
      strikePrice: true,
    },
  ];

  return (
    <section className="w-full h-[885px] bg-[#fbfbfa] overflow-y-scroll">
      <div className="flex flex-col items-center">
        <h3 className="mt-[31px] font-typography-heading-h3 font-[number:var(--typography-heading-h3-font-weight)] text-[#101218] text-[length:var(--typography-heading-h3-font-size)] tracking-[var(--typography-heading-h3-letter-spacing)] leading-[var(--typography-heading-h3-line-height)] [font-style:var(--typography-heading-h3-font-style)]">
          Risk assessment
        </h3>

        <div className="flex flex-col w-full max-w-[1170px] items-center gap-6 mt-[22px]">
          {/* Price Slider Section */}
          <div className="flex flex-col items-start gap-6 self-stretch w-full">
            <div className="w-full h-[70px] flex items-end justify-between">
              <div className="flex h-[70px] items-end gap-2">
                <div className="flex flex-col w-[286px] items-start gap-2">
                  <div className="self-stretch mt-[-1.00px] text-[#49493c] text-[length:var(--typography-lable-sm-font-size)] tracking-[var(--typography-lable-sm-letter-spacing)] leading-[var(--typography-lable-sm-line-height)] font-typography-lable-sm font-[number:var(--typography-lable-sm-font-weight)] [font-style:var(--typography-lable-sm-font-style)]">
                    Projected&nbsp;&nbsp;Spot Price
                  </div>

                  <div className="flex h-11 items-center gap-4 px-2 py-0 self-stretch w-full rounded-lg border border-solid border-[#dadad2]">
                    <div className="flex items-center gap-4 flex-1 grow bg-[#bdbdb4] rounded-[999px]">
                      <div className="relative flex-1 grow h-1 bg-[#dadad2] rounded-[30px]">
                        <div className="relative w-48 h-3 -top-1">
                          <div className="w-[122px] flex h-1 items-center justify-end absolute top-1 left-0 bg-[#33332a] rounded-[60px]">
                            <div className="relative w-3 h-3 mt-[-4.00px] mb-[-4.00px] bg-white rounded-md border-2 border-solid border-[#33332a]" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1">
                      <div className="w-fit mt-[-1.00px] font-typography-lable-md font-[number:var(--typography-lable-md-font-weight)] text-[#33332a] text-[length:var(--typography-lable-md-font-size)] tracking-[var(--typography-lable-md-letter-spacing)] leading-[var(--typography-lable-md-line-height)] whitespace-nowrap [font-style:var(--typography-lable-md-font-style)]">
                        58
                      </div>

                      <div className="flex w-[38px] h-4 items-center justify-center gap-1 bg-[#bdbdb4] rounded-sm">
                        <div className="inline-flex h-6 items-center justify-center mt-[-4.00px] mb-[-4.00px]">
                          <div className="w-fit [font-family:'Font_Awesome_6_Pro-Regular',Helvetica] font-normal text-[#fbfbfa] text-[10px] tracking-[0] leading-[12.0px] whitespace-nowrap">
                            dollar
                          </div>
                        </div>

                        <div className="w-fit [font-family:'Arial-Regular',Helvetica] font-normal text-[#fbfbfa] text-xs tracking-[0] leading-[14px] whitespace-nowrap">
                          / mt
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  className="w-11 h-11 rounded-lg border border-solid border-[#dadad2]"
                >
                  <RotateCcwIcon className="h-5 w-5 text-[#33332a]" />
                </Button>
              </div>

              <div className="w-11 h-11 opacity-0">
                <div className="h-11 rounded-lg overflow-hidden border border-solid border-[#dadad2]">
                  <div className="flex w-5 h-5 items-center justify-center relative top-3 left-3">
                    <div className="relative w-fit [font-family:'Font_Awesome_6_Pro-Regular',Helvetica] font-normal text-[#33332a] text-sm tracking-[0] leading-[16.8px] whitespace-nowrap">
                      BAR-CHART
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Risk Cards Section */}
          <div className="w-full h-[615px]">
            <div className="flex w-full items-center gap-6">
              {riskCards.map((card) => (
                <Card
                  key={card.id}
                  className="flex-1 p-6 bg-[#f4f4f1] rounded-xl bg-cover bg-center"
                  style={{ backgroundImage: `url(${card.bgImage})` }}
                >
                  <CardHeader className="p-0 flex justify-between items-center">
                    <div className="flex items-center gap-[18px]">
                      <div className="flex w-10 h-10 items-center justify-center p-2.5 rounded-[999px] border border-solid border-[#dadad2]">
                        <div className="flex w-6 h-6 items-center justify-center gap-2 p-2 mt-[-2.00px] mb-[-2.00px] ml-[-2.00px] mr-[-2.00px] rounded-lg">
                          {card.icon}
                        </div>
                      </div>

                      <div className="w-fit mt-[-1.00px] text-[#33332a] text-[length:var(--typography-subheadings-lg-font-size)] tracking-[var(--typography-subheadings-lg-letter-spacing)] leading-[var(--typography-subheadings-lg-line-height)] font-typography-subheadings-lg font-[number:var(--typography-subheadings-lg-font-weight)] [font-style:var(--typography-subheadings-lg-font-style)] whitespace-pre-line">
                        {card.title}
                      </div>
                    </div>

                    <Badge className="bg-white text-[#33332a] px-4 py-2.5 rounded-[30px]">
                      {card.badge}
                    </Badge>
                  </CardHeader>

                  <CardContent className="p-0 mt-4 h-[171px] relative">
                    <div className="inline-flex items-center gap-[29px] relative top-9">
                      <div className="flex flex-col w-[111px] items-start">
                        <div className="inline-flex items-end">
                          <div className="relative w-[79px] h-20 overflow-hidden">
                            <div className="relative w-fit font-typography-dislpay-large font-[number:var(--typography-dislpay-large-font-weight)] text-[#44c26d] text-[length:var(--typography-dislpay-large-font-size)] tracking-[var(--typography-dislpay-large-letter-spacing)] leading-[var(--typography-dislpay-large-line-height)] whitespace-nowrap [font-style:var(--typography-dislpay-large-font-style)]">
                              {card.profitValue}
                            </div>
                          </div>

                          <div className="text-[#838378] text-[length:var(--typography-heading-h5-font-size)] tracking-[var(--typography-heading-h5-letter-spacing)] leading-[var(--typography-heading-h5-line-height)] w-fit font-typography-heading-h5 font-[number:var(--typography-heading-h5-font-weight)] whitespace-nowrap [font-style:var(--typography-heading-h5-font-style)]">
                            %
                          </div>
                        </div>

                        <div className="self-stretch text-[#33332a] text-[length:var(--typography-lable-md-font-size)] tracking-[var(--typography-lable-md-letter-spacing)] leading-[var(--typography-lable-md-line-height)] font-typography-lable-md font-[number:var(--typography-lable-md-font-weight)] [font-style:var(--typography-lable-md-font-style)]">
                          {card.profitLabel}
                        </div>
                      </div>

                      {card.chartSrc && (
                        <img
                          className="absolute w-[60px] h-[60px] top-[19px] left-[263px]"
                          alt="Chart"
                          src={card.chartSrc}
                        />
                      )}

                      {card.chartIcon && (
                        <div className="flex w-[60px] h-[60px] items-center justify-center p-2.5 absolute top-[19px] left-[266px] bg-[#e9e9e4] rounded-[999px]">
                          <div className="flex w-6 h-6 items-center justify-center gap-2 p-2 rounded-lg">
                            {card.chartIcon}
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>

                  <div className="flex flex-col items-start gap-2.5 pt-2 pb-6 px-0 rounded-[20px]">
                    <div
                      className={`flex items-center ${card.id === 1 ? "justify-center gap-3 px-6" : "justify-between px-5"} py-0 self-stretch w-full`}
                    >
                      <div className="flex flex-col max-w-20 items-center gap-1 flex-1 grow">
                        <div className="w-fit mt-[-1.00px] font-typography-lable-sm font-[number:var(--typography-lable-sm-font-weight)] text-[#838378] text-[length:var(--typography-lable-sm-font-size)] tracking-[var(--typography-lable-sm-letter-spacing)] leading-[var(--typography-lable-sm-line-height)] whitespace-nowrap [font-style:var(--typography-lable-sm-font-style)]">
                          Physical
                        </div>

                        <div className="w-fit font-typography-lable-lg font-[number:var(--typography-lable-lg-font-weight)] text-[#44c26d] text-[length:var(--typography-lable-lg-font-size)] tracking-[var(--typography-lable-lg-letter-spacing)] leading-[var(--typography-lable-lg-line-height)] whitespace-nowrap [font-style:var(--typography-lable-lg-font-style)]">
                          {card.physicalValue}
                        </div>
                      </div>

                      {card.futuresValue && (
                        <div className="flex flex-col max-w-20 items-center gap-1 flex-1 grow">
                          <div className="w-fit mt-[-1.00px] font-typography-lable-sm font-[number:var(--typography-lable-sm-font-weight)] text-[#838378] text-[length:var(--typography-lable-sm-font-size)] tracking-[var(--typography-lable-sm-letter-spacing)] leading-[var(--typography-lable-sm-line-height)] whitespace-nowrap [font-style:var(--typography-lable-sm-font-style)]">
                            {card.id === 2 ? "Futures" : "Premium"}
                          </div>

                          <div
                            className={`w-fit font-typography-lable-lg font-[number:var(--typography-lable-lg-font-weight)] ${card.id === 3 ? "text-[#f44336]" : "text-[#44c26d]"} text-[length:var(--typography-lable-lg-font-size)] tracking-[var(--typography-lable-lg-letter-spacing)] leading-[var(--typography-lable-lg-line-height)] whitespace-nowrap [font-style:var(--typography-lable-lg-font-style)]`}
                          >
                            {card.id === 2
                              ? card.futuresValue
                              : card.premiumValue}
                          </div>
                        </div>
                      )}

                      {card.netProfitValue && (
                        <div className="flex flex-col max-w-20 items-center gap-1 flex-1 grow">
                          <div className="w-fit mt-[-1.00px] font-typography-lable-sm font-[number:var(--typography-lable-sm-font-weight)] text-[#838378] text-[length:var(--typography-lable-sm-font-size)] tracking-[var(--typography-lable-sm-letter-spacing)] leading-[var(--typography-lable-sm-line-height)] whitespace-nowrap [font-style:var(--typography-lable-sm-font-style)]">
                            Net Profit
                          </div>

                          <div className="w-fit font-typography-lable-lg font-[number:var(--typography-lable-lg-font-weight)] text-[#44c26d] text-[length:var(--typography-lable-lg-font-size)] tracking-[var(--typography-lable-lg-letter-spacing)] leading-[var(--typography-lable-lg-line-height)] whitespace-nowrap [font-style:var(--typography-lable-lg-font-style)]">
                            {card.netProfitValue}
                          </div>
                        </div>
                      )}

                      {card.optionCalledValue && (
                        <div className="flex flex-col max-w-20 items-center gap-1 flex-1 grow">
                          <div className="w-fit mt-[-1.00px] ml-[-3.25px] mr-[-3.25px] font-typography-lable-sm font-[number:var(--typography-lable-sm-font-weight)] text-[#838378] text-[length:var(--typography-lable-sm-font-size)] tracking-[var(--typography-lable-sm-letter-spacing)] leading-[var(--typography-lable-sm-line-height)] whitespace-nowrap [font-style:var(--typography-lable-sm-font-style)]">
                            Option Called
                          </div>

                          <div className="w-fit font-typography-lable-lg font-[number:var(--typography-lable-lg-font-weight)] text-[#44c26d] text-[length:var(--typography-lable-lg-font-size)] tracking-[var(--typography-lable-lg-letter-spacing)] leading-[var(--typography-lable-lg-line-height)] whitespace-nowrap [font-style:var(--typography-lable-lg-font-style)]">
                            {card.optionCalledValue}
                          </div>
                        </div>
                      )}
                    </div>

                    <div
                      className={`flex h-[183px] items-start ${card.id === 1 ? "justify-center gap-3 px-6" : card.id === 2 ? "justify-between px-5" : "gap-3"} relative self-stretch w-full`}
                    >
                      <div className="relative flex-1 max-w-20 grow self-stretch">
                        <div className="relative w-20 h-1 top-[85px] bg-[#33332a] rounded-[16px_16px_0px_0px]" />
                      </div>

                      {card.id === 2 && (
                        <>
                          <div className="relative flex-1 max-w-20 grow self-stretch">
                            <div className="relative w-20 h-[42px] top-[47px] bg-[#838378] rounded-[16px_16px_0px_0px]" />
                          </div>

                          <div className="relative flex-1 max-w-20 grow self-stretch">
                            <div className="relative w-20 h-[47px] top-[42px] bg-[#53e683] rounded-[16px_16px_0px_0px]" />
                          </div>
                        </>
                      )}

                      {card.id === 3 && (
                        <>
                          <div className="relative flex-1 max-w-20 grow self-stretch">
                            <div className="w-[72px] h-[21px] bg-[#dadad2] relative top-[94px] rounded-[0px_0px_16px_16px]" />
                          </div>

                          <div className="relative flex-1 max-w-20 grow self-stretch">
                            <div className="relative w-[73px] h-[30px] top-[59px] bg-[#53e683] rounded-[16px_16px_0px_0px]" />
                          </div>

                          <div className="relative flex-1 max-w-20 grow self-stretch">
                            <img
                              className="absolute w-[72px] h-[43px] top-[46px] left-0"
                              alt="Positive"
                              src="public/positive-3.png"
                            />
                          </div>
                        </>
                      )}

                      <div
                        className={`absolute h-px top-[91px] ${card.id === 1 ? "w-[198px] left-16" : "w-[326px] left-0"} bg-[#d9d9d9]`}
                      />
                    </div>
                  </div>

                  <CardFooter className="p-0 flex-col items-start gap-2.5">
                    <Separator className="w-full bg-[#dadad2]" />
                    <div className="flex flex-col items-start gap-2 self-stretch w-full">
                      <p className="self-stretch mt-[-1.00px] font-typography-paragraph-md font-[number:var(--typography-paragraph-md-font-weight)] text-black text-[length:var(--typography-paragraph-md-font-size)] tracking-[var(--typography-paragraph-md-letter-spacing)] leading-[var(--typography-paragraph-md-line-height)] [font-style:var(--typography-paragraph-md-font-style)]">
                        {card.description}
                      </p>

                      <div
                        className={`${card.showPriceTag ? "w-[92px]" : "w-[92px] opacity-0"} h-[22px]`}
                      >
                        <Badge
                          variant="outline"
                          className="px-2 py-1 bg-[#dadad2] rounded-[30px]"
                        >
                          <span className="w-fit mt-[-1.00px] text-[#33332a] text-[length:var(--typography-lable-sm-font-size)] tracking-[var(--typography-lable-sm-letter-spacing)] leading-[var(--typography-lable-sm-line-height)] whitespace-nowrap font-typography-lable-sm font-[number:var(--typography-lable-sm-font-weight)] [font-style:var(--typography-lable-sm-font-style)]">
                            {card.strikePrice
                              ? "Strike price at $52.5"
                              : "Price at $52.5"}
                          </span>
                        </Badge>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            className="h-10 gap-1 pl-5 pr-6 py-1 rounded-[99px] border border-solid border-[#dadad2]"
          >
            <ArrowLeftIcon className="h-5 w-5 text-[#49493c]" />
            <span className="font-typography-lable-sm font-[number:var(--typography-lable-sm-font-weight)] text-[#49493c] text-[length:var(--typography-lable-sm-font-size)] tracking-[var(--typography-lable-sm-letter-spacing)] leading-[var(--typography-lable-sm-line-height)] whitespace-nowrap [font-style:var(--typography-lable-sm-font-style)]">
              Back
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
