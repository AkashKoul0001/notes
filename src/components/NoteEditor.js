import React from 'react';
import styled from 'styled-components';
import { FaPaperPlane } from 'react-icons/fa';

const EditorContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  background-color: white;
  border: 15px solid #ddd;
  border-color: #001F8B;
`;

const TextArea = styled.textarea`
  flex: 1;
  padding: 10px;
  border-radius: 5px;
  font-size: 14px;
  resize: none;
  height: 100px;
  border: none;
`;

const AddButton = styled.button`
  padding: 10px;
  // background-color: ${(props) => (props.disabled ? '#B0B0B0' : '#001F8B')};  /* Dull color when disabled */
  color: ${(props) => (props.disabled ? '#888' : 'white')}; /* Dull text color when disabled */
  border: none;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  border-radius: 5px;
  font-size: 16px;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)}; 
  height: 40px;
  margin-top:40px;
  margin-right:40px
`;

const NoteEditor = ({ value, onChange, onAddNote, onKeyPress }) => {
  const isButtonDisabled = !value.trim();  // Disable button if textarea is empty

  return (
    <EditorContainer>
      <TextArea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyPress={onKeyPress}
        placeholder="Write a note..."
      />
      <AddButton onClick={onAddNote} disabled={isButtonDisabled}>
        <FaPaperPlane color="black" />
      </AddButton>
    </EditorContainer>
  );
};

export default NoteEditor;
