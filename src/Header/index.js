import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const Header = ({ title }) => (
  <View style={styles.container}>
    <View style={styles.left} />
    <Text style={styles.title}>{title}</Text>
    <TouchableOpacity onPress={() => {}} />
  </View>
);
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
