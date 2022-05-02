import React, { useState } from 'react';
import styled from 'styled-components';
import { Layout } from '@/components/widgets';
import { IconCloseWhite, IconAdd } from '@svg';
import InputForm from './InputForm';
import InputDate from './InputDate';
import DatePicker from './DatePicker';
import { ICertificationForm } from '@/interfaces';

interface Iprops {
  isOpen: boolean;
  clickCreateCertification: (form: ICertificationForm) => void;
  close: () => void;
}

const CertificationEditorLayout = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px;
`;

const CloseIcon = styled.div`
  position: absolute;
  right: 0px;
  top: -36px;
  cursor: pointer;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #383838;
  margin-bottom: 24px;
`;

const UploadImageLayout = styled.div`
  position: relative;
  width: 100%;
  height: 271px;

  input[type='file'] {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;

const Input = styled.input``;

const UploadLabel = styled.label`
  cursor: pointer;
`;

const UploadBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 271px;
  background-color: #e8e8e8;
`;

const PlusLayout = styled.div`
  div {
    color: #b7b7b7;
    font-size: 20px;
    margin-top: 8px;
  }
`;

const Plus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #c8c8c8;
  margin: 0 auto;
`;

const InputLayout = styled.div`
  margin-top: 24px;
`;
const InputDateLayout = styled.div`
  margin-top: 24px;
`;

const CreateButtonLayout = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const CreateButton = styled.button<{ isActive: boolean }>`
  padding: 12px 16px;
  background-color: ${(props) => (props.isActive ? '#2979ff' : '#E8E8E8')};
  border-radius: 8px;
  font-size: 17px;
  color: #fff;
  margin-top: 24px;
`;

const PreviewImage = styled.img`
  width: auto;
  max-width: 100%;
  height: 100%;
`;

const CertificationEditor: React.FC<Iprops> = ({
  isOpen,
  clickCreateCertification,
  close,
}) => {
  const [form, setForm] = useState<ICertificationForm>({
    certification_title: '',
    certification_start_date: null,
    certification_end_date: null,
  });
  const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null>(
    null
  );

  const selectImage = (image: File) => {
    // setForm({ ...form, certification_image: JSON.stringify(image) });

    getBase64(image, (res) => {
      setImagePreview(res);
      setForm({ ...form, certification_image: res as string });
    });
  };

  const getBase64 = (
    file: File,
    result: (res: string | ArrayBuffer | null) => void
  ) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      result(reader.result);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  };

  return (
    <Layout.Dialog
      open={isOpen}
      PaperProps={{
        sx: {
          width: 675,
          height: 731,
          borderRadius: '13px',
          overflow: 'visible',
        },
      }}
      maxWidth={false}
    >
      <CloseIcon onClick={close}>
        <IconCloseWhite />
      </CloseIcon>
      <CertificationEditorLayout>
        <Title>신규등록</Title>
        <UploadImageLayout>
          <UploadLabel htmlFor="upload-image">
            {imagePreview ? (
              <PreviewImage src={imagePreview as string} />
            ) : (
              <UploadBox>
                <PlusLayout>
                  <Plus>
                    <IconAdd />
                  </Plus>
                  <div>사진업로드</div>
                </PlusLayout>
              </UploadBox>
            )}
          </UploadLabel>
          <Input
            type="file"
            accept="image/*"
            id="upload-image"
            onChange={(e) => e.target.files && selectImage(e.target.files[0])}
          />
        </UploadImageLayout>
        <InputLayout>
          <InputForm
            title="인증명"
            onChange={(value) =>
              setForm({ ...form, certification_title: value })
            }
          />
        </InputLayout>
        <InputLayout>
          <InputForm
            title="시험기관"
            onChange={(value) =>
              setForm({ ...form, certification_organization: value })
            }
          />
        </InputLayout>
        <DatePicker
          setStartDate={(startDate) =>
            setForm({ ...form, certification_start_date: startDate })
          }
          setEndDate={(endDate) =>
            setForm({ ...form, certification_end_date: endDate })
          }
        />
        <CreateButtonLayout>
          <CreateButton
            isActive={
              form.certification_title && form.certification_image
                ? true
                : false
            }
            onClick={() =>
              form.certification_title &&
              form.certification_image &&
              clickCreateCertification(form)
            }
          >
            등록
          </CreateButton>
        </CreateButtonLayout>
        <InputDateLayout>
          <InputDate />
        </InputDateLayout>
      </CertificationEditorLayout>
    </Layout.Dialog>
  );
};

export default CertificationEditor;
