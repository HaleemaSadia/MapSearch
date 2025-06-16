# MapSearch
MapSearch – Google Places Search with Maps, History &amp; Redux

###### To run  
1. Clone this repository  
2. Go to the directory of the cloned repository  
3. Create a `.env` file in the project root with your Google API key:  
GOOGLE_API_KEY=your_google_maps_api_key_here
5. Run the following command to install dependencies:  
`yarn install`  
6. For iOS, navigate to the ios folder and install pods:  
`cd ios && pod install`  
7. Run the app on your device or emulator:  
`yarn android` or `yarn ios`  

###### App Demo
https://github.com/user-attachments/assets/03c83ae7-5a46-4be9-b1f3-c7cad8a5acc2

###### How to get Google API key  
1. Go to the [Google Cloud Console](https://console.cloud.google.com/) and create or select a project.  
2. Enable **Maps SDK for Android**, **Maps SDK for iOS**, and **Places API** for your project.  
3. Go to **Credentials** and create an API key.  
4. Restrict your API key to Android/iOS apps and APIs for security (recommended).  
5. Copy the API key and add it to your `.env` file as `GOOGLE_API_KEY`.  


