"use strict";

const OfficeC2RAPI = require("../OfficeC2RAPI");

const getBranch = "Microsoft_FRDC" + "     ";
const getFFN = "9a3b7ff2-58ed-40fd-add5-1e5158059d1c";

const getLastUpdated = "211216-2340";
const getBuild = "16.0.14326.20702";

new OfficeC2RAPI().print(getBranch, getFFN, getLastUpdated, getBuild);
