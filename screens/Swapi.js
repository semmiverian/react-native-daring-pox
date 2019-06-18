import React, {useState, useEffect} from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import axios from 'axios'

const Swapi = () => {
  const [data, setData] = useState({})

  useEffect(() => {
   axios.get('https://swapi.co/api/people/1')
        .then(({data}) => setData(data))
  }, [])


  return (
    <SafeAreaView>
      <Text>{JSON.stringify(data)}</Text>
    </SafeAreaView>
  )
}

Swapi.navigationOptions = {
  title: 'Swapi'
}

export default Swapi
