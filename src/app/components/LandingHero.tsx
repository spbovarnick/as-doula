import React from "react";
import { LandingBlurbQueryResponse } from "../lib/types";
import { PortableText } from "@portabletext/react";
// import CustomPortableText from "./PortableText";

type LandingHeroProps = {
  copy: LandingBlurbQueryResponse,
}

const LandingHero: React.FC<LandingHeroProps> = ({ copy }) => {

  console.log(copy)

  return (
    <div className="mb-16">
      <PortableText value={copy?.copy}  />
    </div>
  )
}

export default LandingHero