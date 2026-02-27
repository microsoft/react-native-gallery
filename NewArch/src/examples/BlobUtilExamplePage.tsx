'use strict';
import React, {useState} from 'react';
import {Alert, Text, Button, TextInput, View, StyleSheet} from 'react-native';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import {useTheme} from '../Navigation';
import ReactNativeBlobUtil from 'react-native-blob-util';

export const BlobUtilExamplePage: React.FunctionComponent<{}> = () => {
  const {colors, dark} = useTheme();
  const [existsParam, setExistsParam] = useState('');
  const [lsParam, setLSParam] = useState('');
  const [cpSourceParam, setCPSourceParam] = useState('');
  const [cpDestParam, setCPDestParam] = useState('');
  const [unlinkParam, setUnlinkParam] = useState('');
  const [mkdirParam, setMkdirParam] = useState('');
  const [readParam, setReadParam] = useState('');
  const [hashPathParam, setHashPathParam] = useState('');
  const [hashAlgValue, setHashAlgValue] = useState('md5');
  const [writeParam, setWriteParam] = useState('');
  const [writeEncodeParam, setWriteEncodeParam] = useState('utf8');

  // API Methods
  const existsCall = () => {
    ReactNativeBlobUtil.fs
      .exists(existsParam)
      .then((result) => {
        if (Array.isArray(result)) {
          Alert.alert('Exists: ' + result[0]);
        } else {
          Alert.alert('Exists: ' + result);
        }
      })
      .catch((err) => Alert.alert(err.message));
  };

  const lsCall = () => {
    ReactNativeBlobUtil.fs
      .ls(lsParam)
      .then((files) => {
        Alert.alert('Method finished: check debug console for results');
        console.log(files);
      });
  };

  const cpCall = () => {
    ReactNativeBlobUtil.fs
      .cp(
        cpSourceParam,
        cpDestParam,
      )
      .then(() => Alert.alert('File successfully copied'))
      .catch((err) => Alert.alert(err.message));
  };

  const unlinkCall = () => {
    ReactNativeBlobUtil.fs
      .unlink(unlinkParam)
      .then(() => Alert.alert('File/Directory successfully unlinked'))
      .catch((err) => Alert.alert(err.message));
  };

  const mkdirCall = () => {
    ReactNativeBlobUtil.fs
      .mkdir(mkdirParam)
      .then(() => Alert.alert('Directory created successfully'))
      .catch((err) => Alert.alert(err.message));
  };

  const readFileCall = () => {
    ReactNativeBlobUtil.fs
      .readFile(readParam, 'utf8')
      .then((data) => {
        const preview = data.length > 500 ? data.substring(0, 500) + '...' : data;
        Alert.alert('File Content: ' + preview);
      })
      .catch((err) => Alert.alert('Read Error: ' + err.message));
  };

  const hashCall = () => {
    ReactNativeBlobUtil.fs
      .hash(hashPathParam, hashAlgValue)
      .then((hash) => Alert.alert(`${hashAlgValue} Hash: ${hash}`))
      .catch((err) => Alert.alert('Hash Error: ' + err.message));
  };

  const writeFileCall = () => {
    ReactNativeBlobUtil.fs
      .writeFile(writeParam, 'Sample content', writeEncodeParam)
      .then(() => Alert.alert('File written successfully'))
      .catch((err) => Alert.alert(err.message));
  };

  // Examples
  return (
    <Page
      title="Blob Util File System Operations"
      description="Perform file system operations using React Native Blob Util."
      componentType="Community"
      pageCodeUrl="https://github.com/facebook/react-native"
      documentation={[
        {
          label: 'React Native Blob Util',
          url: 'https://github.com/RonRadtke/react-native-blob-util',
        },
      ]}>
      <Text>Default Directory: {ReactNativeBlobUtil.fs.dirs.DocumentDir}</Text>

      <Example
        title="Check if file exists"
        code={`ReactNativeBlobUtil.fs
  .exists(existsParam)
  .then((result) => Alert.alert('Exists: ' + result))
  .catch((err) => Alert.alert(err.message));`}>
        <View style={styles.exampleContainer}>
          <TextInput
            style={[styles.input, {borderColor: colors.border, color: colors.text}]}
            placeholder="Enter absolute file path"
            placeholderTextColor={colors.border}
            onChangeText={setExistsParam}
          />
          <Button title="Check if file exists" onPress={existsCall} />
        </View>
      </Example>

      <Example
        title="List directory contents"
        code={`ReactNativeBlobUtil.fs
  .ls(lsParam)
  .then((files) => {
    Alert.alert('Method finished: check debug console for results');
    console.log(files);
  });`}>
        <View style={styles.exampleContainer}>
          <TextInput
            style={[styles.input, {borderColor: colors.border, color: colors.text}]}
            placeholder="Enter absolute directory path"
            placeholderTextColor={colors.border}
            onChangeText={setLSParam}
          />
          <Button title="List directory contents" onPress={lsCall} />
        </View>
      </Example>

      <Example
        title="Copy file"
        code={`ReactNativeBlobUtil.fs
  .cp(cpSourceParam, cpDestParam)
  .then(() => Alert.alert('File successfully copied'))
  .catch((err) => Alert.alert(err.message));`}>
        <View style={styles.exampleContainer}>
          <TextInput
            style={[styles.input, {borderColor: colors.border, color: colors.text}]}
            placeholder="Absolute source file path"
            placeholderTextColor={colors.border}
            onChangeText={setCPSourceParam}
          />
          <TextInput
            style={[styles.input, {borderColor: colors.border, color: colors.text}]}
            placeholder="Absolute destination file path"
            placeholderTextColor={colors.border}
            onChangeText={setCPDestParam}
          />
          <Button title="Copy file" onPress={cpCall} />
        </View>
      </Example>

      <Example
        title="Unlink file or directory"
        code={`ReactNativeBlobUtil.fs
  .unlink(unlinkParam)
  .then(() => Alert.alert('File/Directory successfully unlinked'))
  .catch((err) => Alert.alert(err.message));`}>
        <View style={styles.exampleContainer}>
          <TextInput
            style={[styles.input, {borderColor: colors.border, color: colors.text}]}
            placeholder="Enter absolute file/directory path"
            placeholderTextColor={colors.border}
            onChangeText={setUnlinkParam}
          />
          <Button title="Unlink" onPress={unlinkCall} />
        </View>
      </Example>

      <Example
        title="Create directory"
        code={`ReactNativeBlobUtil.fs
  .mkdir(mkdirParam)
  .then(() => Alert.alert('Directory created successfully'))
  .catch((err) => Alert.alert(err.message));`}>
        <View style={styles.exampleContainer}>
          <TextInput
            style={[styles.input, {borderColor: colors.border, color: colors.text}]}
            placeholder="Enter directory name"
            placeholderTextColor={colors.border}
            onChangeText={setMkdirParam}
          />
          <Button title="Create Directory" onPress={mkdirCall} />
        </View>
      </Example>

      <Example
        title="Read file"
        code={`ReactNativeBlobUtil.fs
  .readFile(readParam, 'utf8')
  .then((data) => Alert.alert('File Content', data))
  .catch((err) => Alert.alert(err.message));`}>
        <View style={styles.exampleContainer}>
          <TextInput
            style={[styles.input, {borderColor: colors.border, color: colors.text}]}
            placeholder="Enter file path"
            placeholderTextColor={colors.border}
            onChangeText={setReadParam}
          />
          <Button title="Read File" onPress={readFileCall} />
        </View>
      </Example>

      <Example
        title="Hash file"
        code={`ReactNativeBlobUtil.fs
  .hash(hashPathParam, hashAlgValue)
  .then((hash) => Alert.alert(\`\${hashAlgValue} Hash\`, hash))
  .catch((err) => Alert.alert(err.message));`}>
        <View style={styles.exampleContainer}>
          <TextInput
            style={[styles.input, {borderColor: colors.border, color: colors.text}]}
            placeholder="Enter file path"
            placeholderTextColor={colors.border}
            onChangeText={setHashPathParam}
          />
          <View style={styles.buttonGroup}>
            {['md5', 'sha1', 'sha256'].map((alg) => (
              <Button
                key={alg}
                title={alg.toUpperCase()}
                color={hashAlgValue === alg ? '#7a42f4' : dark ? '#555' : '#ccc'}
                onPress={() => setHashAlgValue(alg)}
              />
            ))}
          </View>
          <Button title="Hash File" onPress={hashCall} />
        </View>
      </Example>

      <Example
        title="Write file"
        code={`ReactNativeBlobUtil.fs
  .writeFile(writeParam, 'Sample content', writeEncodeParam)
  .then(() => Alert.alert('File written successfully'))
  .catch((err) => Alert.alert(err.message));`}>
        <View style={styles.exampleContainer}>
          <TextInput
            style={[styles.input, {borderColor: colors.border, color: colors.text}]}
            placeholder="Enter file name"
            placeholderTextColor={colors.border}
            onChangeText={setWriteParam}
          />
          <View style={styles.buttonGroup}>
            {['utf8', 'base64', 'ascii'].map((enc) => (
              <Button
                key={enc}
                title={enc.toUpperCase()}
                color={writeEncodeParam === enc ? '#7a42f4' : dark ? '#555' : '#ccc'}
                onPress={() => setWriteEncodeParam(enc)}
              />
            ))}
          </View>
          <Button title="Write File" onPress={writeFileCall} />
        </View>
      </Example>
    </Page>
  );
};

const styles = StyleSheet.create({
  exampleContainer: {
    alignItems: 'flex-start',
  },
  input: {
    borderWidth: 1,
    padding: 8,
    marginVertical: 8,
    width: '100%',
  },
  buttonGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginVertical: 8,
  },
});