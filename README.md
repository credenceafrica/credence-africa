# Firebase Studio

This is a NextJS starter in Firebase Studio.

To get started, take a look at src/app/page.tsx.

## Deploying Firestore Rules

To resolve permission errors when fetching or creating data, you need to deploy the Firestore security rules.

1. **Install the Firebase CLI:** If you haven't already, install the Firebase CLI on your local machine:
   `npm install -g firebase-tools`

2. **Login to Firebase:**
   `firebase login`

3. **Initialize Firestore in your project:**
   `firebase init firestore`
   - Select your existing Firebase project.
   - When prompted for the rules file, use the default `firestore.rules`.
   - When prompted for the indexes file, you can use the default or create an empty one if you're not sure.

4. **Deploy the rules:**
   `firebase deploy --only firestore:rules`

After following these steps, your app will have the correct permissions to interact with Firestore.
