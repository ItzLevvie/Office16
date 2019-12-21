"use strict";

const https = require("https");

const getFFN = "834504cc-dc55-4c6d-9e71-e024d0253f6d";
const getBuild = "16.0.11929.20550";

https.get(`https://mrodevicemgr.edog.officeapps.live.com/mrodevicemgrsvc/api/v2/C2RReleaseData?audienceFFN=${getFFN}`, (getResponse) => {
    getResponse.on("data", (getData) => {
        if (getResponse.statusCode === 200) {
            const getParsedData = JSON.parse(getData);
            const getBuild = getParsedData.AvailableBuild;
            console.log(`Dogfood_FRDC      : ${getFFN} : ${getBuild}`);
        } else {
            console.log(`Dogfood_FRDC      : ${getFFN} : ${getBuild}`);
        }
    });
});
