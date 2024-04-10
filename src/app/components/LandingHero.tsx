import React from "react";
import { LandingBlurbQueryResponse } from "../lib/types";
import { PortableText } from "@portabletext/react";
// import CustomPortableText from "./PortableText";

type LandingHeroProps = {
  copy: LandingBlurbQueryResponse,
}

const LandingHero: React.FC<LandingHeroProps> = ({ copy }) => {

  return (
    <>
      <PortableText value={copy.copy}  />
    </>
  )
}

export default LandingHero