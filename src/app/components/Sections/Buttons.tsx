"use client";

import IconGithub from "../IconGithub";
import IconButton from "../IconButton";
import IconEmail from "../IconEmail";
import { EMAIL, GITHUB_LINK } from "@/app/constants";

export default function Buttons() {
  return (
    <div className="flex mt-10 z-10">
      <IconButton label="github" href={GITHUB_LINK} icon={<IconGithub />} />
      <IconButton label="email" href={`mailto:${EMAIL}`} icon={<IconEmail />} />
    </div>
      
  );
}