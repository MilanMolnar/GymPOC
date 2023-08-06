import React, { useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface SelectableListProps {
  data: Array<Record<string, string[]>>;
  onSelect: (selectedKey: string) => void;
}

const SelectableList: React.FC<SelectableListProps> = ({ data, onSelect }) => {
  const [selectedKey, setSelectedKey] = useState<string | null>(null);

  const renderItem = ({ item }) => {
    const key = Object.keys(item)[0];
    const isSelected = key === selectedKey;

    return (
      <TouchableOpacity
        style={[styles.item, isSelected && styles.selectedItem]}
        onPress={() => {
          if (isSelected) {
            setSelectedKey(null);
          } else {
            setSelectedKey(key);
            onSelect(key);
          }
        }}
      >
        <Text>{key}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  selectedItem: {
    backgroundColor: 'lightblue', // Change to your desired selected item style
  },
});

export default SelectableList;
