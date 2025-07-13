# ⏰ Time Capsule Email Delivery System

This system automatically sends time capsule messages to recipients at their scheduled delivery dates.

## 🚀 How It Works

1. **Message Creation**: Users create time capsules with messages and delivery dates
2. **Storage**: Messages are saved to Firebase Firestore
3. **Automated Delivery**: A cron job checks every 6 hours for messages ready to be delivered
4. **Email Sending**: Messages are sent via Gmail using Nodemailer
5. **Cleanup**: Delivered messages are removed from the database

## 📧 Email Delivery System

### Automated Delivery (Production)
- **Cron Job**: Runs every 6 hours via Vercel Cron
- **Endpoint**: `/api/cron/deliver-time-capsules`
- **Schedule**: `0 */6 * * *` (every 6 hours)

### Manual Delivery (Testing)
- **Endpoint**: `/api/manual-delivery`
- **Admin Panel**: `/admin/time-capsules`
- **Use Case**: Testing and immediate delivery

## 🔧 Setup Instructions

### 1. Email Configuration

You need to set up Gmail for sending emails:

#### Option A: Gmail App Password (Recommended)
1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account Settings
   - Security → 2-Step Verification → App passwords
   - Generate a password for "Mail"
3. Use this app password in your environment variables

#### Option B: Gmail Less Secure Apps (Not Recommended)
1. Enable "Less secure app access" in Gmail settings
2. Use your regular Gmail password

### 2. Environment Variables

Add these to your `.env.local` file:

```env
# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password-or-password

# Cron Security (Optional)
CRON_SECRET=your-secret-key-here

# Firebase Configuration (Already set up)
FIREBASE_API_KEY=your-firebase-api-key
FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_STORAGE_BUCKET=your-project.appspot.com
FIREBASE_MESSAGING_SENDER_ID=your-sender-id
FIREBASE_APP_ID=your-app-id
```

### 3. Firebase Firestore Rules

Update your Firestore security rules to allow read/write access:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /timeCapsules/{document} {
      allow read, write: if true; // For development
      // For production, use proper authentication rules
    }
  }
}
```

### 4. Vercel Deployment

If deploying to Vercel:

1. **Add Environment Variables** in Vercel dashboard
2. **Enable Cron Jobs** (Pro plan required)
3. **Deploy** your application

## 📋 Testing the System

### 1. Create a Test Time Capsule
1. Go to `/whispered-time-capsule`
2. Enter a message and set delivery date to 1-2 minutes from now
3. Add your email address
4. Click "Send to Future"

### 2. Test Manual Delivery
1. Go to `/admin/time-capsules`
2. Click "🚀 Trigger Delivery Now"
3. Check your email for the delivered message

### 3. Monitor Logs
Check your server logs for delivery status:
- `🕐 Starting time capsule delivery check...`
- `📦 Found X time capsules ready for delivery`
- `✅ Email sent successfully to email@example.com`

## 🔍 Troubleshooting

### Email Not Sending
1. **Check Gmail Settings**:
   - Ensure 2FA is enabled and app password is used
   - Or enable "Less secure app access"
2. **Verify Environment Variables**:
   - `EMAIL_USER` and `EMAIL_PASS` are set correctly
3. **Check Gmail Quotas**:
   - Gmail has daily sending limits (500/day for regular accounts)

### Firebase Errors
1. **Check Firestore Rules**:
   - Ensure read/write permissions are set
2. **Verify Firebase Config**:
   - All environment variables are set correctly

### Cron Job Not Running
1. **Vercel Pro Plan**: Cron jobs require Vercel Pro
2. **Alternative**: Use external cron services like:
   - [cron-job.org](https://cron-job.org)
   - [EasyCron](https://www.easycron.com)
   - Set up a server with cron

## 📊 Monitoring

### Admin Panel Features
- View pending time capsules
- Manual delivery trigger
- System status information
- Real-time delivery status

### Log Monitoring
- Check server logs for delivery status
- Monitor email sending success/failure
- Track Firebase operations

## 🔒 Security Considerations

1. **Email Security**:
   - Use app passwords instead of regular passwords
   - Consider using dedicated email service (SendGrid, Mailgun)

2. **API Security**:
   - Add authentication to admin panel
   - Use proper CORS settings
   - Implement rate limiting

3. **Data Privacy**:
   - Messages are deleted after delivery
   - No permanent storage of sensitive content

## 🚀 Production Deployment

### Recommended Email Services
1. **SendGrid**: Professional email service
2. **Mailgun**: Reliable email delivery
3. **AWS SES**: Cost-effective for high volume

### Monitoring & Alerts
1. Set up email notifications for delivery failures
2. Monitor cron job execution
3. Track email delivery rates

## 📈 Scaling Considerations

1. **Database**: Firebase Firestore scales automatically
2. **Email Service**: Consider dedicated email providers for high volume
3. **Cron Frequency**: Adjust based on delivery requirements
4. **Error Handling**: Implement retry logic for failed deliveries

## 🎯 Next Steps

1. **Set up email configuration** with your Gmail account
2. **Test the system** with a short delivery time
3. **Deploy to production** with proper environment variables
4. **Monitor delivery** through admin panel and logs

The system is now ready to automatically deliver time capsule messages at their scheduled times! 🎉 