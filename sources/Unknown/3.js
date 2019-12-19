"use strict";

const https = require("https");

const getFFN = "0002c1ba-b76b-4af9-b1ee-ae2ad587371f";
const getBuild = "";

https.get(`https://mrodevicemgr.edog.officeapps.live.com/mrodevicemgrsvc/api/v2/C2RReleaseData?audienceFFN=${getFFN}`, (getResponse) => {
    getResponse.on("data", (getData) => {
        if (getResponse.statusCode === 200) {
            const getParsedData = JSON.parse(getData);
            const getBuild = getParsedData.AvailableBuild;
            console.log(` : ${getFFN} : ${getBuild}`);
        } else {
            console.log(` : ${getFFN} : ${getBuild}`);
        }
    });
});
