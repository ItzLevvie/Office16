"use strict";

const OfficeC2RAPI = require("../OfficeC2RAPI");

const getBranch = "Microsoft_DC" + "       ";
const getFFN = "f4f024c8-d611-4748-a7e0-02b6e754c0fe";

const getLastUpdated = "211216-2120";
const getBuild = "16.0.13801.21092";

new OfficeC2RAPI().print(getBranch, getFFN, getLastUpdated, getBuild);
