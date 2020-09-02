import React from 'react';
import { FlatList } from 'react-native';

import Screen from '../../shared/Screen';
import ListItemSeparator from '../../shared/ListItemSeparator';
import ListItem from '../../shared/ListItem';
import ListItemDeleteAction from '../../shared/ListItemDeleteAction';
import messages from './constants';

const MessagesScreen = () => {
    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.title}
                        subtitle={item.description}
                        image={item.image}
                        onPress={() => console.log('Message selected', item)}
                        renderRightActions={ListItemDeleteAction}
                    />
                )}
                ItemSeparatorComponent={ListItemSeparator}
            />
        </Screen>
    );
};

export default MessagesScreen;