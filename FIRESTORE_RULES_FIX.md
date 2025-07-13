# Fix Firestore Security Rules

## 🚨 Error: "Missing or insufficient permissions"

The Firebase security rules are blocking write operations. Here's how to fix it:

### Step 1: Go to Firebase Console
1. Visit [Firebase Console](https://console.firebase.google.com/)
2. Select your project: `forfutureme-55cd2`
3. Go to "Firestore Database" in the left sidebar

### Step 2: Update Security Rules
1. Click on the "Rules" tab
2. Replace the current rules with this:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /timeCapsules/{document} {
      allow read, write: if true;
    }
  }
}
```

### Step 3: Publish Rules
1. Click "Publish" button
2. Wait for the rules to update (usually takes a few seconds)

### Step 4: Test Again
1. Go back to your app: `http://localhost:3000/whispered-time-capsule`
2. Fill out the form and submit
3. Should work now!

## 🔍 What These Rules Do

- `allow read, write: if true;` - Allows anyone to read and write to the timeCapsules collection
- This is for development/testing purposes
- For production, you'd want more secure rules

## ✅ Expected Result

After updating the rules, you should see:
- ✅ No more permission errors
- ✅ Time capsule saves successfully
- ✅ Success toast appears
- ✅ Page reloads after 2 seconds

## 🆘 If Still Not Working

1. **Check Rules Status**: Make sure rules are published
2. **Wait a Moment**: Rules can take 30-60 seconds to propagate
3. **Clear Browser Cache**: Hard refresh the page (Ctrl+F5)
4. **Check Console**: Look for any new error messages 