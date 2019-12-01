const https = require("https");

const getFFN = "ea4a4090-de26-49d7-93c1-91bff9e53fc3";
const getBuild = "";

https.get(`https://mrodevicemgr.officeapps.live.com/mrodevicemgrsvc/api/v2/C2RReleaseData?audienceFFN=${getFFN}`, (getResponse) => {
    getResponse.on("data", (getData) => {
        if (getResponse.statusCode === 200) {
            const getParsedData = JSON.parse(getData);
            const getBuild = getParsedData.AvailableBuild;
            console.log(` : ${getFFN} : ${getBuild}`);
        } else {
            console.log(` : ${getFFN} : ${getBuild}`);
        };
    });
});
