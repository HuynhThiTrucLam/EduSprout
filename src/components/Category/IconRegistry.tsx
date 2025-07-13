import React from "react";
import DocumentIcon from "../../assets/Icons/DocumentIcon";
import CouresIcon from "../../assets/Icons/CouresIcon";
import BooksIcon from "../../assets/Icons/BooksIcon";
import SearchIcon from "../../assets/Icons/SearchIcon";
import Cart from "../../assets/Icons/Cart";
import Notification from "../../assets/Icons/Notification";
import Language from "../../assets/Icons/Language";
import Arrow from "../../assets/Icons/Arrow";
import Deacorate1 from "../../assets/Icons/Deacorate1";
import Decorate2 from "../../assets/Icons/Decorate2";
import Decorate3 from "../../assets/Icons/Decorate3";
import Decorate4 from "../../assets/Icons/Decorate4";
import IntroDecorate from "../../assets/Icons/IntroDecorate";
import Suggest from "../../assets/Icons/Suggest";
import type { IconName } from "../../types/categories";

interface IconRegistryProps {
  name: IconName;
  className?: string;
}

const iconMap: Record<IconName, React.ComponentType<{ className?: string }>> = {
  document: DocumentIcon,
  course: CouresIcon,
  books: BooksIcon,
  search: SearchIcon,
  cart: Cart,
  notification: Notification,
  language: Language,
  arrow: Arrow,
  decorate1: Deacorate1,
  decorate2: Decorate2,
  decorate3: Decorate3,
  decorate4: Decorate4,
  introDecorate: IntroDecorate,
  suggest: Suggest,
};

const IconRegistry: React.FC<IconRegistryProps> = ({ name, className }) => {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in registry`);
    return null;
  }

  return <IconComponent className={className} />;
};

export default IconRegistry;
