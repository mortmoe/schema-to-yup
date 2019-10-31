import { YupSchemaEntry, YupSchemaEntryError } from "../entry/entry";

import { createYupSchemaEntry } from "../create-entry";

import { extendYupApi } from "../validator-bridge";

function buildYup(schema, config = {}) {
  return new YupBuilder(schema, config).yupSchema;
}

import { YupBuilder } from "./yup-builder";

// import { createYupSchemaEntry } from "./create-entry";
import { YupBuilder } from "../../schema-to-yup.d";

export {
  buildYup,
  YupBuilder,
  YupSchemaEntry,
  YupSchemaEntryError,
  types,
  createYupSchemaEntry,
  extendYupApi
};