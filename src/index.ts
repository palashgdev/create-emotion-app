require("module-alias/register");

import chalk from "chalk";
import { Command } from "commander";
import getVersion from "@app/lib/getVersion";

const version = getVersion();

const program = new Command();
program.version(version);

console.log(`\nWelcome to ${chalk.magenta("create-emotion-app")}\n`);
