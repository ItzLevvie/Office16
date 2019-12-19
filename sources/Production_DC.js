"use strict";

const https = require("https");

const getFFN = "7ffbc6bf-bc32-4f92-8982-f9dd17fd3114";
const getBuild = "16.0.11328.20492";

https.get(`https://mrodevicemgr.edog.officeapps.live.com/mrodevicemgrsvc/api/v2/C2RReleaseData?audienceFFN=${getFFN}`, (getResponse) => {
    getResponse.on("data", (getData) => {
        if (getResponse.statusCode === 200) {
            const getParsedData = JSON.parse(getData);
            const getBuild = getParsedData.AvailableBuild;
            console.log(`Production_DC     : ${getFFN} : ${getBuild}`);
        } else {
            console.log(`Production_DC     : ${getFFN} : ${getBuild}`);
        }
    });
});
