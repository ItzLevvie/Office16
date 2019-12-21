"use strict";

const https = require("https");

const getFFN = "1d2d2ea6-1680-4c56-ac58-a441c8c24ff9";
const getBuild = "16.0.10354.20004";

https.get(`https://mrodevicemgr.edog.officeapps.live.com/mrodevicemgrsvc/api/v2/C2RReleaseData?audienceFFN=${getFFN}`, (getResponse) => {
    getResponse.on("data", (getData) => {
        if (getResponse.statusCode === 200) {
            const getParsedData = JSON.parse(getData);
            const getBuild = getParsedData.AvailableBuild;
            console.log(`Microsoft_LTSC    : ${getFFN} : ${getBuild}`);
        } else {
            console.log(`Microsoft_LTSC    : ${getFFN} : ${getBuild}`);
        }
    });
});
