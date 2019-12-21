"use strict";

const https = require("https");

const getFFN = "9a3b7ff2-58ed-40fd-add5-1e5158059d1c";
const getBuild = "16.0.11929.20550";

https.get(`https://mrodevicemgr.edog.officeapps.live.com/mrodevicemgrsvc/api/v2/C2RReleaseData?audienceFFN=${getFFN}`, (getResponse) => {
    getResponse.on("data", (getData) => {
        if (getResponse.statusCode === 200) {
            const getParsedData = JSON.parse(getData);
            const getBuild = getParsedData.AvailableBuild;
            console.log(`Microsoft_FRDC    : ${getFFN} : ${getBuild}`);
        } else {
            console.log(`Microsoft_FRDC    : ${getFFN} : ${getBuild}`);
        }
    });
});
