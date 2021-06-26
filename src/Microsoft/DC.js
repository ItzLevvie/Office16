"use strict";

const OfficeC2RAPI = require("../OfficeC2RAPI");

const getBranch = "Microsoft_DC" + "       ";
const getFFN = "f4f024c8-d611-4748-a7e0-02b6e754c0fe";

const getLastUpdated = "210607-1550";
const getBuild = "16.0.13127.21668";

new OfficeC2RAPI().print(getBranch, getFFN, getLastUpdated, getBuild);
