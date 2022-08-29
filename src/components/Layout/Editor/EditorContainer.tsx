import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { QuillEditor } from '@/components';
import { mixins } from '@/styles';

const EditorContainerLayout = styled.div`
  ${mixins.flexSet('center', 'center', 'column')}
  width: 100%;
  padding-top: 24px;
  padding-bottom: 20px;
`;

const EditorWrapper = styled.div`
  background-color: white;
`;

const STDTitleWrapper = styled.div`
  width: 100%;
  max-width: 833px;
  margin-bottom: 25px;
  padding: 30px 36px;
  background-color: white;

  .input {
    width: 100%;
    padding-bottom: 10px;
    font-size: 32px;
    font-weight: bold;
    border: none;
    border-bottom: 1px solid #b7b7b7;

    &::placeholder {
      color: #b7b7b7;
    }
  }
`;

const STDPostButton = styled.div`
  ${mixins.flexSet()}
  margin: 2rem 0;

  .button {
    ${mixins.flexSet()}
    width: 5rem;
    height: 3rem;
    font-size: 1.125rem;
    color: white;
    border-radius: 1rem;
    background-color: #2979ff;
    transition: all 0.2s ease-in-out;

    &:hover {
      opacity: 0.7;
    }
  }
`;

const EditorContainer: React.FC = () => {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  return (
    <EditorContainerLayout>
      <STDTitleWrapper>
        <input
          className="input"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </STDTitleWrapper>
      <EditorWrapper>
        <QuillEditor htmlStr={data} setHtmlStr={(str) => setData(str)} />
      </EditorWrapper>
      <STDPostButton>
        <button className="button">저장</button>
      </STDPostButton>
    </EditorContainerLayout>
  );
};

export default EditorContainer;
