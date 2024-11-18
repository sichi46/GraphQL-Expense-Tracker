import { mergeTypeDefs } from "@graphql-tools/merge";

//tyeDefs
import userTypedef from "./user-type-def.js";
import transactionTypeDef from "./transaction-type-def.js";

const mergedTypeDefs = mergeTypeDefs([userTypedef, transactionTypeDef]);

export default mergedTypeDefs;
