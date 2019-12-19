"use strict";

const https = require("https");

const getFFN = "f2e724c1-748f-4b47-8fb8-8e0d210e9208";
const getBuild = "16.0.10353.20037";

https.get(`https://mrodevicemgr.edog.officeapps.live.com/mrodevicemgrsvc/api/v2/C2RReleaseData?audienceFFN=${getFFN}`, (getResponse) => {
    getResponse.on("data", (getData) => {
        if (getResponse.statusCode === 200) {
            const getParsedData = JSON.parse(getData);
            const getBuild = getParsedData.AvailableBuild;
            console.log(`Production_LTSC   : ${getFFN} : ${getBuild}`);
        } else {
            console.log(`Production_LTSC   : ${getFFN} : ${getBuild}`);
        }
    });
});
