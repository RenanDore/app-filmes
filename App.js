import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';
import Filmes from './src/Filmes';

import api from './src/services/api';

export default function App() {

  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilmes(){
      const response = await api.get('r-api/?api=filmes')
      //console.log(response.data)
      setFilmes(response.data)
      setLoading(false)
    }

    loadFilmes();

  }, []);

  if(loading){
    return(
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <ActivityIndicator color='#121212' size={45} />
      </View>
    )
  }else{
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <FlatList
          data={filmes}
          keyExtractor={ item => String(item.id) }
          renderItem={ ({ item }) => <Filmes data={item} /> }
        />
      </SafeAreaView>
    );

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
