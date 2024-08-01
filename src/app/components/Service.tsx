'use client';
import React from "react";
import { ServicesQueryResponse } from "../lib/types";

interface ServiceProps {
  service: ServicesQueryResponse
}

const ServiceSection: React.FC<ServiceProps> = ({ service }) => {
  return (
    <div>{service?.serviceName}</div>
  )
}

export default ServiceSection