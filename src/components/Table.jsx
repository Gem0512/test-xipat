import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, Modal, TextField } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function TableComponent() {
  const [dataset, setDataset] = useState([]);
  const [filteredDataset, setFilteredDataset] = useState([]);
  const [userIdFilter, setUserIdFilter] = useState('');
  const [titleFilter, setTitleFilter] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setDataset(data);
        setFilteredDataset(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    setFilteredDataset(
      dataset.filter((item) => 
        (userIdFilter === '' || item.userId.toString().includes(userIdFilter)) &&
        (titleFilter === '' || item.title.toLowerCase().includes(titleFilter.toLowerCase()))
      )
    );
  }, [userIdFilter, titleFilter, dataset]);

  const columns = [
    { field: 'id', headerName: 'ID', headerAlign: 'center', width: 100, align: 'center' },
    { field: 'userId', headerName: 'UserID', headerAlign: 'center', width: 250, align: 'center' },
    { field: 'title', headerName: 'Title', width: 800 },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleButtonClick(params)}
        >
          View
        </Button>
      ),
    },
  ];

  const [rowSelect, setRowSelect] = useState(null);
  const handleButtonClick = (params) => {
    handleOpen();
    setRowSelect(params.row);
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box style={{ height: 'auto', width: '100%' }}>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <TextField
          label="Filter by UserID"
          variant="outlined"
          value={userIdFilter}
          onChange={(e) => setUserIdFilter(e.target.value)}
        />
        <TextField
          label="Filter by Title"
          variant="outlined"
          value={titleFilter}
          onChange={(e) => setTitleFilter(e.target.value)}
        />
      </Box>
      <DataGrid
        rows={filteredDataset}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h3 >Detail post</h3>
          <TextField
            sx={{ margin: 1 }}
            color="secondary"
            focused
            id="outlined-disabled"
            label="ID"
            value={rowSelect?.id}
          />
          <TextField
            sx={{ margin: 1 }}
            // disabled
            color="secondary"
            focused
            id="outlined-disabled"
            label="UserID"
            value={rowSelect?.userId}
          />
          <TextField
            sx={{ margin: 1 }}
            label="Title"
            color="secondary"
            focused
            multiline
            // disabled
            rows={2}
            variant="outlined"
            fullWidth
            value={rowSelect?.title}
          />
          <TextField
            sx={{ margin: 1 }}
            label="Body"
            multiline
            color="secondary"
            focused
            // disabled
            rows={7}
            variant="outlined"
            fullWidth
            value={rowSelect?.body}
          />
        </Box>
      </Modal>
    </Box>
  );
}
