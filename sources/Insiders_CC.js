"use strict";

const https = require("https");

const getFFN = "64256afe-f5d9-4f86-8936-8840a6a4f5be";
const getBuild = "16.0.12325.20214";

https.get(`https://mrodevicemgr.edog.officeapps.live.com/mrodevicemgrsvc/api/v2/C2RReleaseData?audienceFFN=${getFFN}`, (getResponse) => {
    getResponse.on("data", (getData) => {
        if (getResponse.statusCode === 200) {
            const getParsedData = JSON.parse(getData);
            const getBuild = getParsedData.AvailableBuild;
            console.log(`Insiders_CC       : ${getFFN} : ${getBuild}`);
        } else {
            console.log(`Insiders_CC       : ${getFFN} : ${getBuild}`);
        }
    });
});
