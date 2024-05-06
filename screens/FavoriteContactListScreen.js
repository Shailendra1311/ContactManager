// screens/FavoriteContactListScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';

const FavoriteContactListScreen = ({ navigation }) => {
  const [favoriteContacts, setFavoriteContacts] = useState([]);

  useEffect(() => {
    // Fetch favorite contacts from the local database
    // For now, we'll use dummy data
    const dummyFavoriteContacts = [
      { id: 2, name: 'Jane Smith', phone: '0987654321', landline: '1231231234', favorite: true }
    ];
    setFavoriteContacts(dummyFavoriteContacts);
  }, []);

  const renderFavoriteContactItem = ({ item }) => (
    <View style={{ padding: 20, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
      <Text>{item.name}</Text>
      <Text>{item.phone}</Text>
    </View>
  );

  const navigateToContactList = () => {
    navigation.navigate('ContactList');
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <SwipeListView
        data={favoriteContacts}
        renderItem={renderFavoriteContactItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <Button title="Back to Contact List" onPress={navigateToContactList} />
    </View>
  );
};

export default FavoriteContactListScreen;
