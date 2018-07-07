import React from 'react';
import {
	View,
	ActivityIndicator,
	StyleSheet,
	Platform
} from 'react-native';

import reset from '../../css/reset';

const ProgressBar = () => (
	<View style={styles.progressBar}>
		<ActivityIndicator size="large" color={Platform.OS === "ios" ? "white" : reset.color.default} />
	</View>
);

const styles = StyleSheet.create({
	progressBar: {
		flex: 1,
		justifyContent: 'center'
	}
});

export default ProgressBar;
