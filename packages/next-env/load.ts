import { loadEnvConfig, Log } from './index'

// When `$NEXT_ENV_DISABLE_LOGGING` is enabled, replace the default
// console logs with this object so that no messages are shown in
// stdout.
const MOCK_LOG: Log = {
  info() {
    /* no-op */
  },

  error() {
    /* no-op */
  },
}

// The directory that `loadEnvConfig()` will search for files in
const dir = process.env.NEXT_ENV_CONFIG_PATH || process.cwd()

// Whether to use the development configuration files
const dev = process.env.NODE_ENV !== 'production'

// The logging object, as determined by $NEXT_ENV_DISABLE_LOGGING
const log = process.env.NEXT_ENV_DISABLE_LOGGING ? MOCK_LOG : console

// Load configuration into `process.env` using the above settings and
// export it back to the caller.
const config = loadEnvConfig(dir, dev, log)

/**
 * Automatically load environment configuration from the current working
 * directory or the value of `$NEXT_ENV_CONFIG_PATH`. Similar to
 * `dotenv/config`, this file can be required prior to running scripts
 * or as a setup file in testing to load your environment configuration
 * exactly the same way as Next.js does.
 */
export default config
