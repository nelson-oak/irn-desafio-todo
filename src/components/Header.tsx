import React, { useMemo } from 'react';
import { View, Text, StatusBar, StyleSheet, Appearance } from 'react-native';

export function Header() {
  const isDarkTheme = useMemo(() => {
    return Appearance.getColorScheme() === 'dark'
  }, [])

  return (
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
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
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
