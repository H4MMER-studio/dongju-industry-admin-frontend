import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import CKEditor from './CKEditor';
import { QuillEditor } from '@/components';
import { mixins } from '@/styles';

const EditorContainerLayout = styled.div`
  ${mixins.flexSet('center', 'flex-start')}
  width: 100%;
  padding-top: 24px;
  padding-bottom: 20px;
`;

const EditorWrapper = styled.div`
  background-color: white;
`;

const EditorContainer: React.FC = () => {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState('');

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  return (
    <EditorContainerLayout>
      {/* <CKEditor
                name="description"
                value=""
                onChange={(data) => {
                    setData(data);
                }}
                editorLoaded={editorLoaded}
            /> */}
      <EditorWrapper>
        <QuillEditor htmlStr={data} setHtmlStr={(str) => setData(str)} />
      </EditorWrapper>
    </EditorContainerLayout>
  );
};

export default EditorContainer;
