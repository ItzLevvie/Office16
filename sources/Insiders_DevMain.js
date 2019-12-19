"use strict";

const https = require("https");

const getFFN = "5440fd1f-7ecb-4221-8110-145efaa6372f";
const getBuild = "16.0.12410.20000";

https.get(`https://mrodevicemgr.edog.officeapps.live.com/mrodevicemgrsvc/api/v2/C2RReleaseData?audienceFFN=${getFFN}`, (getResponse) => {
    getResponse.on("data", (getData) => {
        if (getResponse.statusCode === 200) {
            const getParsedData = JSON.parse(getData);
            const getBuild = getParsedData.AvailableBuild;
            console.log(`Insiders_DevMain  : ${getFFN} : ${getBuild}`);
        } else {
            console.log(`Insiders_DevMain  : ${getFFN} : ${getBuild}`);
        }
    });
});
