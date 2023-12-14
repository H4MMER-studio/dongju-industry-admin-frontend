import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

interface IProps {
  value: string;
  name: string;
  editorLoaded: boolean;
  onChange: (data: any) => void;
}

const CkEditorLayout = styled.div`
  width: 100%;
  max-width: 765px;
  padding-right: 24px;
`;

const CKEditor: React.FC<IProps> = ({
  onChange,
  editorLoaded,
  name,
  value,
}) => {
  const editorRef: any = useRef();
  const { CKEditor, ClassicEditor }: any = editorRef.current || {};

  useEffect(() => {
    editorRef.current = {
      CKEditor: require('@ckeditor/ckeditor5-react').CKEditor, // v3+
      ClassicEditor: require('@ckeditor/ckeditor5-build-classic'),
    };
  }, []);

  return (
    <CkEditorLayout>
      {editorLoaded ? (
        <CKEditor
          type=""
          name={name}
          editor={ClassicEditor}
          data={value}
          onChange={(event, editor) => {
            const data = editor.getData();
            onChange(data);
          }}
        />
      ) : (
        <div>Editor loading</div>
      )}
    </CkEditorLayout>
  );
};

export default CKEditor;
