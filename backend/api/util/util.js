const {remote} = require('webdriverio');
const firefoxPath = '/app/vendor/firefox/firefox';

function getXpath(carrier) {
  if(carrier === 'ups') {
    return "//*[@id='st_App_PkgStsMonthNum']";
  } else if (carrier === 'fedex') {
    return "/html/body/app-root/div/div[2]/div/div/ng-component/trk-shared-stylesheet-wrapper/div/div/trk-shared-detail-page/trk-shared-stylesheet-wrapper/div/div/trk-shared-detail-page-default/div/div/section[1]/trk-shared-shipment-status-delivery-date/h1";
  } else if(carrier === 'usps') {
    return "/html/body/div[1]/div[5]/div/div/div/div/div[1]/div[2]/h2";
  } else if(carrier === 'narvar') {
    return "/html/body/div[1]/div/support-layout/supportlayout/div/div[2]/div/div[1]/div[1]/div/div/div[2]/edd-widget/div/div[1]/div[2]";
    // day: "/html/body/div[1]/div/support-layout/supportlayout/div/div[2]/div/div[1]/div[1]/div/div/div[2]/edd-widget/div/div[1]/div[2]/div[1]/div[1]"
    // month: "/html/body/div[1]/div/support-layout/supportlayout/div/div[2]/div/div[1]/div[1]/div/div/div[2]/edd-widget/div/div[1]/div[2]/div[1]/div[2]
    // date: "/html/body/div[1]/div/support-layout/supportlayout/div/div[2]/div/div[1]/div[1]/div/div/div[2]/edd-widget/div/div[1]/div[2]/div[2]"
    // return "/html/body/div[1]/div/support-layout/supportlayout/div/div[2]/div/div[1]/div[1]/div/div/div[2]/div/tracking-status/div/h2";
  } else if(carrier === 'ontrac') {
    return "/html/body/div[1]/table[2]/tbody/tr/td[2]/div/table/tbody/tr/td/div/div/div[2]/div[1]/div[2]/div[2]/div";
  }
}

// TODO: Check for each link if its ups, usps, fedex
exports.getStatusFromUrl = async (url, carrier) => {

  let statusObject = {'status': ''};
  
  const browser = await remote({
    capabilities: {
      browserName: 'firefox',
      "firefox_binary": firefoxPath,
      "moz:firefoxOptions": {
        args: [
          '--headless',
          '--disable-gpu'  
        ]
      }
    },
  });

  try {
    await browser.url(url);
    const xPath = getXpath(carrier);
    let res = await browser.$(xPath);
    statusObject.status = await res.getText();

  } catch(e) {
    console.error(e);
    statusObject.status = "Unable to get status";
  } finally {
    await browser.deleteSession();
  }

  return statusObject;
}

// TODO: Check for each link if its ups, usps, fedex
exports.getCarrierNameFromUrl = (url) =>  {
  let carrierName = url.split(".")[1];
  return {'carrier':carrierName};
}
