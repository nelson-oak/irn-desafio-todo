import React, { useMemo } from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet, FlatListProps, Appearance } from 'react-native';

interface IFlatListHeaderComponentProps {
  isDarkTheme: boolean
}

function FlatListHeaderComponent({ isDarkTheme }: IFlatListHeaderComponentProps) {
  return (
    <View >
      <Text style={[
        styles.header,
        isDarkTheme && [styles.headerDark]
      ]}>Minhas tasks</Text>
    </View>
  )
}

interface MyTasksListProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
}

export function MyTasksList({ tasks, onLongPress, onPress }: MyTasksListProps) {
  const isDarkTheme = useMemo(() => {
    return Appearance.getColorScheme() === 'dark'
  }, [])

  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            style={
              item.done
                ? [
                  styles.taskButtonDone,
                  isDarkTheme && styles.taskButtonDoneDark
                ]
                : styles.taskButton
            }
            onPress={() => onPress(item.id)}
            onLongPress={() => onLongPress(item.id)}
          >
            <View 
              testID={`marker-${index}`}
              style={
                item.done
                  ? [
                    styles.taskMarkerDone,
                    isDarkTheme && styles.taskMarkerDoneDark
                  ]
                  : styles.taskMarker
              }
            />
            <Text 
              style={
                item.done
                  ? styles.taskTextDone
                  : [
                    styles.taskText,
                    isDarkTheme && styles.taskTextDark
                  ]
              }
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )
      }}
      ListHeaderComponent={<FlatListHeaderComponent isDarkTheme={isDarkTheme} />}
      ListHeaderComponentStyle={{
        marginBottom: 20
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32
      }}
    />
  )
}

const styles = StyleSheet.create({
  header: {
    color: '#3D3D4D',
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold'
  },
  headerDark: {
    color: '#565BFF'
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#3D3D4D',
    marginRight: 10
  },
  taskMakerDark: {
    borderColor: '#E1E1E6'
  },
  taskText: {
    color: '#3D3D4D',
  },
  taskTextDark: {
    color: '#E1E1E6'
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: 'rgba(25, 61, 223, 0.1)',
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskButtonDoneDark: {
    backgroundColor: 'rgba(33, 33, 54, 0.3)'
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#273FAD',
    marginRight: 10
  },
  taskMarkerDoneDark: {
    backgroundColor: '#565BFF'
  },
  taskTextDone: {
    color: '#A09CB1',
    textDecorationLine: 'line-through'
  },
})