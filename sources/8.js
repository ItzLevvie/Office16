const https = require("https");

const getFFN = "2e148de9-61c8-4051-b103-4af54baffbb4";
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
