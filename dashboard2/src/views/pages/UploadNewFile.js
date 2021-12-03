import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import {useDropzone} from "react-dropzone";

import {storage} from "../../Firebase/index";

const UploadNewFile = () => {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();

  const [open, setOpen] = React.useState(false);
  const [deliveryDate, setDeliveryDate] = React.useState(
    new Date().toLocaleDateString()
  );
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const [comment, setcomment] = React.useState("");
  const handleChange = (event) => {
    setcomment(event.target.value);
  };

  const [rows, setRows] = React.useState([]);
  const [progressOpen, setProgressOpen] = React.useState(false);
  const [progressMessage, setProgressMessage] = React.useState("");

  function createData(
    name,
    cut,
    contentType,
    uploadedTo,
    status,
    desiredReception,
    date
  ) {
    return {name, cut, contentType, uploadedTo, status, desiredReception, date};
  }

  const firebaseUpload = () => {
    acceptedFiles.forEach((file) => {
      storage
        .ref(`/files/${file.path}`)
        .put(file)
        .on("state_changed", (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(progress);
          setProgressOpen(true);
          setProgressMessage(`Uploaded ${Math.floor(progress)}%`);
        });
    });
  };

  const closeProgress = () => {
    setProgressOpen(false);
  };

  const fileSubmit = () => {
    firebaseUpload();
    const updatedRows = [...rows];
    acceptedFiles.forEach((file) => {
      updatedRows.push(
        createData(
          file.path,
          null,
          file.type,
          new Date().toLocaleDateString(),
          "Pending",
          comment,
          deliveryDate
        )
      );
    });
    setRows(updatedRows);

    while (acceptedFiles.length > 0) {
      acceptedFiles.pop();
    }
    setcomment("");
    handleClose();
  };

  const downloadFiles = async (file) => {
    try {
      console.log("clicked");
      const url = await storage.ref(`/files/${file}`).getDownloadURL();
      window.open(url, "_blank").focus();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Snackbar
        open={progressOpen}
        autoHideDuration={6000}
        message={progressMessage}
        onClose={closeProgress}
      />
      <Dialog
        open={open}
        fullWidth
        maxWidth="md"
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">STL File Upload</DialogTitle>
        <DialogContent>
          <Container>
            <section className="dropzone">
              <div {...getRootProps({className: "dsdsd"})}>
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
              value={comment}
              onChange={handleChange}
            />

            <h4 style={{marginTop: "1rem"}}>When do you need it?</h4>
            <TextField
              required
              id="outlined-required"
              type="date"
              fullWidth
              onChange={(e) => {
                setDeliveryDate(e.target.value);
              }}
            />

            <TextField
              required
              id="outlined-required"
              label="Phone Number"
              fullWidth
              sx={{mt: 2}}
            />
          </Container>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={fileSubmit} autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      <Button
        sx={{float: "right", mb: 2}}
        onClick={handleClickOpen}
        variant="contained"
      >
        Submit a STL File
      </Button>
      <br />
      <br />
      <br />
      <TableContainer component={Paper}>
        <Table sx={{minWidth: 650}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="center">Cut</TableCell>
              <TableCell align="center">Content type</TableCell>
              <TableCell align="center">Uploaded to</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Desired reception</TableCell>
              <TableCell align="center">Delivery date</TableCell>
              <TableCell align="center">Download</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{"&:last-child td, &:last-child th": {border: 0}}}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.cut}</TableCell>
                <TableCell align="center">{row.contentType}</TableCell>
                <TableCell align="center">{row.uploadedTo}</TableCell>
                <TableCell align="center">{row.status}</TableCell>
                <TableCell align="center">{row.desiredReception}</TableCell>
                <TableCell align="center">{row.date}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    onClick={() => {
                      downloadFiles(row.name);
                    }}
                  >
                    Download
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default UploadNewFile;
