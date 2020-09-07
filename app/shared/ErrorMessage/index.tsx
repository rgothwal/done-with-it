import React from 'react';

import AppText from '../AppText';
import ErrorMessageProps from './model';
import styles from './styles';

const ErrorMessage = ({ error }: ErrorMessageProps) => {
    if (!error) return null;

    return <AppText style={styles.error}>{error}</AppText>;
};

export default ErrorMessage;