"use strict";

const OfficeC2RAPI = require("../OfficeC2RAPI");

const getBranch = "Microsoft_DevMain" + "  ";
const getFFN = "b61285dd-d9f7-41f2-9757-8f61cba4e9c8";

const getLastUpdated = "211223-0515";
const getBuild = "16.0.14820.20000";

new OfficeC2RAPI().print(getBranch, getFFN, getLastUpdated, getBuild);
