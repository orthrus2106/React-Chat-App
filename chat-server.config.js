const env = globalThis.process?.env ?? {}

export default {
  host: '0.0.0.0',
  port: env.PORT || 5000,
  public: './frontend/dist',
}
