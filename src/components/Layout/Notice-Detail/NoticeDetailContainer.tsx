import React, { useEffect } from 'react';
import styled from 'styled-components';
import * as NoticeDetailComponents from './components';
import { Icon } from 'public/image';
import { useRouter } from 'next/router';
import { noticeActions } from '@/store';
import { useDispatch } from 'react-redux';
import { useGetStore } from '@/hooks';
import { SkeletonUI } from '@/components/widgets';
import parse from 'html-react-parser';

const NoticeDetailContainer: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { noticeDetail } = useGetStore.notice();
  const newDate = noticeDetail.data.current?.created_at?.split('-').join('.');

  useEffect(() => {
    let params = router.query as { id: string };
    dispatch(noticeActions.getNoticeDetail({ noticeId: params.id }));

    return () => {
      dispatch(noticeActions.setNoticeDetail({ data: { current: null } }));
    };
  }, []);

  return (
    <NoticeDetailContainerLayout>
      <Header>
        {noticeDetail.data.current ? (
          <Title>{noticeDetail.data.current.notice_title}</Title>
        ) : (
          <SkeletonUI variant={'text'} width={400} height={70} />
        )}

        <WriterLayout>
          <WriterProfilImage src={'/image/favi.png'} />
          <div>
            <Writer>동주산업</Writer>
            {noticeDetail.data.current ? (
              <DateText>{newDate}</DateText>
            ) : (
              <SkeletonUI variant="text" width={200} height={30} />
            )}
          </div>
        </WriterLayout>
      </Header>
      {noticeDetail.data.current ? (
        <>
          {(noticeDetail.data.current.notice_images?.length ?? 0) > 0 && (
            <ContentImage
              alt={noticeDetail.data.current?.notice_images[0].name}
              src={noticeDetail.data.current?.notice_images[0].url}
            />
          )}
          {(noticeDetail.data.current.notice_files?.length ?? 0) > 0 &&
            noticeDetail.data.current?.notice_files.map(({ name, url }) => {
              return (
                <DownloadFileLayout href={url} download={name} target="_blank">
                  <DownloadFileName>
                    {noticeDetail.data.current?.notice_files[0].name}
                  </DownloadFileName>
                  <Icon.DownloadIconBlue />
                </DownloadFileLayout>
              );
            })}
          <SubText>{parse(noticeDetail.data.current.notice_content)}</SubText>
        </>
      ) : (
        <SkeletonUI variant="rectangular" width={'100%'} height={600} />
      )}
    </NoticeDetailContainerLayout>
  );
};

export default NoticeDetailContainer;

const NoticeDetailContainerLayout = styled.div`
  width: 100%;
  padding: 60px 32px 20px;
  height: 100vh;
  overflow-y: scroll;
`;

const Title = styled.div`
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const WriterLayout = styled.div`
  display: flex;
  align-items: center;
`;

const Writer = styled.div`
  color: #555555;
  font-size: 17x;
  font-weight: 400;
`;

const DateText = styled.div`
  font-size: 17px;
  font-weight: 400;
  color: #555555;
`;

const Header = styled.header`
  margin-bottom: 16px;
`;

const ContentsContainer = styled.div`
  width: 100%;
  min-height: 480px;
  background-color: #777777;
  margin-bottom: 12px;
`;

const AttachedFileLayout = styled.div`
  margin-bottom: 40px;
`;

const CopyLinkLayout = styled.div`
  width: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

const Text = styled.div`
  font-size: 13px;
  color: #c8c8c8;
  margin-right: 4.13px;
`;

const ButtonLayout = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Border = styled.div`
  width: 100%;
  height: 1px;
  background-color: #383838;
`;

const WriterProfilImage = styled.img`
  width: 48px;
  height: 48px;
  padding: 8px;
  padding-left: 10px;
  background-color: #fff;
  border-radius: 50%;
  border: 1px solid #d0d0d0;
  margin-right: 16px;
  object-fit: contain;
`;

const ContentImage = styled.img`
  width: 100%;
  background-color: #383838;
  margin-bottom: 32px;
`;

const DownloadFileLayout = styled.a`
  width: 100%;
  height: 48px;
  background-color: #fff;
  border-radius: 8px;
  padding: 0px 16px 0px 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  cursor: pointer;
`;
const DownloadFileName = styled.p`
  font-size: 15px;
  color: #2979ff;
`;

const SubText = styled.div`
  font-size: 17px;
  font-weight: 400;
  line-height: 32px;
  margin-bottom: 84px;
  color: #383838;
`;
