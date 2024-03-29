import * as React from 'react';
import PropTypes from 'prop-types';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import LibroFormulario from '../Formulario'
import { useSpring, animated } from '@react-spring/web';
import NewForm from '../NewForm';

const Fade = React.forwardRef(function Fade(props, ref) {
  const {
    children,
    in: open,
    onClick,
    onEnter,
    onExited,
    ownerState,
    ...other
  } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null, true);
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null, true);
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {React.cloneElement(children, { onClick })}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element.isRequired,
  in: PropTypes.bool,
  onClick: PropTypes.any,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
  ownerState: PropTypes.any,
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#788a3f',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function SpringModal({ onRefresh }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const buttonStyle = {
    backgroundColor: '#485725',
    color: '#fff',
    padding: '10px',
    borderRadius: '10px',
    boxShadow: '0 0 10px #fff',
    width: '150px',
    height: '50px',
    cursor: 'pointer',
  };

  const buttonHoverStyle = {
    backgroundColor: '#fff',
    color: '#485725',
    boxShadow: '0 0 10px #485725',
  };
  return (
    <div>
 <Button
      onClick={handleOpen}
      sx={{
        ...buttonStyle,
        '&:hover': {
          ...buttonHoverStyle,
        },
      }}
    >
      Add a new book 📚
    </Button>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            TransitionComponent: Fade,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
          <NewForm  refresco={onRefresh}/>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}