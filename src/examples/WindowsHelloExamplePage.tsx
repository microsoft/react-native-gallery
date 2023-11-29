'use strict';
import React from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import {
  SignIn,
  verificationResult,
  availabilityStatus,
} from 'react-native-windows-hello';
import {Alert, Button, View} from 'react-native';

export const WindowsHelloExamplePage: React.FunctionComponent<{}> = () => {
  const example1jsx = `SignIn.getDeviceStatus()
  .then(result => {
    if (result === availabilityStatus.Available) {
      Alert.alert("Biometric device available!", result.message);
    } else {
      Alert.alert(\`Biometric device status: \${result.value}\`, result.message);
    }
  })
  .catch(error => {
    Alert.alert(error.message);
  });`;
  const example2jsx = `SignIn.requestConsentVerification()
  .then(result => {
    if (result === verificationResult.Verified) {
      Alert.alert("User verified SUCCESSFULLY!", result.message);
    } else {
      Alert.alert(\`User verification failed: \${result.value}\`, result.message);
    }
  })
  .catch(error => {
    Alert.alert(error);
  });`;
  const example3jsx = `SignIn.requestConsentVerification("Custom message displayed in verification prompt.")
  .then(result => {
    if (result === verificationResult.Verified) {
      Alert.alert("User verified SUCCESSFULLY!", result.message);
    } else {
      Alert.alert(\`User verification failed: \${result.value}\`, result.message);
    }
  })
  .catch(error => {
    Alert.alert(error);
  });`;
  return (
    <Page
      title="Windows Hello"
      description="Use a Windows Hello features when you want to authenticate users of your app and allow them to log in using their biometrics data defined for their Windows account."
      wrappedNativeControl={{
        control: 'Windows Hello',
        url: 'https://support.microsoft.com/en-us/windows/learn-about-windows-hello-and-set-it-up-dae28983-8242-bb2a-d3d1-87c9d265a5f0',
      }}
      componentType="Community"
      pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/WindowsHelloExamplePage.tsx"
      documentation={[
        {
          label: 'React Native Windows Hello',
          url: 'https://github.com/callstack/react-native-windows-hello#readme',
        },
      ]}>
      <Example
        title="Status of biometric device's availability."
        code={example1jsx}>
        <View>
          <Button
            accessibilityLabel="Check for biometric device!"
            title="Check for biometric device!"
            onPress={() => {
              SignIn.getDeviceStatus()
                .then((result) => {
                  if (result === availabilityStatus.Available) {
                    Alert.alert('Biometric device available!', result.message);
                  } else {
                    Alert.alert(
                      `Biometric device status: ${result.value}`,
                      result.message,
                    );
                  }
                })
                .catch((error) => {
                  Alert.alert(error.message);
                });
            }}
          />
        </View>
      </Example>
      <Example title="Biometric scan with default message" code={example2jsx}>
        <View>
          <Button
            accessibilityLabel="Request user verification"
            title="Request user verification"
            onPress={() => {
              SignIn.requestConsentVerification()
                .then((result) => {
                  if (result === verificationResult.Verified) {
                    Alert.alert('User verified SUCCESSFULLY!', result.message);
                  } else {
                    Alert.alert(
                      `User verification failed: ${result.value}`,
                      result.message,
                    );
                  }
                })
                .catch((error) => {
                  Alert.alert(error);
                });
            }}
          />
        </View>
      </Example>
      <Example
        title='Biometric scan with customized message: "Custom message displayed in verification prompt."'
        code={example3jsx}>
        <View>
          <Button
            accessibilityLabel="Request user verification"
            title="Request user verification"
            onPress={() => {
              SignIn.requestConsentVerification(
                'Custom message displayed in verification prompt.',
              )
                .then((result) => {
                  if (result === verificationResult.Verified) {
                    Alert.alert('User verified SUCCESSFULLY!', result.message);
                  } else {
                    Alert.alert(
                      `User verification failed: ${result.value}`,
                      result.message,
                    );
                  }
                })
                .catch((error) => {
                  Alert.alert(error);
                });
            }}
          />
        </View>
      </Example>
    </Page>
  );
};
