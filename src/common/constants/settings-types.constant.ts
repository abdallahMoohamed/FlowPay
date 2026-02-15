export enum SETTINGS_TYPES {
  WALLET_BALANCE = 'WalletBalance',
  DAILY_TRANSFER = 'DailyTransfer',
  PER_TRANSACTION = 'PerTransaction',
}

// Max wallet balance (configurable per user/merchant)
// Daily transfer limit (per kyсLevel)
// Per-transaction max amount
// Rate limiting: X requests per minute (use Redis)
