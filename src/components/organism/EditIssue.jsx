import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { updateIssue } from "../../store/IssueReducer";
import PropTypes from "prop-types";
import { closeEditModal } from "../../store/ModalReducer";
import styled from "styled-components";
import { Button } from "../atoms/Button";
import { TextField } from "../atoms/TextField";
import { TextArea } from "../atoms/TextArea";

const SContainer = styled.div`
  max-width: 598px;
  margin: auto;
  a {
    width: auto;
  }

  textarea {
    min-height: 150px;
  }
`;

const STitle = styled.h2`
  padding: 0 8px;
`;

const SForm = styled.div`
  padding: 32px 0;
  padding-bottom: 16px;
`;
const SField = styled.div`
  padding: 16px;
`;
const SLabel = styled.label`
  display: block;
  padding: 8px 0;
`;

const SErrorMessageContainer = styled.div`
  padding: 16px;
  min-height: 100px;
`;

const SErrorMessage = styled.p`
  color: rgb(215, 58, 73);
  background: #d73a4959;
  padding: 8px;
  border-radius: 6px;
`;

const SFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 8px;
`;

export const EditIssue = ({ id }) => {
  if (!id) {
    return null;
  }
  const issue = useSelector((state) => state.issues[id]);

  const [validationError, setValidationError] = useState("");
  const [title, setTitle] = useState(issue.title);
  const [description, setDescription] = useState(issue.description);
  const [status, setStatus] = useState(issue.status);

  const isModalOpen = useSelector((state) => state.modal.editModalOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isModalOpen && issue) {
      setTitle(issue.title);
      setDescription(issue.description);
      setStatus(issue.status);
    }
    if (!isModalOpen) {
      setValidationError("");
    }
  }, [isModalOpen, issue]);

  const onSubmit = () => {
    if (!title) {
      setValidationError("タイトルを入力してください");
      return;
    }

    if (!description) {
      setValidationError("説明を入力してください");
      return;
    }

    dispatch(updateIssue({ id, title, description, status }));
    dispatch(closeEditModal());
  };

  const onClose = () => {
    dispatch(closeEditModal());
  };

  return (
    <Modal isOpen={isModalOpen}>
      <SContainer>
        <STitle>Issueを更新</STitle>
        <SForm>
          <SField>
            <SLabel>タイトル</SLabel>
            <TextField
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="タイトルを入力してください"
            />
          </SField>
          <SField>
            <SLabel>説明</SLabel>
            <TextArea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="説明を入力してください"
            />
          </SField>
          <SField>
            <SLabel>ステータス</SLabel>
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value={0}>Open</option>
              <option value={1}>Close</option>
            </select>
          </SField>
        </SForm>
        <SErrorMessageContainer>
          {validationError && <SErrorMessage>{validationError}</SErrorMessage>}
        </SErrorMessageContainer>
        <SFooter>
          <Button variant="new" onClick={onSubmit} text="更新" />
          <Button onClick={onClose} text="閉じる" />
        </SFooter>
      </SContainer>
    </Modal>
  );
};

EditIssue.propTypes = {
  id: PropTypes.number,
};
