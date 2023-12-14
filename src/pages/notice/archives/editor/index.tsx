import React, { useEffect } from 'react';
import { NextPage } from 'next';
import { Editor } from '@/components';
import { IPostNoticeParams } from '@/interfaces';
import { useDispatch } from 'react-redux';
import { noticeActions } from '@/store';
import { useRouter } from 'next/router';
import { useGetStore } from '@/hooks';

const ArchiveEditorView: NextPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { mode } = router.query as { mode?: string };
  const { noticeDetail } = useGetStore.notice();

  useEffect(() => {
    if (mode && mode !== 'add') {
      dispatch(noticeActions.getNoticeDetail({ noticeId: mode }));
    }
  }, []);

  const onClickSave = ({
    notice_content,
    notice_title,
  }: Omit<IPostNoticeParams, 'notice_type'>) => {
    const formData = new FormData();

    formData.append('notice_type', 'archive');
    formData.append('notice_content', notice_content);
    formData.append('notice_title', notice_title);

    dispatch(noticeActions.postNotice({ data: formData, type: 'archive' }));
  };

  const onClickModify = ({
    id,
    notice_content,
    notice_title,
  }: {
    id: string;
    notice_content: string;
    notice_title: string;
  }) => {
    const formData = new FormData();

    formData.append('notice_type', 'archive');
    formData.append('notice_content', notice_content);
    formData.append('notice_title', notice_title);

    dispatch(
      noticeActions.patchNotice({
        formData,
        notice_type: 'archive',
        notice_id: id,
      })
    );
  };

  return (
    <>
      <Editor.Container
        onClickSave={onClickSave}
        onClickModify={onClickModify}
        prevData={noticeDetail}
      />
    </>
  );
};

export default ArchiveEditorView;
