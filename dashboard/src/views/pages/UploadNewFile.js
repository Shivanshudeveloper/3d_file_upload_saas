import React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import {useDropzone} from 'react-dropzone';

const UploadNewFile = () => {
    const {acceptedFiles, getRootProps, getInputProps} = useDropzone();

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const files = acceptedFiles.map(file => (
        <li key={file.path}>
          {file.path} - {file.size} bytes
        </li>
    ));

    const [comment, setcomment] = React.useState('');
    const handleChange = (event) => {
        setcomment(event.target.value);
    };

    return (
        <>

        <Dialog
            open={open}
            fullWidth
            maxWidth="md"
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
        <DialogTitle id="alert-dialog-title">
          STL File Upload
        </DialogTitle>
        <DialogContent>
          <Container>

            <section className="dropzone">
                <div {...getRootProps({className: 'dsdsd'})}>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop some files here, or click to select files</p>
                </div>
                <aside>
                    <h4>Files</h4>
                    <ul>{files}</ul>
                </aside>
            </section>

            <TextField
                id="outlined-multiline-static"
                label="Comments"
                fullWidth
                multiline
                rows={6}
                vale={comment}
            />

            <h4 style={{ marginTop: '1rem' }}>When do you need it?</h4>
            <TextField
                required
                id="outlined-required"
                type="date"
                fullWidth
            />


            <TextField
                required
                id="outlined-required"
                label="Phone Number"
                fullWidth
                sx={{ mt: 2 }}
            />




          </Container>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleClose} autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>


        <Button sx={{ float: 'right', mb: 2 }} onClick={handleClickOpen} variant="contained">Submit a STL File</Button>
        <br />
        <br />
        <br />
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="center">Cut</TableCell>
                    <TableCell align="center">Content type</TableCell>
                    <TableCell align="center">Uploaded to</TableCell>
                    <TableCell align="center">Status</TableCell>
                    <TableCell align="center">Desired reception</TableCell>
                    <TableCell align="center">Delivery date</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    
                </TableBody>
            </Table>
        </TableContainer>
            
        </>
    )
}

export default UploadNewFile
