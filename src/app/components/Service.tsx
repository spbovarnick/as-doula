'use client';
import React, { useState, MouseEvent } from "react";
import { ServicesQueryResponse } from "../lib/types";
import { ChevronDown } from "./Icons";
import { PortableText } from "@portabletext/react";

interface ServiceProps {
  service: ServicesQueryResponse
}

const ServiceSection: React.FC<ServiceProps> = ({ service }) => {
  const [serviceIsOpen, setServiceIsOpen] = useState(false);

  const serviceHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setServiceIsOpen(!serviceIsOpen);
  }

  return (
    <>
      <button
        className="flex pt-5 justify-between content-center w-full"
        onClick={serviceHandler}
      >
        <div
          className="text-xl font-libre_baskerville"
        >
          {service?.serviceName}
        </div>
        <span className={`${serviceIsOpen ? '' : 'orgin-center -rotate-180'} transition-transform delay-200 h-fit`}>
          <ChevronDown />
        </span>
      </button>
      <div
        className={`${serviceIsOpen ? 'max-h-96' : 'max-h-0'} overflow-hidden transition-[height] delay-200`}
      >
        <PortableText value={service?.description}/>
      </div>
    </>
  )
}

export default ServiceSection