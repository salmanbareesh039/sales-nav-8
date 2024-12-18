import { MERCHANT_ID, API_ENDPOINT } from './config';
import { PaymentPayload, PaymentResponse } from './types';
import {
  generateTransactionId,
  generateUserId,
  convertToPaise,
  generateChecksum,
  encodePayload,
  storeTransaction
} from './utils';

export async function initiatePayment(amount: number): Promise<string> {
  try {
    // Create payment payload
    const payload: PaymentPayload = {
      merchantId: MERCHANT_ID,
      merchantTransactionId: generateTransactionId(),
      merchantUserId: generateUserId(),
      amount: convertToPaise(amount),
      redirectUrl: `${window.location.origin}/payment-status`,
      redirectMode: 'REDIRECT',
      callbackUrl: `${window.location.origin}/api/payment-callback`,
      paymentInstrument: {
        type: 'PAY_PAGE'
      }
    };

    // Encode payload and generate checksum
    const base64Payload = encodePayload(payload);
    const checksum = generateChecksum(base64Payload);

    // Make API request
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-VERIFY': checksum
      },
      body: JSON.stringify({
        request: base64Payload
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    const data: PaymentResponse = await response.json();

    if (!data.success) {
      throw new Error(data.message || 'Payment initiation failed');
    }

    // Store transaction details
    storeTransaction(payload.merchantTransactionId, amount);

    // Return the redirect URL
    return data.data.instrumentResponse.redirectInfo.url;
  } catch (error: any) {
    console.error('Payment Error:', error);
    throw new Error(error.message || 'Failed to initiate payment');
  }
}