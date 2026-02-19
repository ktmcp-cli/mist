# Mist CLI - Agent Instructions

## What This CLI Does

The Mist CLI provides command-line access to Mist's network management API for wireless infrastructure and network analytics.

## Available Commands

### Configuration
- `mist configure --url <url> --token <token>` - Set API settings

### Constants & Definitions
- `mist alarms` - Get alarm definitions
- `mist channels` - Get AP channel definitions
- `mist applications` - Get application definitions
- `mist countries` - Get country codes
- `mist device-models` - Get device model definitions
- `mist metrics` - Get available insight metrics

### Output Options
- Add `--json` flag for machine-readable JSON output

## Common Use Cases

### Setup
```bash
mist configure --url https://api.mist.com/api/v1 --token YOUR_TOKEN
```

### Query Network Constants
```bash
mist alarms --json
mist channels
mist device-models
```

### Automation Example
```bash
# Get all definitions in JSON format
mist alarms --json > alarms.json
mist channels --json > channels.json
mist applications --json > applications.json
```

## Configuration

Configuration is stored in `~/.config/ktmcp-mist/config.json`

Settings:
- `baseUrl` - API base URL (default: https://api.mist.com/api/v1)
- `apiToken` - API token for authentication

## Error Handling

The CLI will exit with code 1 on errors and display error messages to stderr.

## Integration

This CLI is designed to work seamlessly in shell scripts, CI/CD pipelines, and network automation workflows.
