import * as React from 'react';
import Dialog from '@mui/material/Dialog';

interface ModalLayoutProps {
  paperStyle?: React.CSSProperties;
  onClose: (reason: 'backdropClick' | 'escapeKeyDown') => void;
}

const ModalLayout: React.FC<ModalLayoutProps> = ({
  children,
  paperStyle,
  onClose,
}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Dialog
      open
      fullScreen={false}
      maxWidth={false}
      onClose={(e, r) => {
        e;
        onClose(r);
      }}
      PaperProps={{
        style: paperStyle,
      }}
    >
      {children}
    </Dialog>
  );
};

export default ModalLayout;
