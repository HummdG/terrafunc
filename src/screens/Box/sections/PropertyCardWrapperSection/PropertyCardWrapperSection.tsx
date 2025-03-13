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

export const PropertyCardWrapperSection = (): JSX.Element => {
  // Data for the risk assessment cards
  const riskCards = [
    {
      title: "BUSINESS\nAS USUAL",
      type: "Risk approach",
      icon: <FileTextIcon className="w-6 h-6 text-[#49493c]" />,
      profitLabel: "Predicted Profit",
      profitValue: "-3",
      profitColor: "#f44336",
      physical: "$120.000",
      description: "No price protection, margins at risk if costs rise.",
      backgroundImage: "url(public/business-as-usual-2.png)",
      showPriceTag: false,
    },
    {
      title: "FUTURES\nCONTRACT",
      type: "Fixed",
      icon: <FileLockIcon className="w-6 h-6 text-[#33332a]" />,
      profitLabel: "Secured Margin",
      profitValue: "5",
      profitColor: "#44c26d",
      physical: "$120.000",
      futures: "$100.000",
      netProfit: "$220.000",
      description:
        "Fixes a future price, reducing risk but requiring commitment",
      backgroundImage: "url(public/futures-contract-2.png)",
      showPriceTag: true,
      priceTag: "Price at $52.5",
    },
    {
      title: "OPTION",
      type: "Flexible",
      icon: <FileIcon className="w-6 h-6 text-[#33332a]" />,
      profitLabel: "Option Premium",
      profitValue: "7",
      profitColor: "#44c26d",
      physical: "$120.000",
      premium: "-$88.200",
      netProfit: "$131.800",
      optionCalled: "$100.000",
      description:
        "Provides flexibility with downside protection at a premium.",
      backgroundImage: "url(public/option-2.png)",
      showPriceTag: true,
      priceTag: "Strike price at $52.5",
    },
  ];

  return (
    <section className="w-full h-[885px] bg-[#fbfbfa] overflow-y-scroll">
      <div className="flex flex-col items-center">
        <h3 className="mt-[31px] font-typography-heading-h3 font-[number:var(--typography-heading-h3-font-weight)] text-[#101218] text-[length:var(--typography-heading-h3-font-size)] tracking-[var(--typography-heading-h3-letter-spacing)] leading-[var(--typography-heading-h3-line-height)] [font-style:var(--typography-heading-h3-font-style)]">
          Risk assessment
        </h3>

        <div className="flex flex-col w-full max-w-[1170px] items-center gap-6 mt-[53px]">
          {/* Price Slider Section */}
          <div className="flex flex-col w-full items-start gap-6 relative">
            <div className="w-full h-[70px] flex items-end justify-between">
              <div className="flex h-[70px] items-end gap-2">
                <div className="flex flex-col w-[286px] items-start gap-2">
                  <label className="text-[#49493c] text-[length:var(--typography-lable-sm-font-size)] tracking-[var(--typography-lable-sm-letter-spacing)] leading-[var(--typography-lable-sm-line-height)] font-typography-lable-sm font-[number:var(--typography-lable-sm-font-weight)] [font-style:var(--typography-lable-sm-font-style)]">
                    Projected&nbsp;&nbsp;Spot Price
                  </label>

                  <div className="flex h-11 items-center gap-4 px-2 py-0 w-full rounded-lg border border-solid border-[#dadad2]">
                    <div className="flex items-center gap-4 flex-1 bg-[#bdbdb4] rounded-[999px]">
                      <div className="relative flex-1 h-1 bg-[#dadad2] rounded-[30px]">
                        <div className="relative w-48 h-3 -top-1">
                          <div className="w-[87px] flex h-1 items-center justify-end absolute top-1 left-0 bg-[#33332a] rounded-[60px]">
                            <div className="relative w-3 h-3 mt-[-4.00px] mb-[-4.00px] bg-white rounded-md border-2 border-solid border-[#33332a]" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1">
                      <div className="font-typography-lable-md font-[number:var(--typography-lable-md-font-weight)] text-[#33332a] text-[length:var(--typography-lable-md-font-size)] tracking-[var(--typography-lable-md-letter-spacing)] leading-[var(--typography-lable-md-line-height)] whitespace-nowrap [font-style:var(--typography-lable-md-font-style)]">
                        55
                      </div>

                      <Badge className="flex w-[38px] h-4 items-center justify-center gap-1 bg-[#bdbdb4] rounded-sm">
                        <span className="text-[#fbfbfa] text-[10px] whitespace-nowrap">
                          dollar
                        </span>
                        <span className="[font-family:'Arial-Regular',Helvetica] font-normal text-[#fbfbfa] text-xs tracking-[0] leading-[14px] whitespace-nowrap">
                          / mt
                        </span>
                      </Badge>
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

              <div className="w-11 h-11 opacity-0">
                <Button
                  variant="outline"
                  size="icon"
                  className="w-11 h-11 rounded-lg border border-solid border-[#dadad2]"
                >
                  <span className="text-[#33332a] text-sm">BAR-CHART</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Risk Cards Section */}
          <div className="w-full h-[615px]">
            <div className="flex w-full items-center gap-6">
              {riskCards.map((card, index) => (
                <Card
                  key={index}
                  className="flex-1 p-6 bg-[#f4f4f1] rounded-xl bg-cover bg-center"
                  style={{ backgroundImage: card.backgroundImage }}
                >
                  <CardHeader className="p-0 flex justify-between items-start">
                    <div className="flex items-center gap-[18px]">
                      <div className="flex w-10 h-10 items-center justify-center p-2.5 rounded-[999px] border border-solid border-[#dadad2] bg-white">
                        {card.icon}
                      </div>
                      <div className="font-typography-subheadings-lg font-[number:var(--typography-subheadings-lg-font-weight)] text-[#33332a] text-[length:var(--typography-subheadings-lg-font-size)] tracking-[var(--typography-subheadings-lg-letter-spacing)] leading-[var(--typography-subheadings-lg-line-height)] [font-style:var(--typography-subheadings-lg-font-style)] whitespace-pre-line">
                        {card.title}
                      </div>
                    </div>
                    <Badge className="bg-white text-[#33332a] px-4 py-2.5 rounded-[30px]">
                      <span className="font-typography-lable-md font-[number:var(--typography-lable-md-font-weight)] text-[length:var(--typography-lable-md-font-size)] tracking-[var(--typography-lable-md-letter-spacing)] leading-[var(--typography-lable-md-line-height)] [font-style:var(--typography-lable-md-font-style)]">
                        {card.type}
                      </span>
                    </Badge>
                  </CardHeader>

                  <CardContent className="p-0 mt-4 h-[171px] relative">
                    <div className="inline-flex items-center gap-[29px] relative top-9">
                      <div className="flex flex-col w-[111px] items-start">
                        <div className="inline-flex items-end">
                          <div className="h-20 overflow-hidden">
                            <span
                              className="font-typography-dislpay-large font-[number:var(--typography-dislpay-large-font-weight)] text-[length:var(--typography-dislpay-large-font-size)] tracking-[var(--typography-dislpay-large-letter-spacing)] leading-[var(--typography-dislpay-large-line-height)] whitespace-nowrap [font-style:var(--typography-dislpay-large-font-style)]"
                              style={{ color: card.profitColor }}
                            >
                              {card.profitValue}
                            </span>
                          </div>
                          <span className="text-[#838378] text-[length:var(--typography-heading-h5-font-size)] tracking-[var(--typography-heading-h5-letter-spacing)] leading-[var(--typography-heading-h5-line-height)] font-typography-heading-h5 font-[number:var(--typography-heading-h5-font-weight)] whitespace-nowrap [font-style:var(--typography-heading-h5-font-style)]">
                            %
                          </span>
                        </div>
                        <span className="font-typography-lable-md font-[number:var(--typography-lable-md-font-weight)] text-[#33332a] text-[length:var(--typography-lable-md-font-size)] tracking-[var(--typography-lable-md-letter-spacing)] leading-[var(--typography-lable-md-line-height)] [font-style:var(--typography-lable-md-font-style)]">
                          {card.profitLabel}
                        </span>
                      </div>
                    </div>

                    {index === 0 && (
                      <div className="flex w-[60px] h-[60px] items-center justify-center absolute top-[19px] left-[263px]">
                        <img
                          className="w-[60px] h-[60px]"
                          alt="Component"
                          src="public/component-10-2.svg"
                        />
                      </div>
                    )}

                    {index === 1 && (
                      <div className="flex w-[60px] h-[60px] items-center justify-center p-2.5 absolute top-14 left-[266px] bg-[#e9e9e4] rounded-[999px]">
                        <LockIcon className="w-6 h-6 text-[#44c26d]" />
                      </div>
                    )}

                    {index === 2 && (
                      <div className="flex w-[60px] h-[60px] items-center justify-center p-2.5 absolute top-[19px] left-[266px] bg-[#e9e9e4] rounded-[999px]">
                        <FileIcon className="w-6 h-6 text-[#44c26d]" />
                      </div>
                    )}
                  </CardContent>

                  <div className="flex flex-col items-start gap-2.5 pt-2 pb-6 px-0 w-full rounded-[20px]">
                    {index === 0 && (
                      <>
                        <div className="flex justify-center gap-3 px-6 py-0 items-center w-full">
                          <div className="flex flex-col max-w-20 items-center gap-1 flex-1">
                            <span className="font-typography-lable-sm font-[number:var(--typography-lable-sm-font-weight)] text-[#838378] text-[length:var(--typography-lable-sm-font-size)] tracking-[var(--typography-lable-sm-letter-spacing)] leading-[var(--typography-lable-sm-line-height)] whitespace-nowrap [font-style:var(--typography-lable-sm-font-style)]">
                              Physical
                            </span>
                            <span className="font-typography-lable-lg font-[number:var(--typography-lable-lg-font-weight)] text-[#44c26d] text-[length:var(--typography-lable-lg-font-size)] tracking-[var(--typography-lable-lg-letter-spacing)] leading-[var(--typography-lable-lg-line-height)] whitespace-nowrap [font-style:var(--typography-lable-lg-font-style)]">
                              {card.physical}
                            </span>
                          </div>
                        </div>

                        <div className="flex h-[183px] items-start justify-center gap-3 px-6 py-0 w-full relative">
                          <div className="relative flex-1 max-w-20 self-stretch">
                            <div className="relative w-20 h-[25px] top-16 bg-[#33332a] rounded-[16px_16px_0px_0px]" />
                          </div>
                          <div className="absolute w-[198px] h-px top-[91px] left-16 bg-[#d9d9d9]" />
                        </div>
                      </>
                    )}

                    {index === 1 && (
                      <>
                        <div className="flex justify-between px-5 py-0 items-center w-full">
                          <div className="flex flex-col max-w-20 items-center gap-1 flex-1">
                            <span className="font-typography-lable-sm font-[number:var(--typography-lable-sm-font-weight)] text-[#838378] text-[length:var(--typography-lable-sm-font-size)] tracking-[var(--typography-lable-sm-letter-spacing)] leading-[var(--typography-lable-sm-line-height)] whitespace-nowrap [font-style:var(--typography-lable-sm-font-style)]">
                              Physical
                            </span>
                            <span className="font-typography-lable-lg font-[number:var(--typography-lable-lg-font-weight)] text-[#44c26d] text-[length:var(--typography-lable-lg-font-size)] tracking-[var(--typography-lable-lg-letter-spacing)] leading-[var(--typography-lable-lg-line-height)] whitespace-nowrap [font-style:var(--typography-lable-lg-font-style)]">
                              {card.physical}
                            </span>
                          </div>
                          <div className="flex flex-col max-w-20 items-center gap-1 flex-1">
                            <span className="font-typography-lable-sm font-[number:var(--typography-lable-sm-font-weight)] text-[#838378] text-[length:var(--typography-lable-sm-font-size)] tracking-[var(--typography-lable-sm-letter-spacing)] leading-[var(--typography-lable-sm-line-height)] whitespace-nowrap [font-style:var(--typography-lable-sm-font-style)]">
                              Futures
                            </span>
                            <span className="font-typography-lable-lg font-[number:var(--typography-lable-lg-font-weight)] text-[#44c26d] text-[length:var(--typography-lable-lg-font-size)] tracking-[var(--typography-lable-lg-letter-spacing)] leading-[var(--typography-lable-lg-line-height)] whitespace-nowrap [font-style:var(--typography-lable-lg-font-style)]">
                              {card.futures}
                            </span>
                          </div>
                          <div className="flex flex-col max-w-20 items-center gap-1 flex-1">
                            <span className="font-typography-lable-sm font-[number:var(--typography-lable-sm-font-weight)] text-[#838378] text-[length:var(--typography-lable-sm-font-size)] tracking-[var(--typography-lable-sm-letter-spacing)] leading-[var(--typography-lable-sm-line-height)] whitespace-nowrap [font-style:var(--typography-lable-sm-font-style)]">
                              Net Profit
                            </span>
                            <span className="font-typography-lable-lg font-[number:var(--typography-lable-lg-font-weight)] text-[#44c26d] text-[length:var(--typography-lable-lg-font-size)] tracking-[var(--typography-lable-lg-letter-spacing)] leading-[var(--typography-lable-lg-line-height)] whitespace-nowrap [font-style:var(--typography-lable-lg-font-style)]">
                              {card.netProfit}
                            </span>
                          </div>
                        </div>

                        <div className="flex justify-between px-5 py-0 h-[183px] items-start w-full relative">
                          <div className="relative flex-1 max-w-20 self-stretch">
                            <div className="relative w-20 h-[25px] top-16 bg-[#33332a] rounded-[16px_16px_0px_0px]" />
                          </div>
                          <div className="relative flex-1 max-w-20 self-stretch">
                            <div className="relative w-20 h-[21px] top-[68px] bg-[#838378] rounded-[16px_16px_0px_0px]" />
                          </div>
                          <div className="relative flex-1 max-w-20 self-stretch">
                            <div className="relative w-20 h-[47px] top-[42px] bg-[#53e683] rounded-[16px_16px_0px_0px]" />
                          </div>
                          <div className="absolute w-[326px] h-px top-[91px] left-0 bg-[#d9d9d9]" />
                        </div>
                      </>
                    )}

                    {index === 2 && (
                      <>
                        <div className="flex gap-3 items-center w-full">
                          <div className="flex flex-col max-w-20 items-center gap-1 flex-1">
                            <span className="font-typography-lable-sm font-[number:var(--typography-lable-sm-font-weight)] text-[#838378] text-[length:var(--typography-lable-sm-font-size)] tracking-[var(--typography-lable-sm-letter-spacing)] leading-[var(--typography-lable-sm-line-height)] whitespace-nowrap [font-style:var(--typography-lable-sm-font-style)]">
                              Physical
                            </span>
                            <span className="font-typography-lable-lg font-[number:var(--typography-lable-lg-font-weight)] text-[#44c26d] text-[length:var(--typography-lable-lg-font-size)] tracking-[var(--typography-lable-lg-letter-spacing)] leading-[var(--typography-lable-lg-line-height)] whitespace-nowrap [font-style:var(--typography-lable-lg-font-style)]">
                              {card.physical}
                            </span>
                          </div>
                          <div className="flex flex-col max-w-20 items-center gap-1 flex-1">
                            <span className="font-typography-lable-sm font-[number:var(--typography-lable-sm-font-weight)] text-[#838378] text-[length:var(--typography-lable-sm-font-size)] tracking-[var(--typography-lable-sm-letter-spacing)] leading-[var(--typography-lable-sm-line-height)] whitespace-nowrap [font-style:var(--typography-lable-sm-font-style)]">
                              Premium
                            </span>
                            <span className="font-typography-lable-lg font-[number:var(--typography-lable-lg-font-weight)] text-[#f44336] text-[length:var(--typography-lable-lg-font-size)] tracking-[var(--typography-lable-lg-letter-spacing)] leading-[var(--typography-lable-lg-line-height)] whitespace-nowrap [font-style:var(--typography-lable-lg-font-style)]">
                              {card.premium}
                            </span>
                          </div>
                          <div className="flex flex-col max-w-20 items-center gap-1 flex-1">
                            <span className="font-typography-lable-sm font-[number:var(--typography-lable-sm-font-weight)] text-[#838378] text-[length:var(--typography-lable-sm-font-size)] tracking-[var(--typography-lable-sm-letter-spacing)] leading-[var(--typography-lable-sm-line-height)] whitespace-nowrap [font-style:var(--typography-lable-sm-font-style)]">
                              Net Profit
                            </span>
                            <span className="font-typography-lable-lg font-[number:var(--typography-lable-lg-font-weight)] text-[#44c26d] text-[length:var(--typography-lable-lg-font-size)] tracking-[var(--typography-lable-lg-letter-spacing)] leading-[var(--typography-lable-lg-line-height)] whitespace-nowrap [font-style:var(--typography-lable-lg-font-style)]">
                              {card.netProfit}
                            </span>
                          </div>
                          <div className="flex flex-col max-w-20 items-center gap-1 flex-1">
                            <span className="font-typography-lable-sm font-[number:var(--typography-lable-sm-font-weight)] text-[#838378] text-[length:var(--typography-lable-sm-font-size)] tracking-[var(--typography-lable-sm-letter-spacing)] leading-[var(--typography-lable-sm-line-height)] whitespace-nowrap [font-style:var(--typography-lable-sm-font-style)]">
                              Option Called
                            </span>
                            <span className="font-typography-lable-lg font-[number:var(--typography-lable-lg-font-weight)] text-[#44c26d] text-[length:var(--typography-lable-lg-font-size)] tracking-[var(--typography-lable-lg-letter-spacing)] leading-[var(--typography-lable-lg-line-height)] whitespace-nowrap [font-style:var(--typography-lable-lg-font-style)]">
                              {card.optionCalled}
                            </span>
                          </div>
                        </div>

                        <div className="flex gap-3 h-[183px] items-start w-full relative">
                          <div className="relative flex-1 max-w-20 self-stretch">
                            <div className="relative w-[73px] h-[25px] top-16 bg-[#33332a] rounded-[16px_16px_0px_0px]" />
                          </div>
                          <div className="relative flex-1 max-w-20 self-stretch">
                            <div className="w-[72px] h-[21px] bg-[#dadad2] relative top-[94px] rounded-[0px_0px_16px_16px]" />
                          </div>
                          <div className="relative flex-1 max-w-20 self-stretch">
                            <div className="relative w-[73px] h-[30px] top-[59px] bg-[#53e683] rounded-[16px_16px_0px_0px]" />
                          </div>
                          <div className="relative flex-1 max-w-20 self-stretch">
                            <img
                              className="absolute w-[72px] h-[21px] top-[68px] left-0"
                              alt="Positive"
                              src="public/positive-3.png"
                            />
                          </div>
                          <div className="absolute w-[326px] h-px top-[91px] left-0 bg-[#d9d9d9]" />
                        </div>
                      </>
                    )}
                  </div>

                  <CardFooter className="p-0 flex flex-col items-start gap-2.5">
                    <Separator className="w-full h-px bg-[#dadad2]" />
                    <div className="flex flex-col items-start gap-2 w-full">
                      <p className="font-typography-paragraph-md font-[number:var(--typography-paragraph-md-font-weight)] text-black text-[length:var(--typography-paragraph-md-font-size)] tracking-[var(--typography-paragraph-md-letter-spacing)] leading-[var(--typography-paragraph-md-line-height)] [font-style:var(--typography-paragraph-md-font-style)]">
                        {card.description}
                      </p>
                      {card.showPriceTag && (
                        <Badge className="px-2 py-1 bg-[#dadad2] rounded-[30px]">
                          <span className="font-typography-lable-sm font-[number:var(--typography-lable-sm-font-weight)] text-[#33332a] text-[length:var(--typography-lable-sm-font-size)] tracking-[var(--typography-lable-sm-letter-spacing)] leading-[var(--typography-lable-sm-line-height)] whitespace-nowrap [font-style:var(--typography-lable-sm-font-style)]">
                            {card.priceTag}
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
