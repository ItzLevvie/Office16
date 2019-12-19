"use strict";

const https = require("https");

const getFFN = "492350f6-3a01-4f97-b9c0-c7c6ddf67d60";
const getBuild = "16.0.12228.20364";

https.get(`https://mrodevicemgr.edog.officeapps.live.com/mrodevicemgrsvc/api/v2/C2RReleaseData?audienceFFN=${getFFN}`, (getResponse) => {
    getResponse.on("data", (getData) => {
        if (getResponse.statusCode === 200) {
            const getParsedData = JSON.parse(getData);
            const getBuild = getParsedData.AvailableBuild;
            console.log(`Production_CC     : ${getFFN} : ${getBuild}`);
        } else {
            console.log(`Production_CC     : ${getFFN} : ${getBuild}`);
        }
    });
});
