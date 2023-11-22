import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { addIssue } from "../../store/IssueReducer";
import PropTypes from "prop-types";

Modal.setAppElement("#root");

export const NewIssue = ({ isOpen, onRequestClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setTitle("");
    setDescription("");
  }, [isOpen]);

  const onSubmit = () => {
    dispatch(addIssue({ title, description }));
    onRequestClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>新しいIssue</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="タイトル"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="説明"
      />
      <button onClick={onSubmit}>追加</button>
      <button onClick={onRequestClose}>閉じる</button>
    </Modal>
  );
};

NewIssue.propTypes = {
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
};
