import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ITEM_HEIGHT = 24;

export default function LongMenu({bookId, onDelete, onEdit}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDelete = async () => {
    try {
      // Hacer la solicitud para eliminar el objeto con el ID proporcionado usando fetch
      await fetch(`http://localhost:3000/api/v8/books/${bookId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Llamar a la función onDelete para notificar al componente padre sobre la eliminación
      onDelete(bookId);

      // Cerrar el menú después de la eliminación
      handleClose();
    } catch (error) {
      console.error('Error al eliminar el objeto:', error);
    }
  };

  const handleEdit = async () => {
    try {
      // Hacer la solicitud para eliminar el objeto con el ID proporcionado usando fetch
      await fetch(`http://localhost:3000/api/v8/books/${bookId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Llamar a la función onDelete para notificar al componente padre sobre la eliminación
      onEdit(bookId);

      // Cerrar el menú después de la eliminación
      handleClose();
    }
    catch (error) {
      console.error('Error al eliminar el objeto:', error);
    }
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '10ch',
            backgroundColor: '#edeedd',
          },
        }}
      >
        {/* {options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))} */}
         <MenuItem onClick={handleDelete}>Delete 🗑️</MenuItem>
         <MenuItem onClick={handleEdit}>u 🗑️</MenuItem>
      </Menu>
    </div>
  );
}
