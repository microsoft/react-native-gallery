'use strict';
import {ActivityIndicator, Button, Text, TextInput, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';

type Movie = {
  id: string;
  title: string;
  releaseYear: string;
};

const FetchMovieExample = () => {
  const [isLoading, setLoading] = useState(true);
  const [responseText, setResponseText] = useState('');
  const [data, setData] = useState<Movie[]>([]);

  const getMovies = async () => {
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      setResponseText(JSON.stringify(json));
      setData(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View>
          <Text style={{fontWeight: 'bold'}}>Raw</Text>
          <Text>{responseText}</Text>

          <Text style={{fontWeight: 'bold'}}>Formatted</Text>
          {data.map((item) => (
            <Text key={item.id}>
              {item.title}, {item.releaseYear}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
};

const PostChatCompletionExample = () => {
  const [isLoading, setLoading] = useState(true);
  const [responseText, setResponseText] = useState('');
  const [answer, setAnswer] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [prompt, setPrompt] = useState(
    'What is the meaning of life, as an emoji?',
  );

  const doRequest = async () => {
    try {
      const response = await fetch(
        'https://api.openai.com/v1/chat/completions',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [
              {role: 'system', content: 'You are a helpful assistant.'},
              {role: 'user', content: prompt},
            ],
          }),
        },
      );
      const json = await response.json();
      setResponseText(JSON.stringify(json));
      setAnswer(json.choices ? json.choices[0].message.content : '');
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    doRequest();
  });

  return (
    <View>
      <Text style={{fontWeight: 'bold'}}>Inputs</Text>
      <Text>Enter a valid OpenAI API key</Text>
      <TextInput
        value={apiKey}
        onChangeText={setApiKey}
        onSubmitEditing={doRequest}
        secureTextEntry={true}
      />
      <Text>What is your question</Text>
      <TextInput
        value={prompt}
        onChangeText={setPrompt}
        onSubmitEditing={doRequest}
      />
      <Button title="Submit" onPress={doRequest} />
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View>
          <Text style={{fontWeight: 'bold'}}>Raw</Text>
          <Text>{responseText}</Text>
          <Text style={{fontWeight: 'bold'}}>Answer</Text>
          <Text>{answer}</Text>
        </View>
      )}
    </View>
  );
};

export const NetworkExamplePage: React.FunctionComponent<{}> = () => {
  // Replace with string version of JSX snippet used to render component for example1
  const simpleFetch_tsx = `type Movie = {
  id: string;
  title: string;
  releaseYear: string;
};

const Movies = () => {
  const [isLoading, setLoading] = useState(true);
  const [responseText, setResponseText] = useState('');
  const [data, setData] = useState<Movie[]>([]);

  const getMovies = async () => {
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      setResponseText(JSON.stringify(json));
      setData(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View>
      {isLoading ? <ActivityIndicator/> :
        <View>
          <Text style={{fontWeight: 'bold'}}>Raw</Text>
          <Text>{responseText}</Text>

          <Text style={{fontWeight: 'bold'}}>Formatted</Text>
          {data.map((item) => (
            <Text key={item.id}>
              {item.title}, {item.releaseYear}
            </Text>
          ))}
        </View>
      }
    </View>
  );
};`;
  // Replace with string version of JSX snippet used to render component for example2
  const example2jsx = `const [isLoading, setLoading] = useState(true);
const [responseText, setResponseText] = useState('');
const [answer, setAnswer] = useState('');
const [apiKey, setApiKey] = useState('');
const [prompt, setPrompt] = useState('What is the meaning of life, as an emoji?');

const doRequest = async () => {
  try {
    const response = await fetch(
      'https://api.openai.com/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Authorization': \`Bearer \${apiKey}\`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": prompt},
          ]
        }),
      });
    const json = await response.json();
    setResponseText(JSON.stringify(json));
    setAnswer(json.choices ? json.choices[0].message.content : '');
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};

useEffect(() => {
  doRequest();
}, []);

return (
  <View>
    <Text style={{fontWeight: 'bold'}}>Inputs</Text>
    <Text>Enter a valid OpenAI API key</Text>
    <TextInput value={apiKey} onChangeText={setApiKey} onSubmitEditing={doRequest} secureTextEntry={true}/>
    <Text>What is your question</Text>
    <TextInput value={prompt} onChangeText={setPrompt} onSubmitEditing={doRequest}/>
    <Button title="Submit" onPress={doRequest}/>
    {isLoading ? <ActivityIndicator/> :
      <View>
        <Text style={{fontWeight: 'bold'}}>Raw</Text>
        <Text>{responseText}</Text>
        <Text style={{fontWeight: 'bold'}}>Answer</Text>
        <Text>{answer}</Text>
      </View>
    }
  </View>
);`;

  return (
    <Page
      title="Networking"
      description="Many mobile apps need to load resources from a remote URL. You may want to make a POST request to a REST API, or you may need to fetch a chunk of static content from another server."
      componentType="Core"
      pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/NetworkExamplePage.tsx"
      documentation={[
        {
          label: 'Networking',
          url: 'https://reactnative.dev/docs/network',
        },
      ]}>
      <Example title="Fetch Example" code={simpleFetch_tsx}>
        <Text>Fetch results from https://reactnative.dev/movies.json</Text>
        <FetchMovieExample />
      </Example>
      <Example title="POST Example" code={example2jsx}>
        <Text>
          POST results from https://api.openai.com/v1/chat/completions
        </Text>
        <PostChatCompletionExample />
      </Example>
    </Page>
  );
};
