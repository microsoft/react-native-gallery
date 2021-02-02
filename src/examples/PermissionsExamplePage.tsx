'use strict';
import {Button, FlatList, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import {LinkContainer} from '../components/LinkContainer';
import {check, Permission, PERMISSIONS, PermissionStatus, request, RESULTS, WindowsPermission} from 'react-native-permissions';
import {AndroidPermissionMap} from 'react-native-permissions/dist/typescript/permissions.android';
import {IOSPermissionMap} from 'react-native-permissions/dist/typescript/permissions.ios';
import {WindowsPermissionMap} from 'react-native-permissions/dist/typescript/permissions.windows';

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
}

type PermissionsMap = AndroidPermissionMap | IOSPermissionMap | WindowsPermissionMap

export const PermissionsExamplePage: React.FunctionComponent<{}> = () => {
  const exampleJsx = `import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import {check, Permission, PERMISSIONS, PermissionStatus, RESULTS} from 'react-native-permissions';

function Example() {
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (status == '') {
      getPermissionAsync(PERMISSIONS.WINDOWS.USB);
    }
  }, []);

  const getPermissionAsync = async (perms: Permission) => {
    const results = new Map<Permission, PermissionStatus>();
    const result = await check(k as Permission);
    setStatus(result);
  };

  return (
    <Text>USB permission: {status}</Text>
  );
}
`;

  const [perms, setPerms] = useState(() => new Map<Permission, PermissionStatus>());

  useEffect(() => {
    if (perms.size == 0) {
      getPermissionsAsync(PERMISSIONS.WINDOWS);
    }
  }, []);

  const getPermissionsAsync = async (perms: PermissionsMap) => {
    const results = new Map<Permission, PermissionStatus>();
    for(const k in perms) {
      const result = await check(k as Permission);
      results.set(k as Permission, result);
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
      } catch(err) {
        console.log(err)
      }
    })();
  };

  const getListItem = (item: [Permission, PermissionStatus]) => {
    const perm = item[0]
    const status = item[1];

    return (
        <View key={status} style={{flex: 1, flexDirection: 'row', alignItems:'center', paddingBottom: 10}}>
          <Button onPress={() => requestPermission(perm)} title="Request" disabled={status == 'unavailable' || status == 'blocked'} />
          <Text style={{fontWeight: 'bold', paddingLeft: 10}}>{item[0]}</Text>
          <Text style={{paddingLeft: 10}}>{getResultString(status)}</Text>
        </View>
    );
  }

  const entries = Array.from(perms.entries());

  return (
    <Page
      title="Permissions"
      description="Allows requesting and showing available system permissions via the react-native-permissions module.">
      <Example title="Windows Permissions" code={exampleJsx}>
        <FlatList
          data={entries}
          renderItem={({item}) => getListItem(item)}
          keyExtractor={item => item[0]}
        />
      </Example>
      <LinkContainer
        pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/PermissionsExamplePage.tsx"
        feedbackUrl="https://github.com/microsoft/react-native-gallery/issues/new"
        documentation={[
          {
            label: 'Permissions',
            url:
              'https://github.com/zoontek/react-native-permissions',
          },
        ]}
      />
    </Page>
  );
};