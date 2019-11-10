const https = require('https');

https.get('https://mrodevicemgr.edog.officeapps.live.com/mrodevicemgrsvc/api/v2/C2RReleaseData?audienceFFN=c4a7726f-06ea-48e2-a13a-9d78849eb706', (res) => {
    res.on('data', (d) => {
        let obj = JSON.parse(d);
        let id = obj.FFN;
        let ver = obj.AvailableBuild;

        console.log(`Dogfood_DCEXT     : ${id} : ${ver}`);
    });
});
