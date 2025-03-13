import React from "react";
import { ComponentNodeSection } from "./sections/ComponentNodeSection/ComponentNodeSection";
import { ContentWrapperSection } from "./sections/ContentWrapperSection/ContentWrapperSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { PropertyCardWrapperSection } from "./sections/PropertyCardWrapperSection/PropertyCardWrapperSection";
import { PropertyDetailsSection } from "./sections/PropertyDetailsSection/PropertyDetailsSection";
import { PropertyOverviewSection } from "./sections/PropertyOverviewSection/PropertyOverviewSection";

export const Box = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col gap-6 w-full">
        <div className="flex flex-row gap-6 w-full overflow-x-auto">
          <PropertyDetailsSection />
          <PropertyOverviewSection />
          <PropertyCardWrapperSection />
          <ContentWrapperSection />
          <MainContentSection />
          <ComponentNodeSection />
        </div>
      </div>
    </div>
  );
};
