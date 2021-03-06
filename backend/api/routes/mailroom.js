const express = require('express');
const router = express.Router();
const db = require('../util/database');
const BityClient = require('bitly').BitlyClient;
const token = process.env.TOKEN;
const bitly = new BityClient(token);
const geckoDriver = require('geckodriver');
const { getCarrierNameFromUrl, getStatusFromUrl } = require('../util/util');
const Package = require("../models/Package");

async function getPackages(uid) {
  return await Package.findAll({
    where: {
      userId: uid,
    }
  });
}


router.get("/:uid/packages", async (req, res) => {
  data = await getPackages(req.params.uid);
  res.json(data);
})

router.post("/add-package", async(req, res) => {
  geckoDriver.start();

  const name = req.body.name;
  const uid = req.body.uid;
  const trackingLink = await bitly.shorten(req.body.trackingLink);
  const carrierData = getCarrierNameFromUrl(req.body.trackingLink);
  const statusData = await getStatusFromUrl(req.body.trackingLink, carrierData.carrier);

  geckoDriver.stop();

  if(statusData.status === "Unable to get status") {
    res.json({
      'status': statusData.status,
      'isError': true
    })
  } else {
    const newPackage = await Package.create({
      'name': name,
      'trackingLink': trackingLink.link,
      'status': statusData.status,
      'carrier': carrierData.carrier,
      'userId': uid
    });
    res.json(newPackage);
  }
});

router.put("/update-package/:id", async (req, res) => {
  const id = req.params.id;

  try {
    geckoDriver.start();
    const package = await Package.findAll({
      where: {
        id: id
      }
    });

    const statusData = await getStatusFromUrl(package[0].trackingLink, package[0].carrier);
    geckoDriver.stop();

    package[0].status = statusData.status;
    await Package.update({status: statusData.status}, {
      where: {
        id: id
      }
    })
    res.json({
      updated: true, 
      msg: `Package ${package[0].name} is up to date!`,
      status: package[0].status
    });
  } catch(err) {
    console.error(err);
  }
});

// TODO: node flask message for deleting or adding item
router.delete("/delete-package/:id", async (req, res) => {
  const id = req.params.id;

  await Package.destroy({
    where: {
      id: id
    }
  });

});

module.exports = router;