import {
  ArrowLeftIcon,
  FileIcon,
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

export const ComponentNodeSection = (): JSX.Element => {
  // Data for profit percentages
  const profitPercentages = [
    { value: "-7", color: "text-[#f44336]" },
    { value: "-5", color: "text-[#f44336]" },
    { value: "-3", color: "text-[#f44336]" },
    { value: "0", color: "text-[#f44336]" },
    { value: "1", color: "text-[#44c26d]" },
    { value: "5", color: "text-[#44c26d]" },
    { value: "7", color: "text-[#44c26d]" },
    { value: "9", color: "text-[#44c26d]" },
    { value: "10", color: "text-[#44c26d]" },
    { value: "13", color: "text-[#44c26d]" },
    { value: "15", color: "text-[#44c26d]" },
    { value: "17", color: "text-[#44c26d]" },
  ];

  // Card data
  const riskCards = [
    {
      title: "BUSINESS\nAS USUAL",
      badge: "Risk approach",
      icon: <FileTextIcon className="w-6 h-6 text-[#49493c]" />,
      metricTitle: "Predicted Profit",
      chartIcon: "public/component-10-2.svg",
      physical: "-$180.000",
      netProfit: null,
      futures: null,
      optionCalled: null,
      premium: null,
      description: "No price protection, margins at risk if costs rise.",
      priceTag: false,
      bgImage: "public/business-as-usual-5.png",
    },
    {
      title: "FUTURES\nCONTRACT",
      badge: "Fixed",
      icon: <FileLockIcon className="w-6 h-6 text-[#33332a]" />,
      metricTitle: "Secured Margin",
      chartIcon: <LockIcon className="w-6 h-6 text-[#44c26d]" />,
      physical: "-$180.000",
      futures: "$400.000",
      netProfit: "$220.000",
      optionCalled: null,
      premium: null,
      description:
        "Fixes a future price, reducing risk but requiring commitment",
      priceTag: true,
      bgImage: "public/futures-contract-5.png",
    },
    {
      title: "OPTION",
      badge: "Flexible",
      icon: <FileIcon className="w-6 h-6 text-[#33332a]" />,
      metricTitle: "Option Premium",
      chartIcon: <FileIcon className="w-6 h-6 text-[#44c26d]" />,
      physical: "-$180.000",
      premium: "-$88.200",
      netProfit: "$131.800",
      optionCalled: "$400.000",
      futures: null,
      description:
        "Provides flexibility with downside protection at a premium.",
      priceTag: true,
      strikePrice: true,
      bgImage: "public/option-5.png",
    },
  ];

  return (
    <section className="w-full h-[885px] bg-[#fbfbfa] overflow-y-scroll">
      <div className="flex flex-col items-center">
        <h3 className="mt-[31px] font-typography-heading-h3 font-[number:var(--typography-heading-h3-font-weight)] text-[#101218] text-[length:var(--typography-heading-h3-font-size)] tracking-[var(--typography-heading-h3-letter-spacing)] leading-[var(--typography-heading-h3-line-height)] [font-style:var(--typography-heading-h3-font-style)]">
          Risk assessment
        </h3>

        <div className="flex flex-col w-full max-w-[1170px] items-center gap-6 mt-[53px]">
          {/* Price Slider Control */}
          <div className="flex flex-col items-start gap-6 self-stretch w-full">
            <div className="w-full h-[70px] flex items-end justify-between">
              <div className="flex h-[70px] items-end gap-2">
                <div className="flex flex-col w-[286px] items-start gap-2">
                  <div className="self-stretch mt-[-1.00px] text-[#49493c] text-[length:var(--typography-lable-sm-font-size)] tracking-[var(--typography-lable-sm-letter-spacing)] leading-[var(--typography-lable-sm-line-height)] font-typography-lable-sm font-[number:var(--typography-lable-sm-font-weight)] [font-style:var(--typography-lable-sm-font-style)]">
                    Projected&nbsp;&nbsp;Spot Price
                  </div>

                  <div className="flex h-11 items-center gap-4 px-2 py-0 relative self-stretch w-full rounded-lg border border-solid border-[#dadad2]">
                    <div className="flex items-center gap-4 relative flex-1 grow bg-[#bdbdb4] rounded-[999px]">
                      <div className="relative flex-1 grow h-1 bg-[#dadad2] rounded-[30px]">
                        <div className="relative w-48 h-3 -top-1">
                          <div className="w-48 flex h-1 items-center justify-end absolute top-1 left-0 bg-[#33332a] rounded-[60px]">
                            <div className="relative w-3 h-3 mt-[-4.00px] mb-[-4.00px] bg-white rounded-md border-2 border-solid border-[#33332a]" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1">
                      <div className="w-fit mt-[-1.00px] font-typography-lable-md font-[number:var(--typography-lable-md-font-weight)] text-[#33332a] text-[length:var(--typography-lable-md-font-size)] tracking-[var(--typography-lable-md-letter-spacing)] leading-[var(--typography-lable-md-line-height)] whitespace-nowrap [font-style:var(--typography-lable-md-font-style)]">
                        63
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
                  <RotateCcwIcon className="w-5 h-5 text-[#33332a]" />
                </Button>
              </div>
            </div>
          </div>

          {/* Risk Cards */}
          <div className="w-full grid grid-cols-3 gap-6">
            {riskCards.map((card, index) => (
              <Card
                key={index}
                className="flex flex-col items-start gap-px p-6 bg-[#f4f4f1] rounded-xl bg-cover bg-center"
                style={{ backgroundImage: `url(${card.bgImage})` }}
              >
                <CardHeader className="p-0 w-full">
                  <div className="flex items-start justify-between w-full">
                    <div className="flex items-center gap-[18px]">
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

                <CardContent className="p-0 w-full h-[171px] relative mt-4">
                  <div className="inline-flex items-center gap-[29px] absolute top-9 left-0">
                    <div className="flex flex-col w-[111px] items-start">
                      <div className="flex items-end justify-between self-stretch w-full">
                        <div className="w-[87px] h-20 overflow-hidden">
                          <div className="inline-flex flex-col items-start">
                            {profitPercentages.map((percentage, i) => (
                              <div
                                key={i}
                                className={`w-fit font-typography-dislpay-large font-[number:var(--typography-dislpay-large-font-weight)] ${percentage.color} text-[length:var(--typography-dislpay-large-font-size)] tracking-[var(--typography-dislpay-large-letter-spacing)] leading-[var(--typography-dislpay-large-line-height)] whitespace-nowrap [font-style:var(--typography-dislpay-large-font-style)]`}
                              >
                                {percentage.value}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="text-[#838378] text-[length:var(--typography-heading-h5-font-size)] tracking-[var(--typography-heading-h5-letter-spacing)] leading-[var(--typography-heading-h5-line-height)] w-fit font-typography-heading-h5 font-[number:var(--typography-heading-h5-font-weight)] whitespace-nowrap [font-style:var(--typography-heading-h5-font-style)]">
                          %
                        </div>
                      </div>
                      <div className="self-stretch text-[#33332a] text-[length:var(--typography-lable-md-font-size)] tracking-[var(--typography-lable-md-letter-spacing)] leading-[var(--typography-lable-md-line-height)] font-typography-lable-md font-[number:var(--typography-lable-md-font-weight)] [font-style:var(--typography-lable-md-font-style)]">
                        {card.metricTitle}
                      </div>
                    </div>
                  </div>

                  <div className="flex w-[60px] h-[60px] items-center justify-center p-2.5 absolute top-14 left-[266px] bg-[#e9e9e4] rounded-[999px]">
                    {typeof card.chartIcon === "string" ? (
                      <img
                        className="w-[60px] h-[60px]"
                        alt="Chart icon"
                        src={card.chartIcon}
                      />
                    ) : (
                      card.chartIcon
                    )}
                  </div>
                </CardContent>

                <div className="flex flex-col items-start gap-2.5 pt-2 pb-6 px-0 w-full rounded-[20px]">
                  <div className="flex items-center justify-between w-full px-5 py-0">
                    {/* Physical */}
                    <div className="flex flex-col max-w-20 items-center gap-1 flex-1">
                      <div className="w-fit mt-[-1.00px] font-typography-lable-sm font-[number:var(--typography-lable-sm-font-weight)] text-[#838378] text-[length:var(--typography-lable-sm-font-size)] tracking-[var(--typography-lable-sm-letter-spacing)] leading-[var(--typography-lable-sm-line-height)] whitespace-nowrap [font-style:var(--typography-lable-sm-font-style)]">
                        Physical
                      </div>
                      <div className="text-[#f44336] text-[length:var(--typography-lable-lg-font-size)] tracking-[var(--typography-lable-lg-letter-spacing)] leading-[var(--typography-lable-lg-line-height)] w-fit font-typography-lable-lg font-[number:var(--typography-lable-lg-font-weight)] whitespace-nowrap [font-style:var(--typography-lable-lg-font-style)]">
                        {card.physical}
                      </div>
                    </div>

                    {/* Futures */}
                    {card.futures && (
                      <div className="flex flex-col max-w-20 items-center gap-1 flex-1">
                        <div className="w-fit mt-[-1.00px] font-typography-lable-sm font-[number:var(--typography-lable-sm-font-weight)] text-[#838378] text-[length:var(--typography-lable-sm-font-size)] tracking-[var(--typography-lable-sm-letter-spacing)] leading-[var(--typography-lable-sm-line-height)] whitespace-nowrap [font-style:var(--typography-lable-sm-font-style)]">
                          Futures
                        </div>
                        <div className="w-fit font-typography-lable-lg font-[number:var(--typography-lable-lg-font-weight)] text-[#44c26d] text-[length:var(--typography-lable-lg-font-size)] tracking-[var(--typography-lable-lg-letter-spacing)] leading-[var(--typography-lable-lg-line-height)] whitespace-nowrap [font-style:var(--typography-lable-lg-font-style)]">
                          {card.futures}
                        </div>
                      </div>
                    )}

                    {/* Premium */}
                    {card.premium && (
                      <div className="flex flex-col max-w-20 items-center gap-1 flex-1">
                        <div className="w-fit mt-[-1.00px] font-typography-lable-sm font-[number:var(--typography-lable-sm-font-weight)] text-[#838378] text-[length:var(--typography-lable-sm-font-size)] tracking-[var(--typography-lable-sm-letter-spacing)] leading-[var(--typography-lable-sm-line-height)] whitespace-nowrap [font-style:var(--typography-lable-sm-font-style)]">
                          Premium
                        </div>
                        <div className="text-[#f44336] text-[length:var(--typography-lable-lg-font-size)] tracking-[var(--typography-lable-lg-letter-spacing)] leading-[var(--typography-lable-lg-line-height)] w-fit font-typography-lable-lg font-[number:var(--typography-lable-lg-font-weight)] whitespace-nowrap [font-style:var(--typography-lable-lg-font-style)]">
                          {card.premium}
                        </div>
                      </div>
                    )}

                    {/* Net Profit */}
                    {card.netProfit && (
                      <div className="flex flex-col max-w-20 items-center gap-1 flex-1">
                        <div className="w-fit mt-[-1.00px] font-typography-lable-sm font-[number:var(--typography-lable-sm-font-weight)] text-[#838378] text-[length:var(--typography-lable-sm-font-size)] tracking-[var(--typography-lable-sm-letter-spacing)] leading-[var(--typography-lable-sm-line-height)] whitespace-nowrap [font-style:var(--typography-lable-sm-font-style)]">
                          Net Profit
                        </div>
                        <div className="w-fit font-typography-lable-lg font-[number:var(--typography-lable-lg-font-weight)] text-[#44c26d] text-[length:var(--typography-lable-lg-font-size)] tracking-[var(--typography-lable-lg-letter-spacing)] leading-[var(--typography-lable-lg-line-height)] whitespace-nowrap [font-style:var(--typography-lable-lg-font-style)]">
                          {card.netProfit}
                        </div>
                      </div>
                    )}

                    {/* Option Called */}
                    {card.optionCalled && (
                      <div className="flex flex-col max-w-20 items-center gap-1 flex-1">
                        <div className="w-fit mt-[-1.00px] font-typography-lable-sm font-[number:var(--typography-lable-sm-font-weight)] text-[#838378] text-[length:var(--typography-lable-sm-font-size)] tracking-[var(--typography-lable-sm-letter-spacing)] leading-[var(--typography-lable-sm-line-height)] whitespace-nowrap [font-style:var(--typography-lable-sm-font-style)]">
                          Option Called
                        </div>
                        <div className="w-fit font-typography-lable-lg font-[number:var(--typography-lable-lg-font-weight)] text-[#44c26d] text-[length:var(--typography-lable-lg-font-size)] tracking-[var(--typography-lable-lg-letter-spacing)] leading-[var(--typography-lable-lg-line-height)] whitespace-nowrap [font-style:var(--typography-lable-lg-font-style)]">
                          {card.optionCalled}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Chart area */}
                  <div className="flex h-[183px] items-start justify-between w-full px-5 py-0 relative">
                    <div className="flex-1 max-w-20 self-stretch relative">
                      <div className="w-20 h-[38px] bg-[#282828] absolute top-[94px] rounded-[0px_0px_16px_16px]" />
                    </div>

                    {(card.futures || card.premium) && (
                      <div className="flex-1 max-w-20 self-stretch relative">
                        {card.futures && (
                          <div className="w-20 h-[85px] absolute top-1 bg-[#838378] rounded-[16px_16px_0px_0px]" />
                        )}
                        {card.premium && (
                          <div className="w-[72px] h-[21px] absolute top-[94px] bg-[#dadad2] rounded-[0px_0px_16px_16px]" />
                        )}
                      </div>
                    )}

                    {card.netProfit && (
                      <div className="flex-1 max-w-20 self-stretch relative">
                        {index === 1 && (
                          <div className="w-20 h-[47px] absolute top-[42px] bg-[#53e683] rounded-[16px_16px_0px_0px]" />
                        )}
                        {index === 2 && (
                          <div className="w-[73px] h-[30px] absolute top-[59px] bg-[#53e683] rounded-[16px_16px_0px_0px]" />
                        )}
                      </div>
                    )}

                    {card.optionCalled && (
                      <div className="flex-1 max-w-20 self-stretch relative">
                        <img
                          className="absolute w-[72px] h-[84px] top-[5px] left-0"
                          alt="Positive"
                          src="public/positive-3.png"
                        />
                      </div>
                    )}

                    <div className="absolute w-full h-px top-[91px] left-0 bg-[#d9d9d9]" />
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
                          {card.strikePrice
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
          <Button
            variant="outline"
            className="h-10 gap-1 pl-5 pr-6 py-1 rounded-[99px] border border-solid border-[#dadad2]"
          >
            <ArrowLeftIcon className="w-5 h-5 text-[#49493c]" />
            <span className="font-typography-lable-sm font-[number:var(--typography-lable-sm-font-weight)] text-[#49493c] text-[length:var(--typography-lable-sm-font-size)] tracking-[var(--typography-lable-sm-letter-spacing)] leading-[var(--typography-lable-sm-line-height)] whitespace-nowrap [font-style:var(--typography-lable-sm-font-style)]">
              Back
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
