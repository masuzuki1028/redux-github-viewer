import React, { useState } from "react";
import { TabHeader } from "../components/organisms/TabHeader";
import { IssueTemplate } from "../components/templates/IssueTemplate";
import { PullRequestTemplate } from "../components/templates/PullRequestTemplate";
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
    component: <IssueTemplate />,
  },
  {
    key: "pull-request",
    component: <PullRequestTemplate />,
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
