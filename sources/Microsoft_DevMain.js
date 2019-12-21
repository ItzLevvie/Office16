"use strict";

const https = require("https");

const getFFN = "b61285dd-d9f7-41f2-9757-8f61cba4e9c8";
const getBuild = "16.0.12418.20000";

https.get(`https://mrodevicemgr.edog.officeapps.live.com/mrodevicemgrsvc/api/v2/C2RReleaseData?audienceFFN=${getFFN}`, (getResponse) => {
    getResponse.on("data", (getData) => {
        if (getResponse.statusCode === 200) {
            const getParsedData = JSON.parse(getData);
            const getBuild = getParsedData.AvailableBuild;
            console.log(`Microsoft_DevMain : ${getFFN} : ${getBuild}`);
        } else {
            console.log(`Microsoft_DevMain : ${getFFN} : ${getBuild}`);
        }
    });
});
