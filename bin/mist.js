#!/usr/bin/env node

import { Command } from 'commander';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import chalk from 'chalk';
import {
  configure, getAlarmDefs, getApChannels, getApplications,
  getCountryCodes, getDeviceModels, getInsightMetrics
} from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const packageJson = JSON.parse(
  readFileSync(join(__dirname, '../package.json'), 'utf-8')
);

const program = new Command();

program
  .name('mist')
  .description(chalk.cyan('Mist API CLI - Network management and wireless infrastructure'))
  .version(packageJson.version);

program
  .command('configure')
  .description('Configure API settings')
  .option('-u, --url <url>', 'API base URL')
  .option('-t, --token <token>', 'API token')
  .action(configure);

program
  .command('alarms')
  .description('Get alarm definitions')
  .option('--json', 'Output as JSON')
  .action(getAlarmDefs);

program
  .command('channels')
  .description('Get AP channel definitions')
  .option('--json', 'Output as JSON')
  .action(getApChannels);

program
  .command('applications')
  .description('Get application definitions')
  .option('--json', 'Output as JSON')
  .action(getApplications);

program
  .command('countries')
  .description('Get country codes')
  .option('--json', 'Output as JSON')
  .action(getCountryCodes);

program
  .command('device-models')
  .description('Get device model definitions')
  .option('--json', 'Output as JSON')
  .action(getDeviceModels);

program
  .command('metrics')
  .description('Get available insight metrics')
  .option('--json', 'Output as JSON')
  .action(getInsightMetrics);

program.parse(process.argv);
