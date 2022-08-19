import React from 'react';
import styled from 'styled-components';
import { Widgets } from '@/components';
import EstimateForm from './EstimateForm';
import useResize from '@/hooks/useResize';

interface Iprops {
  closeForm: () => void;
}

const FormModal: React.FC<Iprops> = ({  closeForm }) => {
  const { width } = useResize();

  const setModalStyle = () => {
    if (width <= 1023) {
      return { width: '100%', margin: 0, height: '100%', maxHeight: 'none' };
    }
  };

  return (
    <Widgets.Layout.ModalLayout onClose={() => {}} paperStyle={setModalStyle()}>
      <FormLayout>
       <EstimateForm closeForm={closeForm} />
      </FormLayout>
    </Widgets.Layout.ModalLayout>
  );
};

export default FormModal;

const FormLayout = styled.div`
  width: 720px;
  height: 740px;
  background-color: #fff;
  padding: 20px;

  @media (max-width: 1023px) {
    width: 100%;
    padding-top: 84px;
  }
`;
