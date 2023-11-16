import React from "react";
import styled from "styled-components";
import { InputField } from "../atoms/InputField";
import { ButtonIcon } from "../atoms/ButtonIcon";
import { useSelector } from "react-redux";

const SContainer = styled.div`
  padding: 16px;
  margin-top: 16px;
`;

const SContent = styled.div``;

const SHeader = styled.div`
  display: flex;
  align-items: center;
`;

const SHeading = styled.div``;

const SForm = styled.div`
  padding: 8px 16px;
  display: flex;
  width: 100%;
`;

const SAction = styled.div`
  display: flex;
`;

const STable = styled.table`
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  .outline {
    width: 140rem;
  }

  th,
  td {
    padding: 8px;
    text-align: left;
    min-width: 10rem;
    border-bottom: 1px solid #e1e4e8;
  }

  th:first-child,
  td:first-child {
    min-width: auto;
  }

  .no-divider {
    border-bottom: 0;
  }
`;

export const IssueTemplete = () => {
  const data = useSelector((state) => state.issue);
  return (
    <SContainer>
      <SHeader>
        <SHeading>
          <h2>Issue</h2>
        </SHeading>
        <SForm>
          <InputField />
        </SForm>
        <SAction>
          <ButtonIcon type="new" />
          <ButtonIcon type="delete" />
        </SAction>
      </SHeader>
      <SContent>
        <STable>
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th></th>
              <th>ステータス</th>
              <th>作成者</th>
              <th>作成日付</th>
              <th>更新日付</th>
            </tr>
          </thead>
          <tbody>
            {Object.values(data).map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{item.status}</td>
                <td>{item.createBy}</td>
              </tr>
            ))}
          </tbody>
        </STable>
      </SContent>
    </SContainer>
  );
};
