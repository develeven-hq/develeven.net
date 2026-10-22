import React from "react";
import {
  WebDevIcon,
  CustomSoftwareIcon,
  GameDevIcon,
  MaintenanceIcon,
} from "@/components/ui/Icons";

const services = [
  {
    label: "Web development",
    icon: <WebDevIcon size={18} />,
  },
  {
    label: "Custom software",
    icon: <CustomSoftwareIcon size={18} />,
  },
  {
    label: "Game development",
    icon: <GameDevIcon size={18} />,
  },
  {
    label: "Website maintenance",
    icon: <MaintenanceIcon size={18} />,
  },
];

export default function ServicesBar() {
  return (
    <div className="w-full border-t border-b border-dv-border bg-dv-bg">
      <div className="w-full max-w-8xl mx-auto h-21 px-6 sm:px-8 lg:px-16 flex justify-between items-center overflow-x-auto gap-6">
        {services.map((svc) => (
          <div key={svc.label} className="flex items-center gap-2.5 sm:gap-3 overflow-hidden whitespace-nowrap">
            {svc.icon}
            <span className="text-dv-text text-sm sm:text-base font-medium font-sans tracking-normal">
              {svc.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
