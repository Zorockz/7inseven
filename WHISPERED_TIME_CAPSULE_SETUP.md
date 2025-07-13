# Whispered Time Capsule Setup Guide

## Firebase Configuration

To enable the time capsule functionality, you need to set up Firebase:

1. Create a Firebase project at https://console.firebase.google.com/
2. Enable Firestore Database
3. Set up security rules for the `timeCapsules` collection
4. Add your Firebase configuration to `.env.local`:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

## Firestore Security Rules

Add these rules to your Firestore database:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /timeCapsules/{document} {
      allow read, write: if true; // For demo purposes - add proper auth in production
    }
  }
}
```

## Email Delivery Setup

For actual email delivery, integrate with an email service like SendGrid, Mailgun, or Resend:

1. Install the email service SDK
2. Update the `/api/time-capsule-delivery.ts` file to use the email service
3. Set up a cron job or serverless function to call the delivery endpoint regularly

## Features

- ✅ Create time capsules with custom delivery dates
- ✅ Support for multiple email recipients
- ✅ Firebase backend storage
- ✅ Automatic delivery system (API endpoint ready)
- ✅ Beautiful UI with TimeSend design system
- ✅ Form validation and error handling

## Usage

1. Navigate to `/whispered-time-capsule`
2. Write your message
3. Select delivery time (1, 5, or 10 years)
4. Add recipient email addresses
5. Click "Send to the Future"

The message will be stored in Firebase and delivered on the specified date. 