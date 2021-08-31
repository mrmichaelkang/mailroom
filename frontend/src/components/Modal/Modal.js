import {Modal, TextField, Button} from "@material-ui/core";
import modalStyle from "./ModalStyles";


function MailroomModal({open, closeModal, handleSubmit}) {

  const classes = modalStyle();

  return (
  <Modal className={classes.container} open={open} onClose={closeModal} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description">
    <div className={classes.modal}>
      <h2 id="simple-modal-title">Enter Package Detail</h2>
      <form action='/' method='POST' onSubmit={handleSubmit}>
        <div>
          <TextField  label="Package Name" name="package-name" required variant="standard"></TextField>
        </div>
        <div>
          <TextField  label="Tracking Link" name="tracking-link" required variant="standard"></TextField>
        </div>
        <Button className={classes.modalBtn} type="submit"  variant="contained">Submit</Button>
      </form>
    </div>
  </Modal>
  );
}

export default MailroomModal;