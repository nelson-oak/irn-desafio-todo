import React, { useMemo } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Appearance } from 'react-native';

export function Header() {
  const isDarkTheme = useMemo(() => {
    return Appearance.getColorScheme() === 'dark'
  }, [])

  return (
    <SafeAreaView style={[
      styles.container,
      isDarkTheme && styles.containerDark
    ]}>
      <View style={[
        styles.header,
        isDarkTheme && styles.headerDark
      ]}>
        <Text style={[
          styles.headerText,
          isDarkTheme && styles.headerTextDark
        ]}>to.</Text>
        <Text style={[
          styles.headerText,
          { fontFamily: 'Poppins-SemiBold' },
          isDarkTheme && styles.headerTextDark
        ]}>do</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#273FAD',
  },
  containerDark: {
    backgroundColor: '#191932'
  },
  header: {
    paddingBottom: 44,
    backgroundColor: '#273FAD',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerDark: {
    backgroundColor: '#191932'
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  },
  headerTextDark: {
    color: '#E1E1E6'
  }
});
