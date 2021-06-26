"use strict";

const https = require("https");

function print(getBranch, getFFN, getLastUpdated, getBuild) {
    console.log(getBranch + " : " + getFFN + " (" + getLastUpdated + ") : " + getBuild);
}

module.exports = class OfficeC2RAPI {
    print(getBranch, getFFN, getLastUpdated, getBuild) {
        https.get("https://mrodevicemgr.officeapps.live.com/mrodevicemgrsvc/api/v2/C2RReleaseData?audienceFFN=" + getFFN, (getResponse) => {
            getResponse.on("data", (getData) => {
                if (getResponse.statusCode === 200) {
                    const getJSON = JSON.parse(getData);

                    const getYear = getJSON.TimestampUtc.substring(8, 10);
                    const getMonth = getJSON.TimestampUtc.substring(0, 2);
                    const getDay = getJSON.TimestampUtc.substring(3, 5);
                    const getHour = getJSON.TimestampUtc.substring(11, 13);
                    const getMinute = getJSON.TimestampUtc.substring(14, 16);

                    const getDate = getYear + getMonth + getDay;
                    const getTime = getHour + getMinute;
                    const getLastUpdated = getDate + "-" + getTime;

                    const getBuild = getJSON.AvailableBuild;

                    print(getBranch, getFFN, getLastUpdated, getBuild);
                } else if (getResponse.statusCode === 404) {
                    print(getBranch, getFFN, getLastUpdated, getBuild);
                }
            });
        }).on("error", () => {
            print(getBranch, getFFN, getLastUpdated, getBuild);
        });
    }
}
