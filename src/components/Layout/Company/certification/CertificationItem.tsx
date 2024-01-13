import React, { useState } from 'react';
import styled from 'styled-components';
import { IconAdd, IconClose } from '@svg';
import { ICertificationImage } from '@/interfaces';
import { Layout } from '@/components/widgets';

interface IProps {
  title: string;
  images: ICertificationImage[];
  certificationId: string;
  isLast: boolean;
  clickAddCertification: () => void;
  clickDeleteCertification: () => void;
}

const CertificationEditorLayout = styled.div`
  margin-right: 20px;
`;

const CertificationListLayout = styled.div`
  display: flex;
  align-items: center;
`;

const AddCertificationLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 190px;
  height: 240px;
  background-color: #e8e8e8;
  cursor: pointer;
  margin-left: 20px;
`;

const AddButtonLayout = styled.div``;

const AddInfoText = styled.div`
  font-weight: 600;
  font-size: 20px;
  color: #b7b7b7;
`;

const AddIconLayout = styled.div`
  width: 48px;
  height: 48px;
  background-color: #c8c8c8;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CertificationImage = styled.img`
  width: 190px;
  height: 240px;
`;

const CertificationImageLayout = styled.div`
  position: relative;
  cursor: pointer;
`;

const Overlay = styled.div<{ isHover: boolean }>`
  display: ${(props) => (props.isHover ? 'block' : 'none')};
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  top: 0px;
`;

const ModifyButton = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #2979ff;
  border-radius: 18px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
`;

const DeleteModalLayout = styled.div`
  width: 250px;
  height: 150px;
  padding: 20px;
  position: relative;
`;

const DeleteButton = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  background: #c8c8c8;
  border-radius: 50%;
  right: 5px;
  top: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 14px;
    height: 14px;
  }
`;

const DeleteModalTitle = styled.div`
  font-weight: 600;
`;
const DeleteModalButtonLayout = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  bottom: 20px;

  div {
    cursor: pointer;
  }

  .confirm-delete {
    padding: 3px 8px;
    background-color: #2979ff;
    border-radius: 18px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 16px;
  }
`;

const CertificationItem: React.VFC<IProps> = (props) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  return (
    <>
      <CertificationEditorLayout>
        <CertificationListLayout>
          {props.images?.map((image) => (
            <CertificationImageLayout
              onMouseOver={() => setHoveredId(props.certificationId)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <CertificationImage
                src={image.url}
                key={image.name}
                alt="인증서 사진"
              />
              <Overlay isHover={props.certificationId === hoveredId}>
                {/* <ModifyButton>수정</ModifyButton> */}
                <DeleteButton onClick={() => setOpenDeleteModal(true)}>
                  <IconClose />
                </DeleteButton>
              </Overlay>
            </CertificationImageLayout>
          ))}

          {props.isLast && (
            <AddCertificationLayout onClick={props.clickAddCertification}>
              <AddButtonLayout>
                <AddIconLayout>
                  <IconAdd />
                </AddIconLayout>
                <AddInfoText>등록</AddInfoText>
              </AddButtonLayout>
            </AddCertificationLayout>
          )}
        </CertificationListLayout>
      </CertificationEditorLayout>
      <Layout.Dialog
        open={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
      >
        <DeleteModalLayout>
          <DeleteModalTitle>삭제 하시겠습니까?</DeleteModalTitle>
          <DeleteModalButtonLayout>
            <div onClick={() => setOpenDeleteModal(false)}>취소</div>
            <div
              className="confirm-delete"
              onClick={props.clickDeleteCertification}
            >
              삭제
            </div>
          </DeleteModalButtonLayout>
        </DeleteModalLayout>
      </Layout.Dialog>
    </>
  );
};

export default CertificationItem;
