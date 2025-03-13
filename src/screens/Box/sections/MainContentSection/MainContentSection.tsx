import {
  ArrowLeftIcon,
  FileLockIcon,
  FileTextIcon,
  LockIcon,
  RotateCcwIcon,
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

export const MainContentSection = (): JSX.Element => {
  // Data for risk assessment cards
  const riskCards = [
    {
      title: "BUSINESS\nAS USUAL",
      icon: <StarIcon className="w-6 h-6 text-[#49493c]" />,
      badge: "Risk approach",
      profitLabel: "Predicted Profit",
      profitValue: "-3",
      profitColor: "#f44336",
      physical: "-$80.000",
      physicalColor: "#f44336",
      futures: null,
      premium: null,
      netProfit: null,
      optionCalled: null,
      description: "No price protection, margins at risk if costs rise.",
      priceTag: false,
      backgroundImage: "url(public/business-as-usual-4.png)",
      chartComponent: "public/component-10-2.svg",
    },
    {
      title: "FUTURES\nCONTRACT",
      icon: <FileLockIcon className="w-6 h-6 text-[#33332a]" />,
      badge: "Fixed",
      profitLabel: "Secured Margin",
      profitValue: "5",
      profitColor: "#44c26d",
      physical: "-$80.000",
      physicalColor: "#f44336",
      futures: "$300.000",
      futuresColor: "#44c26d",
      netProfit: "$220.000",
      netProfitColor: "#44c26d",
      premium: null,
      optionCalled: null,
      description:
        "Fixes a future price, reducing risk but requiring commitment",
      priceTag: true,
      backgroundImage: "url(public/futures-contract-4.png)",
      lockIcon: <LockIcon className="w-6 h-6 text-[#44c26d]" />,
    },
    {
      title: "OPTION",
      icon: <FileTextIcon className="w-6 h-6 text-[#33332a]" />,
      badge: "Flexible",
      profitLabel: "Option Premium",
      profitValue: "7",
      profitColor: "#44c26d",
      physical: "-$80.000",
      physicalColor: "#f44336",
      futures: null,
      premium: "-$88.200",
      premiumColor: "#f44336",
      netProfit: "$131.800",
      netProfitColor: "#44c26d",
      optionCalled: "$300.000",
      optionCalledColor: "#44c26d",
      description:
        "Provides flexibility with downside protection at a premium.",
      priceTag: true,
      priceTagText: "Strike price at $52.5",
      backgroundImage: "url(public/option-4.png)",
      fileIcon: <FileTextIcon className="w-6 h-6 text-[#44c26d]" />,
    },
  ];

  return (
    <div className="w-full h-[885px] bg-[#fbfbfa] overflow-y-scroll">
      <div className="flex flex-col items-center">
        <h3 className="mt-[31px] font-typography-heading-h3 font-[number:var(--typography-heading-h3-font-weight)] text-[#101218] text-[length:var(--typography-heading-h3-font-size)] tracking-[var(--typography-heading-h3-letter-spacing)] leading-[var(--typography-heading-h3-line-height)] whitespace-nowrap [font-style:var(--typography-heading-h3-font-style)]">
          Risk assessment
        </h3>

        <div className="flex flex-col w-full max-w-[1170px] items-center gap-6 mt-[22px]">
          {/* Price Slider Section */}
          <div className="flex flex-col items-start gap-6 self-stretch w-full">
            <div className="w-full h-[70px] flex items-end justify-between">
              <div className="flex h-[70px] items-end gap-2">
                <div className="flex flex-col w-[286px] items-start gap-2">
                  <div className="self-stretch mt-[-1.00px] text-[#49493c] text-[length:var(--typography-lable-sm-font-size)] tracking-[var(--typography-lable-sm-letter-spacing)] leading-[var(--typography-lable-sm-line-height)] relative font-typography-lable-sm font-[number:var(--typography-lable-sm-font-weight)] [font-style:var(--typography-lable-sm-font-style)]">
                    Projected&nbsp;&nbsp;Spot Price
                  </div>

                  <div className="flex h-11 items-center gap-4 px-2 py-0 relative self-stretch w-full rounded-lg border border-solid border-[#dadad2]">
                    <div className="flex items-center gap-4 relative flex-1 grow bg-[#bdbdb4] rounded-[999px]">
                      <div className="relative flex-1 grow h-1 bg-[#dadad2] rounded-[30px]">
                        <div className="relative w-48 h-3 -top-1">
                          <div className="w-[157px] flex h-1 items-center justify-end absolute top-1 left-0 bg-[#33332a] rounded-[60px]">
                            <div className="relative w-3 h-3 mt-[-4.00px] mb-[-4.00px] bg-white rounded-md border-2 border-solid border-[#33332a]" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1">
                      <div className="relative w-fit mt-[-1.00px] font-typography-lable-md font-[number:var(--typography-lable-md-font-weight)] text-[#33332a] text-[length:var(--typography-lable-md-font-size)] tracking-[var(--typography-lable-md-letter-spacing)] leading-[var(--typography-lable-md-line-height)] whitespace-nowrap [font-style:var(--typography-lable-md-font-style)]">
                        60
                      </div>

                      <div className="flex w-[38px] h-4 items-center justify-center gap-1 relative bg-[#bdbdb4] rounded-sm">
                        <div className="inline-flex h-6 items-center justify-center relative mt-[-4.00px] mb-[-4.00px]">
                          <div className="relative w-fit [font-family:'Font_Awesome_6_Pro-Regular',Helvetica] font-normal text-[#fbfbfa] text-[10px] tracking-[0] leading-[12.0px] whitespace-nowrap">
                            dollar
                          </div>
                        </div>

                        <div className="relative w-fit [font-family:'Arial-Regular',Helvetica] font-normal text-[#fbfbfa] text-xs tracking-[0] leading-[14px] whitespace-nowrap">
                          / mt
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  className="h-11 w-11 rounded-lg border border-solid border-[#dadad2]"
                >
                  <RotateCcwIcon className="h-5 w-5 text-[#33332a]" />
                </Button>
              </div>
            </div>
          </div>

          {/* Risk Assessment Cards */}
          <div className="w-full h-[615px]">
            <div className="flex w-full items-center gap-6">
              {riskCards.map((card, index) => (
                <Card
                  key={index}
                  className="flex-1 p-6 bg-[#f4f4f1] rounded-xl bg-cover bg-center flex flex-col items-start gap-px"
                  style={{ backgroundImage: card.backgroundImage }}
                >
                  <CardHeader className="p-0 w-full">
                    <div className="flex items-center justify-between w-full">
                      <div className="inline-flex items-center gap-[18px]">
                        <div className="flex w-10 h-10 items-center justify-center p-2.5 rounded-[999px] border border-solid border-[#dadad2]">
                          {card.icon}
                        </div>
                        <div className="w-fit mt-[-1.00px] text-[#33332a] text-[length:var(--typography-subheadings-lg-font-size)] tracking-[var(--typography-subheadings-lg-letter-spacing)] leading-[var(--typography-subheadings-lg-line-height)] font-typography-subheadings-lg font-[number:var(--typography-subheadings-lg-font-weight)] [font-style:var(--typography-subheadings-lg-font-style)] whitespace-pre-line">
                          {card.title}
                        </div>
                      </div>
                      <Badge className="bg-white text-[#33332a] px-4 py-2.5 rounded-[30px]">
                        {card.badge}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="p-0 w-full flex-1 relative">
                    <div className="inline-flex items-center gap-[29px] relative top-9">
                      <div className="flex flex-col w-[111px] items-start">
                        <div className="inline-flex items-end">
                          <div className="relative w-[79px] h-20 overflow-hidden">
                            <div
                              className="relative"
                              style={{
                                color: card.profitColor,
                                top:
                                  card.profitValue === "5"
                                    ? "-554px"
                                    : card.profitValue === "7"
                                      ? "-392px"
                                      : "-154px",
                              }}
                            >
                              <div className="mt-[-1.00px] text-[length:var(--typography-dislpay-large-font-size)] tracking-[var(--typography-dislpay-large-letter-spacing)] leading-[var(--typography-dislpay-large-line-height)] w-fit font-typography-dislpay-large font-[number:var(--typography-dislpay-large-font-weight)] whitespace-nowrap [font-style:var(--typography-dislpay-large-font-style)]">
                                {card.profitValue}
                              </div>
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

                      {index === 0 && (
                        <img
                          className="absolute w-[60px] h-[60px] top-[19px] left-[263px]"
                          alt="Component"
                          src="public/component-10-2.svg"
                        />
                      )}

                      {index === 1 && (
                        <div className="flex w-[60px] h-[60px] items-center justify-center p-2.5 absolute top-14 left-[266px] bg-[#e9e9e4] rounded-[999px]">
                          {card.lockIcon}
                        </div>
                      )}

                      {index === 2 && (
                        <div className="flex w-[60px] h-[60px] items-center justify-center p-2.5 absolute top-[19px] left-[266px] bg-[#e9e9e4] rounded-[999px]">
                          {card.fileIcon}
                        </div>
                      )}
                    </div>
                  </CardContent>

                  <div className="flex flex-col items-start gap-2.5 pt-2 pb-6 px-0 w-full rounded-[20px]">
                    <div
                      className={`flex items-center w-full ${index === 0 ? "justify-center gap-3 px-6" : "justify-between px-5"}`}
                    >
                      <div className="flex flex-col max-w-20 items-center gap-1 flex-1">
                        <div className="w-fit mt-[-1.00px] font-typography-lable-sm font-[number:var(--typography-lable-sm-font-weight)] text-[#838378] text-[length:var(--typography-lable-sm-font-size)] tracking-[var(--typography-lable-sm-letter-spacing)] leading-[var(--typography-lable-sm-line-height)] whitespace-nowrap [font-style:var(--typography-lable-sm-font-style)]">
                          Physical
                        </div>
                        <div
                          className={`text-[${card.physicalColor}] text-[length:var(--typography-lable-lg-font-size)] tracking-[var(--typography-lable-lg-letter-spacing)] leading-[var(--typography-lable-lg-line-height)] w-fit font-typography-lable-lg font-[number:var(--typography-lable-lg-font-weight)] whitespace-nowrap [font-style:var(--typography-lable-lg-font-style)]`}
                        >
                          {card.physical}
                        </div>
                      </div>

                      {card.futures && (
                        <div className="flex flex-col max-w-20 items-center gap-1 flex-1">
                          <div className="w-fit mt-[-1.00px] font-typography-lable-sm font-[number:var(--typography-lable-sm-font-weight)] text-[#838378] text-[length:var(--typography-lable-sm-font-size)] tracking-[var(--typography-lable-sm-letter-spacing)] leading-[var(--typography-lable-sm-line-height)] whitespace-nowrap [font-style:var(--typography-lable-sm-font-style)]">
                            Futures
                          </div>
                          <div
                            className={`text-[${card.futuresColor}] text-[length:var(--typography-lable-lg-font-size)] tracking-[var(--typography-lable-lg-letter-spacing)] leading-[var(--typography-lable-lg-line-height)] w-fit font-typography-lable-lg font-[number:var(--typography-lable-lg-font-weight)] whitespace-nowrap [font-style:var(--typography-lable-lg-font-style)]`}
                          >
                            {card.futures}
                          </div>
                        </div>
                      )}

                      {card.premium && (
                        <div className="flex flex-col max-w-20 items-center gap-1 flex-1">
                          <div className="w-fit mt-[-1.00px] font-typography-lable-sm font-[number:var(--typography-lable-sm-font-weight)] text-[#838378] text-[length:var(--typography-lable-sm-font-size)] tracking-[var(--typography-lable-sm-letter-spacing)] leading-[var(--typography-lable-sm-line-height)] whitespace-nowrap [font-style:var(--typography-lable-sm-font-style)]">
                            Premium
                          </div>
                          <div
                            className={`text-[${card.premiumColor}] text-[length:var(--typography-lable-lg-font-size)] tracking-[var(--typography-lable-lg-letter-spacing)] leading-[var(--typography-lable-lg-line-height)] w-fit font-typography-lable-lg font-[number:var(--typography-lable-lg-font-weight)] whitespace-nowrap [font-style:var(--typography-lable-lg-font-style)]`}
                          >
                            {card.premium}
                          </div>
                        </div>
                      )}

                      {card.netProfit && (
                        <div className="flex flex-col max-w-20 items-center gap-1 flex-1">
                          <div className="w-fit mt-[-1.00px] font-typography-lable-sm font-[number:var(--typography-lable-sm-font-weight)] text-[#838378] text-[length:var(--typography-lable-sm-font-size)] tracking-[var(--typography-lable-sm-letter-spacing)] leading-[var(--typography-lable-sm-line-height)] whitespace-nowrap [font-style:var(--typography-lable-sm-font-style)]">
                            Net Profit
                          </div>
                          <div
                            className={`text-[${card.netProfitColor}] text-[length:var(--typography-lable-lg-font-size)] tracking-[var(--typography-lable-lg-letter-spacing)] leading-[var(--typography-lable-lg-line-height)] w-fit font-typography-lable-lg font-[number:var(--typography-lable-lg-font-weight)] whitespace-nowrap [font-style:var(--typography-lable-lg-font-style)]`}
                          >
                            {card.netProfit}
                          </div>
                        </div>
                      )}

                      {card.optionCalled && (
                        <div className="flex flex-col max-w-20 items-center gap-1 flex-1">
                          <div className="w-fit mt-[-1.00px] ml-[-3.25px] mr-[-3.25px] font-typography-lable-sm font-[number:var(--typography-lable-sm-font-weight)] text-[#838378] text-[length:var(--typography-lable-sm-font-size)] tracking-[var(--typography-lable-sm-letter-spacing)] leading-[var(--typography-lable-sm-line-height)] whitespace-nowrap [font-style:var(--typography-lable-sm-font-style)]">
                            Option Called
                          </div>
                          <div
                            className={`text-[${card.optionCalledColor}] text-[length:var(--typography-lable-lg-font-size)] tracking-[var(--typography-lable-lg-letter-spacing)] leading-[var(--typography-lable-lg-line-height)] w-fit font-typography-lable-lg font-[number:var(--typography-lable-lg-font-weight)] whitespace-nowrap [font-style:var(--typography-lable-lg-font-style)]`}
                          >
                            {card.optionCalled}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Chart section */}
                    <div
                      className={`flex h-[183px] items-start w-full ${index === 0 ? "justify-center gap-3 px-6" : index === 1 ? "justify-between px-5" : "gap-3"}`}
                    >
                      <div className="relative flex-1 max-w-20 grow self-stretch">
                        <div className="w-20 h-[17px] bg-[#282828] relative top-[94px] rounded-[0px_0px_16px_16px]" />
                      </div>

                      {index === 1 && (
                        <>
                          <div className="relative flex-1 max-w-20 grow self-stretch">
                            <div className="relative w-20 h-[63px] top-[26px] bg-[#838378] rounded-[16px_16px_0px_0px]" />
                          </div>
                          <div className="relative flex-1 max-w-20 grow self-stretch">
                            <div className="relative w-20 h-[47px] top-[42px] bg-[#53e683] rounded-[16px_16px_0px_0px]" />
                          </div>
                        </>
                      )}

                      {index === 2 && (
                        <>
                          <div className="relative flex-1 max-w-20 grow self-stretch">
                            <div className="w-[72px] h-[21px] bg-[#dadad2] relative top-[94px] rounded-[0px_0px_16px_16px]" />
                          </div>
                          <div className="relative flex-1 max-w-20 grow self-stretch">
                            <div className="relative w-[73px] h-[30px] top-[59px] bg-[#53e683] rounded-[16px_16px_0px_0px]" />
                          </div>
                          <div className="relative flex-1 max-w-20 grow self-stretch">
                            <img
                              className="absolute w-[72px] h-16 top-[25px] left-0"
                              alt="Positive"
                              src="public/positive-3.png"
                            />
                          </div>
                        </>
                      )}

                      <div
                        className={`absolute h-px top-[91px] bg-[#d9d9d9] ${index === 0 ? "w-[198px] left-16" : "w-[326px] left-0"}`}
                      />
                    </div>
                  </div>

                  <CardFooter className="p-0 flex flex-col items-start gap-2.5 w-full">
                    <Separator className="w-full bg-[#dadad2]" />
                    <div className="flex flex-col items-start gap-2 w-full">
                      <p className="mt-[-1.00px] font-typography-paragraph-md font-[number:var(--typography-paragraph-md-font-weight)] text-black text-[length:var(--typography-paragraph-md-font-size)] tracking-[var(--typography-paragraph-md-letter-spacing)] leading-[var(--typography-paragraph-md-line-height)] [font-style:var(--typography-paragraph-md-font-style)]">
                        {card.description}
                      </p>

                      {card.priceTag && (
                        <Badge
                          variant="outline"
                          className="bg-[#dadad2] rounded-[30px] px-2 py-1"
                        >
                          <span className="mt-[-1.00px] text-[#33332a] text-[length:var(--typography-lable-sm-font-size)] tracking-[var(--typography-lable-sm-letter-spacing)] leading-[var(--typography-lable-sm-line-height)] whitespace-nowrap font-typography-lable-sm font-[number:var(--typography-lable-sm-font-weight)] [font-style:var(--typography-lable-sm-font-style)]">
                            {card.priceTagText || "Price at $52.5"}
                          </span>
                        </Badge>
                      )}
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          {/* Back Button */}
          <Button
            variant="outline"
            className="h-10 pl-5 pr-6 py-1 rounded-[99px] border border-solid border-[#dadad2] flex items-center gap-1"
          >
            <ArrowLeftIcon className="w-5 h-5 text-[#49493c]" />
            <span className="font-typography-lable-sm font-[number:var(--typography-lable-sm-font-weight)] text-[#49493c] text-[length:var(--typography-lable-sm-font-size)] tracking-[var(--typography-lable-sm-letter-spacing)] leading-[var(--typography-lable-sm-line-height)] whitespace-nowrap [font-style:var(--typography-lable-sm-font-style)]">
              Back
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};
