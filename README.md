- gitclone
- npm rebuild
- npm start


When get the error like
error: bundling failed: Error: While resolving module `react-native-vector-icons/MaterialIcons`, the Haste package `react-native-vector-icons` was found. However the module `MaterialIcons` could not be found within the package. Indeed, none of these files exist:
DO THIS 
VVVVVVV
- rm node_modules/react-native/local-cli/core/fixtures/files/package.json