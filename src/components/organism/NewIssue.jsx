import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { addIssue } from "../../store/IssueReducer";
import PropTypes from "prop-types";
import { closeNewModal } from "../../store/ModalReducer";
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

export const NewIssue = () => {
  const [validationError, setValidationError] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const isModalOpen = useSelector((state) => state.modal.newModalOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    setTitle("");
    setDescription("");
    setValidationError("");
  }, [isModalOpen]);

  const onSubmit = () => {
    if (!title) {
      setValidationError("タイトルを入力してください");
      return;
    }

    if (!description) {
      setValidationError("説明を入力してください");
      return;
    }

    dispatch(addIssue({ title, description }));
    dispatch(closeNewModal());
  };

  const onClose = () => {
    dispatch(closeNewModal());
  };

  return (
    <Modal isOpen={isModalOpen}>
      <SContainer>
        <STitle>Issueを追加</STitle>
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
        </SForm>
        <SErrorMessageContainer>
          {validationError && <SErrorMessage>{validationError}</SErrorMessage>}
        </SErrorMessageContainer>
        <SFooter>
          <Button variant="new" onClick={onSubmit} text="作成" />
          <Button onClick={onClose} text="閉じる" />
        </SFooter>
      </SContainer>
    </Modal>
  );
};

NewIssue.propTypes = {
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
};
