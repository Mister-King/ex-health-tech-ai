# Exercise: HealthTechAI

An exercise for a simple React Native app using the Typicode jsonplaceholder API.

#### Screen 1
A screen containing a list of posts, each cell displaying the title of the post. Tapping a cell should take you to Screen2.

#### Screen 2
The detail screen for the selected post
- Back button should take you back to screen 1
- Post title
- Post body
- Post username
- Post comments (cells with their names and bodies)

## Dependencies
[react-native](https://www.npmjs.com/package/react-native)    
[Cocoapods](https://cocoapods.org)  
[XCode](https://apps.apple.com/gb/app/xcode/id497799835) and iOS Simulator installed.

## Setup

#### Installation
From a terminal in the project folder run:  
```
npm ci
cd ios
pod install
```

#### Running
From a terminal in the project folder run:
```
npm run start
```

To run on iOS Simulator, in a separate terminal tab run:
```
npm run ios
```

#### Cache Clearing
Instead of `npm run start`, use:
```
npx react-native start --reset-cache
```
