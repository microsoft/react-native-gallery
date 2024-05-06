'use strict';
import {Button, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import {
  check,
  Permission,
  PERMISSIONS,
  PermissionStatus,
  request,
  RESULTS,
} from 'react-native-permissions';
import {AndroidPermissionMap} from 'react-native-permissions/dist/typescript/permissions.android';
import {IOSPermissionMap} from 'react-native-permissions/dist/typescript/permissions.ios';
import {WindowsPermissionMap} from 'react-native-permissions/dist/typescript/permissions.windows';
import {useTheme} from '@react-navigation/native';

const getResultString = (result: PermissionStatus) => {
  switch (result) {
    case RESULTS.UNAVAILABLE:
      return 'permission is not available';
    case RESULTS.DENIED:
      return 'permission is denied but requestable';
    case RESULTS.LIMITED:
      return 'permission is limited';
    case RESULTS.GRANTED:
      return 'permission is granted';
    case RESULTS.BLOCKED:
      return 'permission is denied and not requestable';
  }
};

type PermissionsMap =
  | AndroidPermissionMap
  | IOSPermissionMap
  | WindowsPermissionMap;

export const PermissionsExamplePage: React.FunctionComponent<{}> = () => {
  const {colors} = useTheme();

  const exampleJsx = `<FlatList
  data={entries}
  renderItem={({item}) => {
    const perm = item[0]
    const status = item[1];

    return (
        <View key={status} style={{flex: 1, flexDirection: 'row', alignItems:'center', paddingBottom: 10}}>
          {status == 'granted' ? <Button onPress={() => {}} color='#737373' title="Granted" />
                               : <Button 
                                   onPress={() => requestPermission(perm)} 
                                   title="Request"
                                   colors={colors.primary}
                                   disabled={status == 'unavailable' || status == 'blocked'} />}
          <Text style={{fontWeight: 'bold', paddingLeft: 10}}>{item[0]}</Text>
          <Text style={{paddingLeft: 10}}>{getResultString(status)}</Text>
        </View>
    );
  }}
  keyExtractor={item => item[0]}/>`;

  const [perms, setPerms] = useState(
    () => new Map<Permission, PermissionStatus>(),
  );

  useEffect(() => {
    if (perms.size === 0) {
      getPermissionsAsync(PERMISSIONS.WINDOWS);
    }
  });

  const getPermissionsAsync = async (permissions: PermissionsMap) => {
    const results = new Map<Permission, PermissionStatus>();
    for (const [, v] of Object.entries(permissions)) {
      // The following capabilities throw an exception in UWP are not available under
      // the AppManifest editor in VS.
      if (
        v === PERMISSIONS.WINDOWS.HUMANINTERFACEDEVICE ||
        v === PERMISSIONS.WINDOWS.SERIALCOMMUNICATION ||
        v === PERMISSIONS.WINDOWS.USB
      ) {
        continue;
      }
      const result = check(v as Permission);
      results.set(v as Permission, result);
    }
    setPerms(results);
  };

  const renderListItems = (data) => {
    var listItems = [];
    data.forEach((item) => {
      listItems.push(<ListItem item={item} focusable={true} />);
    });
    return listItems;
  };

  const ListItem = (props: {item}) => {
    const perm = props.item[0];
    const [status, setStatus] = useState(props.item[1]);

    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          paddingBottom: 10,
        }}>
        {status === 'granted' ? (
          <Button onPress={() => {}} color="#737373" title="Granted" />
        ) : (
          <Button
            onPress={async () => {
              try {
                const result = await request(perm);
                setStatus(result);
              } catch (err) {
                console.log(err);
              }
            }}
            color="rgb(52, 122, 226)"
            title="Request"
            disabled={status === 'unavailable' || status === 'blocked'}
            accessibilityLabel={'Request' + perm}
          />
        )}
        <Text style={{fontWeight: 'bold', paddingLeft: 10, color: colors.text}}>
          {perm}
        </Text>
        <View
          focusable={Boolean(getResultString(status))}
          accessible={Boolean(getResultString(status))}>
          <Text
            accessibilityLabel={getResultString(status)}
            style={{paddingLeft: 10, color: colors.text}}>
            {getResultString(status)}
          </Text>
        </View>
      </View>
    );
  };

  const entries = Array.from(perms.entries());

  return (
    <Page
      title="Permissions"
      description="Allows requesting and showing available system permissions via the react-native-permissions module."
      componentType="Community"
      pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/PermissionsExamplePage.tsx"
      documentation={[
        {
          label: 'Permissions',
          url: 'https://github.com/zoontek/react-native-permissions',
        },
      ]}>
      <Example title="Windows Permissions" code={exampleJsx}>
        <View style={{paddingBottom: 20}}>
          <Text>
            Even though all available permissions are listed in this sample, for
            testing purposes only the microphone and internetClientServer
            capabilities are available.
          </Text>
          <Text>
            Other permissions can be enabled by editing the app capabilities
            inside the Package.appxmanifest file under Visual Studio.
          </Text>
        </View>
        {renderListItems(entries)}
      </Example>
    </Page>
  );
};
