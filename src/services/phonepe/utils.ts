import CryptoJS from 'crypto-js';
import { Buffer } from 'buffer';
import { SALT_KEY, SALT_INDEX } from './config';

// Generate unique transaction ID
export function generateTransactionId(): string {
  return `MT${Date.now()}${Math.random().toString(36).substring(2, 7)}`;
}

// Generate unique user ID
export function generateUserId(): string {
  return `MUID${Date.now()}${Math.random().toString(36).substring(2, 7)}`;
}

// Convert amount to paise
export function convertToPaise(amount: number): number {
  return Math.round(amount * 100);
}

// Generate checksum for X-VERIFY header
export function generateChecksum(base64Payload: string): string {
  const string = `${base64Payload}/pg/v1/pay${SALT_KEY}`;
  const sha256 = CryptoJS.SHA256(string).toString(CryptoJS.enc.Hex);
  return `${sha256}###${SALT_INDEX}`;
}

// Encode payload to base64
export function encodePayload(payload: any): string {
  return Buffer.from(JSON.stringify(payload)).toString('base64');
}

// Store transaction details
export function storeTransaction(transactionId: string, amount: number): void {
  localStorage.setItem('pendingTransaction', JSON.stringify({
    transactionId,
    amount,
    timestamp: new Date().toISOString()
  }));
}