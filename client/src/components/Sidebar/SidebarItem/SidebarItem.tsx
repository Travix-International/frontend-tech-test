import React from "react";

import "./SidebarItem.scss";

interface Props {
  category: string;
  click: () => void;
}

const SidebarItem: React.FC<Props> = ({ category, click }) => (
  <li onClick={click}>{category}</li>
);

export default SidebarItem;
