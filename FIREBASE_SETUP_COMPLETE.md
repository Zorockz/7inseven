# Complete Firebase Setup for Time Capsule

## 🚀 Quick Setup (5 minutes)

### Step 1: Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project"
3. Name: `7inseven-time-capsule`
4. Follow wizard (skip Google Analytics)

### Step 2: Enable Firestore Database
1. In Firebase Console → "Firestore Database"
2. Click "Create database"
3. Choose "Start in test mode"
4. Select location: `us-central1`

### Step 3: Get Your Config
1. Click gear icon ⚙️ → "Project settings"
2. Scroll to "Your apps"
3. Click web icon (</>)
4. Register app: `7inseven-web`
5. Copy the config object

### Step 4: Create .env.local File
Create this file in your project root:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### Step 5: Set Firestore Rules
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

### Step 6: Restart Development Server
```bash
npm run dev
```

## ✅ Test Your Setup

1. **Check Backend Status**: Visit `http://localhost:3000/api/test-backend`
2. **Submit Time Capsule**: Fill form and check console logs
3. **Verify Data**: Check Firebase Console → Firestore Database

## 🔍 What You'll See

**Before Setup:**
- Demo mode messages
- No real data saved
- Console shows "Firebase not configured"

**After Setup:**
- Real success messages
- Data saved to Firebase
- Console shows "Firebase configured: true"

## 🎯 Expected Results

After setup, when you submit a time capsule:
- ✅ Data saves to Firebase Firestore
- ✅ Real capsule ID generated
- ✅ Toast shows "Time capsule created!"
- ✅ Data visible in Firebase Console

## 🆘 Troubleshooting

**If you see errors:**
1. Check `.env.local` file exists
2. Verify all environment variables are set
3. Restart development server
4. Check Firebase Console for errors

**Need help?** Check the console logs for detailed error messages! 