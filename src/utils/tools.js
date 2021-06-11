import React from 'react';
import { Text } from 'react-native'

export const MainLogo = () => (
  <Text
    style={{
      fontFamily:'Lobster-Regular',
      color:'#db3eb1',
      fontSize:45,
      padding: 25,
      textShadowColor: 'rgba(238,54,217,1)',
      textShadowOffset: {width: 5, height: 1},
      textShadowRadius: 10
    }}
  >
    Who Pays the Bill?
  </Text>
)