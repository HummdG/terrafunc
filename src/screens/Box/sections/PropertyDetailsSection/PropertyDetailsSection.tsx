import {
  ArrowLeftIcon,
  FileLockIcon,
  FileTextIcon,
  FileXIcon,
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
import { Slider } from "../../../../components/ui/slider";

export const PropertyDetailsSection = (): JSX.Element => {
  // Data for risk assessment cards
  const riskCards = [
    {
      title: "BUSINESS\nAS USUAL",
      icon: <FileTextIcon className="w-6 h-6 text-[#49493c]" />,
      badge: "Risk approach",
      profitLabel: "Predicted Profit",
      profitValue: "1",
      profitPercent: "%",
      backgroundImage: "url(public/business-as-usual.png)",
      physical: "$420.000",
      netProfit: "$420.000",
      description: "No price protection, margins at risk if costs rise.",
      showPriceTag: false,
    },
    {
      title: "FUTURES\nCONTRACT",
      icon: <FileLockIcon className="w-6 h-6 text-[#33332a]" />,
      badge: "Fixed",
      profitLabel: "Secured Margin",
      profitValue: "5",
      profitPercent: "%",
      backgroundImage: "url(public/futures-contract.png)",
      physical: "$420.000",
      futures: "-$200.000",
      netProfit: "$220.000",
      description:
        "Fixes a future price, reducing risk but requiring commitment",
      showPriceTag: true,
    },
    {
      title: "OPTION",
      icon: <FileTextIcon className="w-6 h-6 text-[#33332a]" />,
      badge: "Flexible",
      profitLabel: "Option Premium",
      profitValue: "5",
      profitPercent: "%",
      backgroundImage: "url(public/option.png)",
      physical: "$420.000",
      premium: "-$88.200",
      netProfit: "$331.800",
      description:
        "Provides flexibility with downside protection at a premium.",
      showPriceTag: true,
      isStrikePrice: true,
    },
  ];

  return (
    <section className="w-full bg-[#fbfbfa] overflow-y-auto">
      <div className="flex flex-col items-center py-8 px-4">
        <h3 className="font-typography-heading-h3 font-[number:var(--typography-heading-h3-font-weight)] text-[#101218] text-[length:var(--typography-heading-h3-font-size)] tracking-[var(--typography-heading-h3-letter-spacing)] leading-[var(--typography-heading-h3-line-height)] mb-6">
          Risk assessment
        </h3>

        <div className="flex flex-col w-full max-w-[1170px] items-center gap-6">
          {/* Projected Spot Price Slider */}
          <div className="flex w-full items-end justify-between">
            <div className="flex items-end gap-2">
              <div className="flex flex-col w-[286px] items-start gap-2">
                <label className="text-[#49493c] text-[length:var(--typography-lable-sm-font-size)] tracking-[var(--typography-lable-sm-letter-spacing)] leading-[var(--typography-lable-sm-line-height)] font-typography-lable-sm font-[number:var(--typography-lable-sm-font-weight)] [font-style:var(--typography-lable-sm-font-style)]">
                  Projected&nbsp;&nbsp;Spot Price
                </label>

                <div className="flex h-11 items-center gap-4 px-2 py-0 w-full rounded-lg border border-solid border-[#dadad2]">
                  <div className="flex items-center gap-4 flex-1 bg-[#bdbdb4] rounded-[999px]">
                    <div className="relative flex-1 h-1 bg-[#dadad2] rounded-[30px]">
                      <div className="relative w-48 h-3 -top-1">
                        <Slider
                          defaultValue={[17]}
                          max={100}
                          step={1}
                          className="absolute w-full"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <div className="font-typography-lable-md font-[number:var(--typography-lable-md-font-weight)] text-[#33332a] text-[length:var(--typography-lable-md-font-size)] tracking-[var(--typography-lable-md-letter-spacing)] leading-[var(--typography-lable-md-line-height)] whitespace-nowrap">
                      48
                    </div>

                    <div className="flex w-[38px] h-4 items-center justify-center gap-1 bg-[#bdbdb4] rounded-sm">
                      <div className="inline-flex h-6 items-center justify-center mt-[-4.00px] mb-[-4.00px]">
                        <div className="[font-family:'Font_Awesome_6_Pro-Regular',Helvetica] font-normal text-[#fbfbfa] text-[10px] tracking-[0] leading-[12.0px] whitespace-nowrap">
                          dollar
                        </div>
                      </div>

                      <div className="[font-family:'Arial-Regular',Helvetica] font-normal text-[#fbfbfa] text-xs tracking-[0] leading-[14px] whitespace-nowrap">
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

          {/* Risk Assessment Cards */}
          <div className="w-full">
            <div className="flex w-full items-center gap-6">
              {riskCards.map((card, index) => (
                <Card
                  key={index}
                  className="flex-1 p-6 bg-[#f4f4f1] rounded-xl bg-cover bg-center"
                  style={{ backgroundImage: card.backgroundImage }}
                >
                  <CardHeader className="p-0 flex flex-row items-start justify-between">
                    <div className="flex items-center gap-[18px]">
                      <div className="flex w-10 h-10 items-center justify-center p-2.5 rounded-[999px] border border-solid border-[#dadad2] bg-white">
                        {card.icon}
                      </div>

                      <div className="font-typography-subheadings-lg font-[number:var(--typography-subheadings-lg-font-weight)] text-[#33332a] text-[length:var(--typography-subheadings-lg-font-size)] tracking-[var(--typography-subheadings-lg-letter-spacing)] leading-[var(--typography-subheadings-lg-line-height)] whitespace-pre-line">
                        {card.title}
                      </div>
                    </div>

                    <Badge className="bg-white text-[#33332a] px-4 py-2.5 rounded-[30px]">
                      {card.badge}
                    </Badge>
                  </CardHeader>

                  <CardContent className="p-0 mt-9 h-[171px] relative">
                    <div className="flex items-center gap-[29px]">
                      <div className="flex flex-col w-[111px] items-start">
                        <div className="flex items-end justify-between w-full">
                          <div className="w-[87px] h-20 overflow-hidden">
                            <div className="font-typography-dislpay-large font-[number:var(--typography-dislpay-large-font-weight)] text-[#44c26d] text-[length:var(--typography-dislpay-large-font-size)] tracking-[var(--typography-dislpay-large-letter-spacing)] leading-[var(--typography-dislpay-large-line-height)] whitespace-nowrap">
                              {card.profitValue}
                            </div>
                          </div>

                          <div className="font-typography-heading-h5 font-[number:var(--typography-heading-h5-font-weight)] text-[#838378] text-[length:var(--typography-heading-h5-font-size)] tracking-[var(--typography-heading-h5-letter-spacing)] leading-[var(--typography-heading-h5-line-height)] whitespace-nowrap">
                            {card.profitPercent}
                          </div>
                        </div>

                        <div className="w-full font-typography-lable-md font-[number:var(--typography-lable-md-font-weight)] text-[#33332a] text-[length:var(--typography-lable-md-font-size)] tracking-[var(--typography-lable-md-letter-spacing)] leading-[var(--typography-lable-md-line-height)]">
                          {card.profitLabel}
                        </div>
                      </div>

                      {index === 0 && (
                        <img
                          className="w-[60px] h-[60px] absolute top-[19px] left-[263px]"
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
                          <FileXIcon className="w-6 h-6 text-[#f44336] text-xl" />
                        </div>
                      )}
                    </div>
                  </CardContent>

                  <div className="flex flex-col gap-2.5 pt-2 pb-6">
                    {index === 0 && (
                      <>
                        <div className="flex justify-center gap-3 px-6">
                          <div className="flex flex-col max-w-20 items-center gap-1 flex-1">
                            <div className="font-typography-lable-sm font-[number:var(--typography-lable-sm-font-weight)] text-[#838378] text-[length:var(--typography-lable-sm-font-size)] tracking-[var(--typography-lable-sm-letter-spacing)] leading-[var(--typography-lable-sm-line-height)] whitespace-nowrap">
                              Physical
                            </div>
                            <div className="font-typography-lable-lg font-[number:var(--typography-lable-lg-font-weight)] text-[#44c26d] text-[length:var(--typography-lable-lg-font-size)] tracking-[var(--typography-lable-lg-letter-spacing)] leading-[var(--typography-lable-lg-line-height)] whitespace-nowrap">
                              {card.physical}
                            </div>
                          </div>
                        </div>

                        <div className="flex h-[183px] items-start justify-center gap-3 px-6 relative">
                          <div className="flex-1 max-w-20 self-stretch">
                            <div className="w-20 h-[89px] bg-[#33332a] rounded-[16px_16px_0px_0px]" />
                          </div>
                          <div className="absolute w-[198px] h-px top-[91px] left-16 bg-[#d9d9d9]" />
                        </div>
                      </>
                    )}

                    {index === 1 && (
                      <>
                        <div className="flex justify-between px-5">
                          <div className="flex flex-col max-w-20 items-center gap-1 flex-1">
                            <div className="font-typography-lable-sm font-[number:var(--typography-lable-sm-font-weight)] text-[#838378] text-[length:var(--typography-lable-sm-font-size)] tracking-[var(--typography-lable-sm-letter-spacing)] leading-[var(--typography-lable-sm-line-height)] whitespace-nowrap">
                              Physical
                            </div>
                            <div className="font-typography-lable-lg font-[number:var(--typography-lable-lg-font-weight)] text-[#44c26d] text-[length:var(--typography-lable-lg-font-size)] tracking-[var(--typography-lable-lg-letter-spacing)] leading-[var(--typography-lable-lg-line-height)] whitespace-nowrap">
                              {card.physical}
                            </div>
                          </div>

                          <div className="flex flex-col max-w-20 items-center gap-1 flex-1">
                            <div className="font-typography-lable-sm font-[number:var(--typography-lable-sm-font-weight)] text-[#838378] text-[length:var(--typography-lable-sm-font-size)] tracking-[var(--typography-lable-sm-letter-spacing)] leading-[var(--typography-lable-sm-line-height)] whitespace-nowrap">
                              Futures
                            </div>
                            <div className="font-typography-lable-lg font-[number:var(--typography-lable-lg-font-weight)] text-[#f44336] text-[length:var(--typography-lable-lg-font-size)] tracking-[var(--typography-lable-lg-letter-spacing)] leading-[var(--typography-lable-lg-line-height)] whitespace-nowrap">
                              {card.futures}
                            </div>
                          </div>

                          <div className="flex flex-col max-w-20 items-center gap-1 flex-1">
                            <div className="font-typography-lable-sm font-[number:var(--typography-lable-sm-font-weight)] text-[#838378] text-[length:var(--typography-lable-sm-font-size)] tracking-[var(--typography-lable-sm-letter-spacing)] leading-[var(--typography-lable-sm-line-height)] whitespace-nowrap">
                              Net Profit
                            </div>
                            <div className="font-typography-lable-lg font-[number:var(--typography-lable-lg-font-weight)] text-[#44c26d] text-[length:var(--typography-lable-lg-font-size)] tracking-[var(--typography-lable-lg-letter-spacing)] leading-[var(--typography-lable-lg-line-height)] whitespace-nowrap">
                              {card.netProfit}
                            </div>
                          </div>
                        </div>

                        <div className="flex h-[183px] items-start justify-between px-5 relative">
                          <div className="flex-1 max-w-20 self-stretch">
                            <div className="w-20 h-[89px] bg-[#33332a] rounded-[16px_16px_0px_0px]" />
                          </div>

                          <div className="flex-1 max-w-20 self-stretch">
                            <div className="w-20 h-[42px] bg-[#dadad2] relative top-[94px] rounded-[0px_0px_16px_16px]" />
                          </div>

                          <div className="flex-1 max-w-20 self-stretch">
                            <div className="w-20 h-[70px] bg-[#53e683] relative top-[19px] rounded-[16px_16px_0px_0px]" />
                          </div>

                          <div className="absolute w-[326px] h-px top-[91px] left-0 bg-[#d9d9d9]" />
                        </div>
                      </>
                    )}

                    {index === 2 && (
                      <>
                        <div className="flex gap-3">
                          <div className="flex flex-col max-w-20 items-center gap-1 flex-1">
                            <div className="font-typography-lable-sm font-[number:var(--typography-lable-sm-font-weight)] text-[#838378] text-[length:var(--typography-lable-sm-font-size)] tracking-[var(--typography-lable-sm-letter-spacing)] leading-[var(--typography-lable-sm-line-height)] whitespace-nowrap">
                              Physical
                            </div>
                            <div className="font-typography-lable-lg font-[number:var(--typography-lable-lg-font-weight)] text-[#44c26d] text-[length:var(--typography-lable-lg-font-size)] tracking-[var(--typography-lable-lg-letter-spacing)] leading-[var(--typography-lable-lg-line-height)] whitespace-nowrap">
                              {card.physical}
                            </div>
                          </div>

                          <div className="flex flex-col max-w-20 items-center gap-1 flex-1">
                            <div className="font-typography-lable-sm font-[number:var(--typography-lable-sm-font-weight)] text-[#838378] text-[length:var(--typography-lable-sm-font-size)] tracking-[var(--typography-lable-sm-letter-spacing)] leading-[var(--typography-lable-sm-line-height)] whitespace-nowrap">
                              Premium
                            </div>
                            <div className="font-typography-lable-lg font-[number:var(--typography-lable-lg-font-weight)] text-[#f44336] text-[length:var(--typography-lable-lg-font-size)] tracking-[var(--typography-lable-lg-letter-spacing)] leading-[var(--typography-lable-lg-line-height)] whitespace-nowrap">
                              {card.premium}
                            </div>
                          </div>

                          <div className="flex flex-col max-w-20 items-center gap-1 flex-1">
                            <div className="font-typography-lable-sm font-[number:var(--typography-lable-sm-font-weight)] text-[#838378] text-[length:var(--typography-lable-sm-font-size)] tracking-[var(--typography-lable-sm-letter-spacing)] leading-[var(--typography-lable-sm-line-height)] whitespace-nowrap">
                              Net Profit
                            </div>
                            <div className="font-typography-lable-lg font-[number:var(--typography-lable-lg-font-weight)] text-[#44c26d] text-[length:var(--typography-lable-lg-font-size)] tracking-[var(--typography-lable-lg-letter-spacing)] leading-[var(--typography-lable-lg-line-height)] whitespace-nowrap">
                              {card.netProfit}
                            </div>
                          </div>

                          <div className="flex flex-col max-w-20 items-center gap-1 flex-1 opacity-25">
                            <div className="font-typography-lable-sm font-[number:var(--typography-lable-sm-font-weight)] text-[#838378] text-[length:var(--typography-lable-sm-font-size)] tracking-[var(--typography-lable-sm-letter-spacing)] leading-[var(--typography-lable-sm-line-height)] whitespace-nowrap">
                              Option Called
                            </div>
                            <div className="font-typography-lable-lg font-[number:var(--typography-lable-lg-font-weight)] text-[#838378] text-[length:var(--typography-lable-lg-font-size)] tracking-[var(--typography-lable-lg-letter-spacing)] leading-[var(--typography-lable-lg-line-height)] whitespace-nowrap">
                              -
                            </div>
                          </div>
                        </div>

                        <div className="flex h-[183px] items-start gap-3 relative">
                          <div className="flex-1 max-w-20 self-stretch">
                            <div className="w-[72px] h-[89px] bg-[#33332a] rounded-[16px_16px_0px_0px]" />
                          </div>

                          <div className="flex-1 max-w-20 self-stretch">
                            <div className="w-[73px] h-[21px] bg-[#dadad2] relative top-[94px] rounded-[0px_0px_16px_16px]" />
                          </div>

                          <div className="flex-1 max-w-20 self-stretch">
                            <div className="w-[73px] h-[70px] bg-[#53e683] relative top-[19px] rounded-[16px_16px_0px_0px]" />
                          </div>

                          <div className="flex-1 max-w-20 self-stretch">
                            <div className="w-[72px] h-[21px] bg-[#eeeeee] relative top-[68px] rounded-[16px_16px_0px_0px]" />
                          </div>

                          <div className="absolute w-[326px] h-px top-[91px] left-0 bg-[#d9d9d9]" />
                        </div>
                      </>
                    )}
                  </div>

                  <CardFooter className="flex flex-col items-start gap-2.5 p-0">
                    <Separator className="w-full bg-[#dadad2]" />
                    <div className="flex flex-col items-start gap-2 w-full">
                      <p className="font-typography-paragraph-md font-[number:var(--typography-paragraph-md-font-weight)] text-black text-[length:var(--typography-paragraph-md-font-size)] tracking-[var(--typography-paragraph-md-letter-spacing)] leading-[var(--typography-paragraph-md-line-height)]">
                        {card.description}
                      </p>

                      {card.showPriceTag && (
                        <Badge
                          variant="outline"
                          className="bg-[#dadad2] rounded-[30px] px-2 py-1"
                        >
                          <span className="font-typography-lable-sm font-[number:var(--typography-lable-sm-font-weight)] text-[#33332a] text-[length:var(--typography-lable-sm-font-size)] tracking-[var(--typography-lable-sm-letter-spacing)] leading-[var(--typography-lable-sm-line-height)] whitespace-nowrap">
                            {card.isStrikePrice
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
          </div>

          {/* Back Button */}
          <Button
            variant="outline"
            className="h-10 pl-5 pr-6 py-1 rounded-[99px] border border-solid border-[#dadad2]"
          >
            <ArrowLeftIcon className="h-5 w-5 text-[#49493c] mr-1" />
            <span className="font-typography-lable-sm font-[number:var(--typography-lable-sm-font-weight)] text-[#49493c] text-[length:var(--typography-lable-sm-font-size)] tracking-[var(--typography-lable-sm-letter-spacing)] leading-[var(--typography-lable-sm-line-height)] whitespace-nowrap">
              Back
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
