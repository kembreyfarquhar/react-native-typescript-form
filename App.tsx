import * as React from 'react';
import { StyleSheet, Text, View, Button, Alert, ScrollView } from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import {useForm} from 'react-hook-form'

import Input from "./components/Input"
import Form from "./components/Form"
import validation from "./validation"

type FormData = {
  name: string;
  email: string;
  password: string;
}

export default () => {
  const {handleSubmit, register, setValue, errors} = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    Alert.alert('data', JSON.stringify(data))
  }

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container} style={{backgroundColor: '#181e34'}}>
      <View style={styles.formContainer}>
        <Form {...{register, setValue, validation, errors}}>
          <Input name="name" label="Name" />
          <Input name="email" label="Email" />
          <Input name="password" label="Password" secureTextEntry={true} />
          <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        </Form>
      </View>
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 40,
    backgroundColor: '#181e34',
  },
  formContainer: {
    padding: 8,
    flex: 1,
  },
  button: {
    backgroundColor: 'red',
  },
});