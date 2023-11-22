import React, { useState } from "react";
import styled from "styled-components";
import { InputField } from "../atoms/InputField";
import { Button } from "../atoms/Button";
import { useSelector, useDispatch } from "react-redux";
import { IssueItem } from "../organism/IssueItem";
import { deleteIssue } from "../../store/IssueReducer";
import { NewIssue } from "../organism/NewIssue";
import { EditIssue } from "../organism/EditIssue";

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
  const data = useSelector((state) => state.issues);
  const dispatch = useDispatch();

  const [selectedIds, setSelectedIds] = useState([]);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingIssueId, setEditingIssueId] = useState(null);

  const onCheckboxChange = (id) => {
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
    setEditingIssueId(id);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setEditingIssueId(null);
  };

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
          <Button variant="new" onClick={openModal} />
          <NewIssue isOpen={modalIsOpen} onRequestClose={closeModal} />
          {isEditModalOpen && (
            <EditIssue id={editingIssueId} onClose={closeEditModal} />
          )}
          <Button variant="delete" onClick={onRemove} />
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
            {Object.values(data).length > 0 ? (
              Object.values(data).map((item) => (
                <IssueItem
                  key={item.id}
                  item={item}
                  onChange={() => onCheckboxChange(item.id)}
                  checked={selectedIds.includes(item.id)}
                  onRowClick={() => onRowClick(item.id)}
                />
              ))
            ) : (
              <tr>
                <td colSpan="6">データがありません</td>
              </tr>
            )}
          </tbody>
        </STable>
      </SContent>
    </SContainer>
  );
};
