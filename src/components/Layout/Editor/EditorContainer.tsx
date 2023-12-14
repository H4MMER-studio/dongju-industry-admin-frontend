import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { QuillEditor } from '@/components';
import { mixins } from '@/styles';
import { INotificationInitialState, IPostNoticeParams } from '@/interfaces';
import { useGetStore } from '@/hooks';
import { useRouter } from 'next/router';

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

interface IProps {
  onClickSave(data: Omit<IPostNoticeParams, 'notice_type'>): void;
  onClickModify(data: {
    id: string;
    notice_content: string;
    notice_title: string;
  }): void;
  prevData?: INotificationInitialState['noticeDetail'];
}

const EditorContainer: React.FC<IProps> = ({
  prevData,
  onClickSave,
  onClickModify,
}) => {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState('');
  const [title, setTitle] = useState('');
  const router = useRouter();
  const { mode } = router.query as { mode?: string };
  const isAddMode = mode === 'add';

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  useEffect(() => {
    if (!isAddMode && prevData?.data.current) {
      setData(prevData.data.current.notice_content);
      setTitle(prevData.data.current.notice_title);
    }
  }, [prevData]);

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
        <button
          className="button"
          onClick={() => {
            if (isAddMode) {
              onClickSave({ notice_content: data, notice_title: title });
            } else {
              mode
                ? onClickModify({
                    id: mode,
                    notice_title: title,
                    notice_content: data,
                  })
                : console.error('id가 없습니다');
            }
          }}
        >
          {isAddMode ? '저장' : '수정하기'}
        </button>
      </STDPostButton>
    </EditorContainerLayout>
  );
};

export default EditorContainer;
