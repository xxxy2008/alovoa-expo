module.exports = {
  "expo": {
    "name": "Alovoa",
    "slug": "alovoa-c4gp9s0yxm9bhh-q9m39c",
    "version": "2.2.2",
    "scheme": "alovoa",
    "orientation": "portrait",
    "userInterfaceStyle": "automatic",
    "icon": "./assets/icon.png",
    "newArchEnabled": true,
    "plugins": [
      [
        "expo-image-picker",
        {
          "photosPermission": "The app accesses your photos to let you share them with other users."
        }
      ],
      "./plugins/setClearTextTrafficFalse",
      "expo-localization",
      [
        "expo-build-properties",
        {
          "android": {
            "compileSdkVersion": 35,
            "targetSdkVersion": 35,
            "buildToolsVersion": "35.0.0"
          },
          "ios": {
            "deploymentTarget": "15.1"
          }
        }
      ]
    ],
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ec407a",
      "dark": {
        "image": "./assets/splash.png",
        "backgroundColor": "#121212"
      }
    },
    "updates": {
      "enabled": false,
      "checkAutomatically": "ON_ERROR_RECOVERY",
      "url": "https://u.expo.dev/8d52660a-fa3a-4e06-b511-0e30a263d991"
    },
    "assetBundlePatterns": ["**/*"],
    "ios": {
      "supportsTablet": true,
      "usesAppleSignIn": false,
      "bundleIdentifier": "app.lgm.1506",
      "buildNumber": "40",
      "associatedDomains": ["applinks:alovoa.com"],
      "infoPlist": {
        "LSApplicationQueriesSchemes": ["alovoa"],
        "ITSAppUsesNonExemptEncryption": false,
        "NSLocationWhenInUseUsageDescription": "This app uses the location to list other users in close proximity",
        "NSDocumentsFolderUsageDescription": "This app uses the Documents folder to store the requested user data",
        "NSMicrophoneUsageDescription": "This app uses the microphone to record the users voice for other users"
      }
    },
    "android": {
      "icon": "./assets/icon-round.png",
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "monochromeImage": "./assets/monochrome-icon.png",
        "backgroundColor": "#ec407a"
      },
      "intentFilters": [
        {
          "action": "VIEW",
          "data": [{ "scheme": "alovoa" }],
          "category": ["BROWSABLE", "DEFAULT"]
        }
      ],
      "package": "com.alovoa.expo",
      "permissions": [
        "android.permission.ACCESS_COARSE_LOCATION",
        "android.permission.ACCESS_FINE_LOCATION",
        "android.permission.RECORD_AUDIO"
      ],
      "versionCode": 40
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "extra": {
      "eas": {
        "projectId": "8d52660a-fa3a-4e06-b511-0e30a263d991"
      }
    },
    "owner": "dayitrading001",
    "runtimeVersion": {
      "policy": "appVersion"
    }
  }
};