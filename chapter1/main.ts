import invoices from "./data/invoices.json";
import plays from "./data/plays.json";
import { statement } from "./statement.refac";

const [invoice] = JSON.parse(JSON.stringify(invoices));
const play = JSON.parse(JSON.stringify(plays));

const result = statement(invoice, play);
console.log(result);
