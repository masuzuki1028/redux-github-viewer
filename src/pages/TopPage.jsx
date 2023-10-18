import React, { useState } from "react";
import { TabHeader } from "../components/organisms/TabHeader";
import { Issue } from "../components/templates/Issue";
import { PullRequest } from "../components/templates/PullRequest";

const Tabs = [
  {
    key: "issue",
    text: "Issue",
  },
  {
    key: "pull-request",
    text: "Pull Request",
  },
];

const TabsComponent = [
  {
    key: "issue",
    component: <Issue />,
  },
  {
    key: "pull-request",
    component: <PullRequest />,
  },
];

export const TopPage = () => {
  const [selected, setSelected] = useState("issue");
  return (
    <div>
      <TabHeader selected={selected} onChange={setSelected} tabs={Tabs} />
      {TabsComponent.map((item) =>
        selected === item.key ? item.component : <></>
      )}
    </div>
  );
};
