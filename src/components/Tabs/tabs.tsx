import React, { useState } from "react";
import styles from "./tabs.module.scss";
interface TabsProps {
  desc: string;
  authors: string;
}

const Tabs: React.FC<TabsProps> = ({ desc, authors }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className={styles.tab}>
      <div>
        <button className={styles.tabs} onClick={() => handleTabClick(0)}>
          Description
        </button>
        <button className={styles.tabs} onClick={() => handleTabClick(1)}>
          Authors
        </button>
      </div>
      {activeTab === 0 && <div>{desc}</div>}
      {activeTab === 1 && <div>{authors}</div>}
    </div>
  );
};

export default Tabs;
