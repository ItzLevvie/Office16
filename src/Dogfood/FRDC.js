"use strict";

const OfficeC2RAPI = require("../OfficeC2RAPI");

const getBranch = "Dogfood_FRDC" + "       ";
const getFFN = "834504cc-dc55-4c6d-9e71-e024d0253f6d";

const getLastUpdated = "200305-2054";
const getBuild = "16.0.11929.20562";

new OfficeC2RAPI().print(getBranch, getFFN, getLastUpdated, getBuild);
