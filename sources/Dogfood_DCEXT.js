"use strict";

const https = require("https");

const getFFN = "c4a7726f-06ea-48e2-a13a-9d78849eb706";
const getBuild = "16.0.10730.20426";

https.get(`https://mrodevicemgr.edog.officeapps.live.com/mrodevicemgrsvc/api/v2/C2RReleaseData?audienceFFN=${getFFN}`, (getResponse) => {
    getResponse.on("data", (getData) => {
        if (getResponse.statusCode === 200) {
            const getParsedData = JSON.parse(getData);
            const getBuild = getParsedData.AvailableBuild;
            console.log(`Dogfood_DCEXT     : ${getFFN} : ${getBuild}`);
        } else {
            console.log(`Dogfood_DCEXT     : ${getFFN} : ${getBuild}`);
        }
    });
});
