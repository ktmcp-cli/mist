import axios from 'axios';
import { getConfig } from './config.js';

function getClient() {
  const baseUrl = getConfig('baseUrl') || 'https://api.mist.com/api/v1';
  const apiToken = getConfig('apiToken');

  return axios.create({
    baseURL: baseUrl,
    headers: {
      'Authorization': apiToken ? `Token ${apiToken}` : '',
      'Content-Type': 'application/json'
    }
  });
}

export async function getAlarmDefinitions() {
  const client = getClient();
  const response = await client.get('/const/alarm_defs');
  return response.data;
}

export async function getApChannels() {
  const client = getClient();
  const response = await client.get('/const/ap_channels');
  return response.data;
}

export async function getApplications() {
  const client = getClient();
  const response = await client.get('/const/applications');
  return response.data;
}

export async function getCountryCodes() {
  const client = getClient();
  const response = await client.get('/const/countries');
  return response.data;
}

export async function getDeviceModels() {
  const client = getClient();
  const response = await client.get('/const/device_models');
  return response.data;
}

export async function getInsightMetrics() {
  const client = getClient();
  const response = await client.get('/const/insight_metrics');
  return response.data;
}
