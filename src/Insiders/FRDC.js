"use strict";

const OfficeC2RAPI = require("../OfficeC2RAPI");

const getBranch = "Insiders_FRDC" + "      ";
const getFFN = "b8f9b850-328d-4355-9145-c59439a0c4cf";

const getLastUpdated = "211222-1530";
const getBuild = "16.0.14326.20702";

new OfficeC2RAPI().print(getBranch, getFFN, getLastUpdated, getBuild);
