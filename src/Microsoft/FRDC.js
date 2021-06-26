"use strict";

const OfficeC2RAPI = require("../OfficeC2RAPI");

const getBranch = "Microsoft_FRDC" + "     ";
const getFFN = "9a3b7ff2-58ed-40fd-add5-1e5158059d1c";

const getLastUpdated = "210608-0810";
const getBuild = "16.0.13801.20738";

new OfficeC2RAPI().print(getBranch, getFFN, getLastUpdated, getBuild);
