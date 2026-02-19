import { getConfig, setConfig } from './config.js';
import * as api from './api.js';
import chalk from 'chalk';

export async function configure(options) {
  if (options.url) setConfig('baseUrl', options.url);
  if (options.token) setConfig('apiToken', options.token);
  console.log(chalk.green('✓'), 'Configuration saved');
}

export async function getAlarmDefs(options) {
  try {
    const data = await api.getAlarmDefinitions();
    if (options.json) {
      console.log(JSON.stringify(data, null, 2));
    } else {
      console.log(chalk.cyan('Alarm Definitions:'));
      Object.keys(data).forEach(key => console.log(`  - ${key}`));
    }
  } catch (error) {
    console.error(chalk.red('Error:'), error.message);
    process.exit(1);
  }
}

export async function getApChannels(options) {
  try {
    const data = await api.getApChannels();
    if (options.json) {
      console.log(JSON.stringify(data, null, 2));
    } else {
      console.log(chalk.cyan('AP Channels:'));
      Object.keys(data).forEach(band => {
        console.log(`  ${band}:`, data[band].join(', '));
      });
    }
  } catch (error) {
    console.error(chalk.red('Error:'), error.message);
    process.exit(1);
  }
}

export async function getApplications(options) {
  try {
    const data = await api.getApplications();
    if (options.json) {
      console.log(JSON.stringify(data, null, 2));
    } else {
      console.log(chalk.cyan('Applications:'));
      data.forEach(app => console.log(`  - ${app.name || app.key}`));
    }
  } catch (error) {
    console.error(chalk.red('Error:'), error.message);
    process.exit(1);
  }
}

export async function getCountryCodes(options) {
  try {
    const data = await api.getCountryCodes();
    if (options.json) {
      console.log(JSON.stringify(data, null, 2));
    } else {
      console.log(chalk.cyan('Country Codes:'));
      Object.keys(data).forEach(code => {
        console.log(`  ${code}: ${data[code]}`);
      });
    }
  } catch (error) {
    console.error(chalk.red('Error:'), error.message);
    process.exit(1);
  }
}

export async function getDeviceModels(options) {
  try {
    const data = await api.getDeviceModels();
    if (options.json) {
      console.log(JSON.stringify(data, null, 2));
    } else {
      console.log(chalk.cyan('Device Models:'));
      data.forEach(model => console.log(`  - ${model}`));
    }
  } catch (error) {
    console.error(chalk.red('Error:'), error.message);
    process.exit(1);
  }
}

export async function getInsightMetrics(options) {
  try {
    const data = await api.getInsightMetrics();
    if (options.json) {
      console.log(JSON.stringify(data, null, 2));
    } else {
      console.log(chalk.cyan('Insight Metrics:'));
      Object.keys(data).forEach(key => console.log(`  - ${key}`));
    }
  } catch (error) {
    console.error(chalk.red('Error:'), error.message);
    process.exit(1);
  }
}
