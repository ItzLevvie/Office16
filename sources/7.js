const https = require("https");

const getFFN = "b8f9b850-328d-4355-9145-c59439a0c4cf";
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
