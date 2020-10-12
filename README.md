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
`react-native` installed.  
XCode and iOS Simulator installed.

## Setup
In a terminal run:  
```
npm ci
npm run start
```

To run with a clear cache, use:
```
npx react-native start --reset-cache
```

To run on iOS Simulator, in a separate terminal tab run:
```
npx react-native run-ios
```
