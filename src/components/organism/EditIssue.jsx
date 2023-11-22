import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { updateIssue } from "../../store/IssueReducer";
import PropTypes from "prop-types";

Modal.setAppElement("#root");

export const EditIssue = ({ id, onClose }) => {
  const issue = useSelector((state) => state.issues[id]);
  const [title, setTitle] = useState(issue.title);
  const [description, setDescription] = useState(issue.description);
  const [status, setStatus] = useState(issue.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if (issue) {
      setTitle(issue.title);
      setDescription(issue.description);
      setStatus(issue.status);
    }
  }, [issue]);

  const onClickUpdate = () => {
    dispatch(updateIssue({ id, title, description, status }));
    onClose();
  };

  return (
    <Modal isOpen={!!id} onRequestClose={onClose}>
      <h2>Issue 編集</h2>
      <textarea value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value={0}>Open</option>
        <option value={1}>Close</option>
      </select>
      <button onClick={onClickUpdate}>更新</button>
      <button onClick={onClose}>閉じる</button>
    </Modal>
  );
};

EditIssue.propTypes = {
  id: PropTypes.number,
  onClose: PropTypes.func,
};
