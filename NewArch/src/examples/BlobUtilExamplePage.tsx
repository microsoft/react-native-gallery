'use strict';
import React, {useState} from 'react';
import {Alert, Button, TextInput, View, StyleSheet} from 'react-native';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import ReactNativeBlobUtil from 'react-native-blob-util';

export const BlobUtilExamplePage: React.FunctionComponent<{}> = () => {
  const [existsParam, setExistsParam] = useState('');
  const [lsParam, setLSParam] = useState('');
  const [cpSourceParam, setCPSourceParam] = useState('');
  const [cpDestParam, setCPDestParam] = useState('');
  const [unlinkParam, setUnlinkParam] = useState('');
  const [statParam, setStatParam] = useState('');
  const [mkdirParam, setMkdirParam] = useState('');
  const [readParam, setReadParam] = useState('');
  const [hashPathParam, setHashPathParam] = useState('');
  const [hashAlgValue, setHashAlgValue] = useState('md5');
  const [writeParam, setWriteParam] = useState('');
  const [writeEncodeParam, setWriteEncodeParam] = useState('utf8');

  // API Methods
  const existsCall = () => {
    ReactNativeBlobUtil.fs
      .exists(ReactNativeBlobUtil.fs.dirs.DocumentDir + '/' + existsParam)
      .then((result) => Alert.alert('Exists: ' + result))
      .catch((err) => Alert.alert(err.message));
  };

  const lsCall = () => {
    ReactNativeBlobUtil.fs
      .ls(ReactNativeBlobUtil.fs.dirs.DocumentDir + '/' + lsParam)
      .then((files) => {
        Alert.alert('Method finished: check debug console for results');
        console.log(files);
      });
  };

  const cpCall = () => {
    ReactNativeBlobUtil.fs
      .cp(
        ReactNativeBlobUtil.fs.dirs.DocumentDir + '/' + cpSourceParam,
        ReactNativeBlobUtil.fs.dirs.DocumentDir + '/' + cpDestParam,
      )
      .then(() => Alert.alert('File successfully copied'))
      .catch((err) => Alert.alert(err.message));
  };

  const unlinkCall = () => {
    ReactNativeBlobUtil.fs
      .unlink(ReactNativeBlobUtil.fs.dirs.DocumentDir + '/' + unlinkParam)
      .then(() => Alert.alert('File/Directory successfully unlinked'))
      .catch((err) => Alert.alert(err.message));
  };

  const statCall = () => {
    ReactNativeBlobUtil.fs
      .stat(ReactNativeBlobUtil.fs.dirs.DocumentDir + '/' + statParam)
      .then((stats) => {
        console.log(stats);
        Alert.alert(
          'Stat Result',
          `Filename: ${stats.filename}\nSize: ${stats.size}\nType: ${stats.type}`,
        );
      })
      .catch((err) => Alert.alert(err.message));
  };

  const mkdirCall = () => {
    ReactNativeBlobUtil.fs
      .mkdir(ReactNativeBlobUtil.fs.dirs.DocumentDir + '/' + mkdirParam)
      .then(() => Alert.alert('Directory created successfully'))
      .catch((err) => Alert.alert(err.message));
  };

  const readFileCall = () => {
    ReactNativeBlobUtil.fs
      .readFile(ReactNativeBlobUtil.fs.dirs.DocumentDir + '/' + readParam, 'utf8')
      .then((data) => Alert.alert('File Content', data))
      .catch((err) => Alert.alert(err.message));
  };

  const hashCall = () => {
    ReactNativeBlobUtil.fs
      .hash(ReactNativeBlobUtil.fs.dirs.DocumentDir + '/' + hashPathParam, hashAlgValue)
      .then((hash) => Alert.alert(`${hashAlgValue} Hash`, hash))
      .catch((err) => Alert.alert(err.message));
  };

  const writeFileCall = () => {
    ReactNativeBlobUtil.fs
      .writeFile(ReactNativeBlobUtil.fs.dirs.DocumentDir + '/' + writeParam, 'Sample content', writeEncodeParam)
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
       <Example
        title="Check if file exists"
        code={`ReactNativeBlobUtil.fs
  .exists(ReactNativeBlobUtil.fs.dirs.DocumentDir + '/' + existsParam)
  .then((result) => Alert.alert('Exists: ' + result))
  .catch((err) => Alert.alert(err.message));`}>
        <View style={styles.exampleContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter file path"
            onChangeText={setExistsParam}
          />
          <Button title="Check if file exists" onPress={existsCall} />
        </View>
      </Example>

      <Example
        title="List directory contents"
        code={`ReactNativeBlobUtil.fs
  .ls(ReactNativeBlobUtil.fs.dirs.DocumentDir + '/' + lsParam)
  .then((files) => {
    Alert.alert('Method finished: check debug console for results');
    console.log(files);
  });`}>
        <View style={styles.exampleContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter directory path"
            onChangeText={setLSParam}
          />
          <Button title="List directory contents" onPress={lsCall} />
        </View>
      </Example>

      <Example
        title="Copy file"
        code={`ReactNativeBlobUtil.fs
  .cp(
    ReactNativeBlobUtil.fs.dirs.DocumentDir + '/' + cpSourceParam,
    ReactNativeBlobUtil.fs.dirs.DocumentDir + '/' + cpDestParam,
  )
  .then(() => Alert.alert('File successfully copied'))
  .catch((err) => Alert.alert(err.message));`}>
        <View style={styles.exampleContainer}>
          <TextInput
            style={styles.input}
            placeholder="Source file path"
            onChangeText={setCPSourceParam}
          />
          <TextInput
            style={styles.input}
            placeholder="Destination file path"
            onChangeText={setCPDestParam}
          />
          <Button title="Copy file" onPress={cpCall} />
        </View>
      </Example>

      <Example
        title="Unlink file or directory"
        code={`ReactNativeBlobUtil.fs
  .unlink(ReactNativeBlobUtil.fs.dirs.DocumentDir + '/' + unlinkParam)
  .then(() => Alert.alert('File/Directory successfully unlinked'))
  .catch((err) => Alert.alert(err.message));`}>
        <View style={styles.exampleContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter file/directory path"
            onChangeText={setUnlinkParam}
          />
          <Button title="Unlink" onPress={unlinkCall} />
        </View>
      </Example>

      <Example
        title="Get file stats"
        code={`ReactNativeBlobUtil.fs
  .stat(ReactNativeBlobUtil.fs.dirs.DocumentDir + '/' + statParam)
  .then((stats) => {
    console.log(stats);
    Alert.alert(
      'Stat Result',
      \`Filename: \${stats.filename}\\nSize: \${stats.size}\\nType: \${stats.type}\`,
    );
  })
  .catch((err) => Alert.alert(err.message));`}>
        <View style={styles.exampleContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter file path"
            onChangeText={setStatParam}
          />
          <Button title="Get Stats" onPress={statCall} />
        </View>
      </Example>

      <Example
        title="Create directory"
        code={`ReactNativeBlobUtil.fs
  .mkdir(ReactNativeBlobUtil.fs.dirs.DocumentDir + '/' + mkdirParam)
  .then(() => Alert.alert('Directory created successfully'))
  .catch((err) => Alert.alert(err.message));`}>
        <View style={styles.exampleContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter directory name"
            onChangeText={setMkdirParam}
          />
          <Button title="Create Directory" onPress={mkdirCall} />
        </View>
      </Example>

      <Example
        title="Read file"
        code={`ReactNativeBlobUtil.fs
  .readFile(ReactNativeBlobUtil.fs.dirs.DocumentDir + '/' + readParam, 'utf8')
  .then((data) => Alert.alert('File Content', data))
  .catch((err) => Alert.alert(err.message));`}>
        <View style={styles.exampleContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter file path"
            onChangeText={setReadParam}
          />
          <Button title="Read File" onPress={readFileCall} />
        </View>
      </Example>

      <Example
        title="Hash file"
        code={`ReactNativeBlobUtil.fs
  .hash(ReactNativeBlobUtil.fs.dirs.DocumentDir + '/' + hashPathParam, hashAlgValue)
  .then((hash) => Alert.alert(\`\${hashAlgValue} Hash\`, hash))
  .catch((err) => Alert.alert(err.message));`}>
        <View style={styles.exampleContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter file path"
            onChangeText={setHashPathParam}
          />
          <View style={styles.buttonGroup}>
            {['md5', 'sha1', 'sha256'].map((alg) => (
              <Button
                key={alg}
                title={alg.toUpperCase()}
                color={hashAlgValue === alg ? '#7a42f4' : '#ccc'}
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
  .writeFile(ReactNativeBlobUtil.fs.dirs.DocumentDir + '/' + writeParam, 'Sample content', writeEncodeParam)
  .then(() => Alert.alert('File written successfully'))
  .catch((err) => Alert.alert(err.message));`}>
        <View style={styles.exampleContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter file name"
            onChangeText={setWriteParam}
          />
          <View style={styles.buttonGroup}>
            {['utf8', 'base64', 'ascii'].map((enc) => (
              <Button
                key={enc}
                title={enc.toUpperCase()}
                color={writeEncodeParam === enc ? '#7a42f4' : '#ccc'}
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
    gap: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
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