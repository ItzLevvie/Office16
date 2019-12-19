"use strict";

const https = require("https");

const getFFN = "f4f024c8-d611-4748-a7e0-02b6e754c0fe";
const getBuild = "16.0.11328.20492";

https.get(`https://mrodevicemgr.edog.officeapps.live.com/mrodevicemgrsvc/api/v2/C2RReleaseData?audienceFFN=${getFFN}`, (getResponse) => {
    getResponse.on("data", (getData) => {
        if (getResponse.statusCode === 200) {
            const getParsedData = JSON.parse(getData);
            const getBuild = getParsedData.AvailableBuild;
            console.log(`Microsoft_DC      : ${getFFN} : ${getBuild}`);
        } else {
            console.log(`Microsoft_DC      : ${getFFN} : ${getBuild}`);
        }
    });
});
