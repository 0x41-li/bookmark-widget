import React from "react";
import Link from "./Link";

interface LinksListProps {
  links: string[];
}

const LinksList: React.FC<LinksListProps> = ({ links }) => {
  if (links.length > 0) {
    return links.map((link: string, index: number) => {
      return <Link index={index} key={index} link={link} />;
    });
  }

  return null;
};

export default LinksList;
