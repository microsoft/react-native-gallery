'use strict';
import {Button, FlatList, Text, View} from 'react-native';
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
      const result = await check(v as Permission);
      results.set(v as Permission, result);
    }
    setPerms(results);
  };

  const requestPermission = (perm: Permission) => {
    (async () => {
      try {
        const result = await request(perm);
        const newPerms = new Map(perms);
        newPerms.set(perm, result);
        setPerms(newPerms);
      } catch (err) {
        console.log(err);
      }
    })();
  };

  const getListItem = (item /*: [Permission, PermissionStatus]*/) => {
    const perm = item[0];
    const status = item[1];

    return (
      <View
        key={status}
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
            onPress={() => requestPermission(perm)}
            color={colors.primary}
            title="Request"
            disabled={status === 'unavailable' || status === 'blocked'}
          />
        )}
        <Text style={{fontWeight: 'bold', paddingLeft: 10, color: colors.text}}>
          {item[0]}
        </Text>
        <Text style={{paddingLeft: 10, color: colors.text}}>
          {getResultString(status)}
        </Text>
      </View>
    );
  };

  const entries = Array.from(perms.entries());

  return (
    <Page
      title="Permissions"
      description="Allows requesting and showing available system permissions via the react-native-permissions module."
      pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/PermissionsExamplePage.tsx"
      documentation={[
        {
          label: 'Permissions',
          url: 'https://github.com/zoontek/react-native-permissions',
        },
      ]}>
      <Example title="Windows Permissions" code={exampleJsx}>
        <FlatList
          data={entries}
          renderItem={({item}) => getListItem(item)}
          keyExtractor={(item) => item[0]}
        />
      </Example>
    </Page>
  );
};
