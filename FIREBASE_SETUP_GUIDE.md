# Firebase Setup Guide for Time Capsule

## Quick Fix: The app now works in demo mode! 🎉

The time capsule app is now working without Firebase configuration. You can test all the features, and it will show "Demo mode" messages.

## To enable real Firebase functionality:

### Step 1: Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project"
3. Enter project name (e.g., "7inseven-time-capsule")
4. Follow the setup wizard

### Step 2: Enable Firestore Database
1. In your Firebase project, go to "Firestore Database"
2. Click "Create database"
3. Choose "Start in test mode" (for development)
4. Select a location close to you

### Step 3: Get Your Firebase Config
1. In Firebase Console, click the gear icon ⚙️
2. Select "Project settings"
3. Scroll down to "Your apps"
4. Click the web icon (</>)
5. Register your app with a nickname
6. Copy the config object

### Step 4: Add Environment Variables
Create a `.env.local` file in your project root:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### Step 5: Set Firestore Security Rules
In Firebase Console → Firestore Database → Rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /timeCapsules/{document} {
      allow read, write: if true; // For demo - add auth later
    }
  }
}
```

### Step 6: Restart Your Development Server
```bash
npm run dev
```

## What's Working Now:
- ✅ App loads without Firebase errors
- ✅ All UI features work perfectly
- ✅ Form validation and error handling
- ✅ Demo mode with realistic feedback
- ✅ Ready for Firebase integration

## Next Steps:
1. Follow the setup guide above
2. Add your Firebase config to `.env.local`
3. Restart the dev server
4. Test creating a time capsule
5. Set up email delivery (optional)

The app will automatically detect when Firebase is configured and switch from demo mode to full functionality! 