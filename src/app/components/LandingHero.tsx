import React from "react";
import { LandingBlurbQueryResponse } from "../lib/types";
import { PortableText } from "@portabletext/react";
// import CustomPortableText from "./PortableText";

type LandingHeroProps = {
  copy: LandingBlurbQueryResponse,
  classNames?: string,
}

const LandingHero: React.FC<LandingHeroProps> = ({ copy, classNames }) => {

  return (
    <div className={`${classNames} mb-8 w-full`}>
      <PortableText value={copy?.copy}  />
    </div>
  )
}

export default LandingHero