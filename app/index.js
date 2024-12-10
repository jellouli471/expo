import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView>
    <View>
      <Text className="text-blue-500">Open up App.js to start working on your app!</Text>
      <StatusBar />
    </View>
    </SafeAreaView>
  );
}
