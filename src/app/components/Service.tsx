'use client';
import React, { useState, MouseEvent, useEffect } from "react";
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

  useEffect(() => {
    if (window.location.hash.substring(1) === service.slug?.current) {
      setServiceIsOpen(true)
    }
  },[service.slug, window.location.hash])

  return (
    <div className="border-2 rounded-lg p-4 mb-4">
      <button
        className="flex justify-between content-center w-full"
        onClick={serviceHandler}
      >
        <div
          className="text-xl font-libre_baskerville mb-2"
        >
          {service?.serviceName}
        </div>
        <span className={`${serviceIsOpen ? '' : 'orgin-center -rotate-180'} transition-transform delay-200 h-fit`}>
          <ChevronDown />
        </span>
      </button>
      <div
        className={`${serviceIsOpen ? 'max-h-96' : 'max-h-0'} overflow-hidden transition-[max-height] delay-200 text-xs`}
      >
        <PortableText value={service?.description}/>
      </div>
    </div>
  )
}

export default ServiceSection