"use client";

import IconGithub from "../IconGithub";
import IconButton from "../IconButton";
import IconEmail from "../IconEmail";

export default function Buttons() {
  return (
    <div className="flex mt-10 z-10">
      <IconButton label="github" href={"https://github.com/kristof-z"} icon={<IconGithub />} />
      <IconButton label="email" href={"contact@kristofzorko.com"} icon={<IconEmail />} />
    </div>
      
  );
}