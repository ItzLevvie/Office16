"use strict";

const OfficeC2RAPI = require("../OfficeC2RAPI");

const getBranch = "Insiders_DevMain" + "   ";
const getFFN = "5440fd1f-7ecb-4221-8110-145efaa6372f";

const getLastUpdated = "211222-1450";
const getBuild = "16.0.14816.20004";

new OfficeC2RAPI().print(getBranch, getFFN, getLastUpdated, getBuild);
