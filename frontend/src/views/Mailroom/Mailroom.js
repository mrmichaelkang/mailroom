import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import {Delete, Refresh} from "@material-ui/icons";
import mailroomStyles from './MailroomStyles';
import Navbar from '../../components/Navbar/Navbar';
import MailroomModal from '../../components/Modal/Modal';
import FlashMessage from '../../components/FlashMessage/FlashMessage';


function Mailroom() {
  const classes = mailroomStyles();
  const [open, setOpen] = useState(false);
  let [packageList, setPackageList] = useState([]);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isUpdated, setIsUpdated] = useState(false);
  const [updatedMessage, setUpdatedMessage] = useState("");


  useEffect(() => {
    getPackageList();
    // eslint-disable-next-line
  }, []);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  }

  const getPackageList =  async () => {
    try {
      const uid = localStorage.getItem('uid');
      let res = await fetch(`https://mailroom-project.herokuapp.com/api/v1/${uid}/packages`);
      let data = await res.json();

      data.forEach(p => {
        packageList.push({
          id: p.id,
          name: p.name,
          trackingLink: p.trackingLink,
          carrier: p.carrier,
          status: p.status,
        })
      })
      setPackageList(packageList => [...packageList]);
    } catch(e) {
      console.error(e);
    }
  }

  const handleAddPackage = newPackage => {
    fetch('https://mailroom-project.herokuapp.com/api/v1/add-package', {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPackage)
    }).then(res => res.json())
    .then(data => {
      setIsError(false);
      setErrorMessage("");
      if(data.isError) {
        setIsError(true);
        setErrorMessage(data.status);
      } else {
        packageList.push(data);
        setPackageList(packageList => [...packageList])
      }
    });
  }

  const handleDelete = (event) => {
    const id = Number(event.currentTarget.id);
    packageList = packageList.filter(el =>  el.id !== id);
    setPackageList(packageList);

    fetch(`https://mailroom-project.herokuapp.com/api/v1/delete-package/${id}`, {
      method: "DELETE"
    })
    .then(res => console.log(res.status))
  }

  const handleSubmit = (event) => {
    const data = new FormData(event.target);

    let newPackage = {
      name: data.get('package-name'),
      trackingLink: data.get('tracking-link'),
      uid: localStorage.getItem("uid")
    }

    handleAddPackage(newPackage);
    setOpen(false);
  }

  const handleUpdate = async (event) => {
    const id = Number(event.currentTarget.id);
    let status = event.currentTarget.parentElement.parentElement
    .children[2];
    setIsUpdated(false);
    setUpdatedMessage("data.msg");
    
    try {
      const res = await fetch(`https://mailroom-project.herokuapp.com/api/v1/update-package/${id}`, {
        method: "PUT"
      });
      const data = await res.json();
      status.textContent = data.status;
      setIsUpdated(data.updated);
      setUpdatedMessage(data.msg);
    } catch(err) {
      console.error(err);
    }
  }

  return (
    <div>
      <Navbar/>
      {isError ? <FlashMessage errorMessage={errorMessage}/> : null}
      {isUpdated ? <FlashMessage updatedMessage={updatedMessage}/> : null}
      <div className="mailroom">
        <div className={classes.addContainer}>
          <Button onClick={openModal} variant='contained' className={classes.addBtn}>Add New Package</Button>
        </div>
        <table className={
          packageList.length !== 0 ?
          classes.styledTable :
          classes.hide
          }>
          <thead>
            <tr className={classes.tableHead}>
              <th>Name</th>
              <th>Carrier</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            { packageList.map((p) => (
                <tr key={p.id}>
                  <td><a href={p.trackingLink}>{p.name}</a></td>
                  <td>{p.carrier}</td>
                  <td>{p.status}</td>
                  <td>
                    <Button id={p.id} onClick={handleUpdate} className={classes.updateBtn} variant='contained' startIcon={<Refresh/>}>Update</Button>
                    <Button id={p.id} onClick={handleDelete} className={classes.deleteBtn} variant='contained' startIcon={<Delete/>}>Delete</Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        
        <MailroomModal open={open} closeModal={closeModal} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default Mailroom;