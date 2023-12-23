import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../atoms/Button";
import { useSelector, useDispatch } from "react-redux";
import { deleteIssue } from "../../store/Issue";
import { open } from "../../store/Modal";
import { IssueItem } from "../organism/IssueItem";
import { IssueForm } from "../organism/IssueForm";
import { TextField } from "../atoms/TextField";
import { colors } from "../../styles/constants";

const SContainer = styled.div`
  padding: 16px;
  margin-top: 16px;
`;

const SContent = styled.div``;

const SHeader = styled.div`
  display: flex;
  align-items: center;
`;

const SHeading = styled.div`
  display: flex;
  align-items: center;
`;

const SForm = styled.div`
  padding: 8px 16px;
  display: flex;
  width: 100%;
`;

const SAction = styled.div`
  display: flex;
`;

const STable = styled.table`
  border: 1px solid ${colors.border};
  border-radius: 6px;
  .outline {
    width: 140rem;
  }
`;

const STableCell = styled.td`
  padding: 8px;
  text-align: left;
  min-width: 10rem;
  border-bottom: 1px solid ${colors.border};

  &:first-child {
    min-width: auto;
  }
`;

const STableHeadCell = styled.th`
  padding: 8px;
  text-align: left;
  min-width: 10rem;
  border-bottom: 1px solid ${colors.border};

  &:first-child {
    min-width: auto;
  }
`;

export const IssueTemplete = () => {
  const data = useSelector((state) => state.issues);
  const dispatch = useDispatch();

  const [selectedIds, setSelectedIds] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  const filteredIssues = Object.values(data).filter((item) => {
    return item.title.toLowerCase().includes(searchTitle.toLowerCase());
  });

  const openModal = () => {
    dispatch(open(<IssueForm />));
  };

  const onClickCheckBox = (id) => {
    setSelectedIds((prevIds) =>
      prevIds.includes(id)
        ? prevIds.filter((prevId) => prevId !== id)
        : [...prevIds, id]
    );
  };

  const onRemove = () => {
    selectedIds.forEach((id) => {
      dispatch(deleteIssue(id));
    });
  };

  const onRowClick = (id) => {
    dispatch(open(<IssueForm id={id} />));
  };

  const onCheckAll = (e) => {
    if (e.target.checked) {
      const allIds = filteredIssues.map((issue) => issue.id);
      setSelectedIds(allIds);
    } else {
      setSelectedIds([]);
    }
  };

  return (
    <SContainer>
      <SHeader>
        <SHeading>
          <h2>Issue</h2>
        </SHeading>
        <SForm>
          <TextField
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
            placeholder="Issue名で検索"
          />
        </SForm>
        <SAction>
          <Button variant="primary" onClick={openModal} text="new" />
          <Button variant="danger" onClick={onRemove} text="delete" />
        </SAction>
      </SHeader>
      <SContent>
        <STable>
          <thead>
            <tr>
              <STableHeadCell>
                <input type="checkbox" onChange={onCheckAll} />
              </STableHeadCell>
              <STableHeadCell></STableHeadCell>
              <STableHeadCell>ステータス</STableHeadCell>
              <STableHeadCell>作成者</STableHeadCell>
              <STableHeadCell>作成日付</STableHeadCell>
              <STableHeadCell>更新日付</STableHeadCell>
            </tr>
          </thead>
          <tbody>
            {filteredIssues.length > 0 ? (
              filteredIssues.map((item) => (
                <IssueItem
                  key={item.id}
                  item={item}
                  onClickCheckBox={() => onClickCheckBox(item.id)}
                  checked={selectedIds.includes(item.id)}
                  onRowClick={() => onRowClick(item.id)}
                />
              ))
            ) : (
              <tr>
                <STableCell colSpan="6">データがありません</STableCell>
              </tr>
            )}
          </tbody>
        </STable>
      </SContent>
    </SContainer>
  );
};
