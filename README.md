# Pit Stop

A community-driven platform for car enthusiasts to post local meetups, rare car sightings, and events with geotags.

Features

User Authentication: Sign up/login using Google or email/password (Firebase Auth).

Post Meetups & Sightings: Users can share car events, rare finds, and photos.

Geotagging: Attach locations to posts using Google Maps API.

Interactive Feed: View, like, and comment on posts.

Tech Stack

Frontend: React (JavaScript)

Backend: Firebase (Firestore, Authentication, Storage)

APIs: Google Maps API for location tagging

Getting Started

1. Clone the Repository

git clone https://github.com/your-username/pit-stop.git
cd pit-stop

2. Install Dependencies

npm install

3. Set Up Firebase

Create a Firebase project at Firebase Console.

Enable Firestore, Authentication, and Storage.

Copy the Firebase config and create a .env file:

REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id

4. Run the Development Server

npm start

Contribution

Fork the repository.

Create a feature branch (git checkout -b feature-name).

Commit your changes (git commit -m 'Added new feature').

Push to the branch (git push origin feature-name).

Open a pull request.

License

MIT License
