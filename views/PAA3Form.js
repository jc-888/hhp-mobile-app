import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Container, Content, Textarea, Button, Text } from 'native-base'

export class PAA3Form extends Component {
    render() {
        return (
            <Container>
                <Content style={styles.container}>
                    <Text style={styles.label}>
                        Please provide a brief description of why you need
                        assistance
                    </Text>
                    <Textarea
                        rowSpan={10}
                        bordered
                        onChangeText={this.props.onChangeReason}
                        value={this.props.reason}
                        placeholder="Your answer"
                        style={styles.input}
                        placeholderTextColor="#1B6FF0"
                    />
                    <View style={styles.buttonsContainer}>
                        <View style={styles.buttonContainer}>
                            <Button
                                primary
                                full
                                bordered
                                rounded
                                style={styles.buttonBack}
                                onPress={() => {
                                    this.props.navigation.navigate('Part2')
                                }}
                            >
                                <Text style={styles.buttonBackText}>
                                    Go Back
                                </Text>
                            </Button>
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button
                                primary
                                full
                                bordered
                                rounded
                                style={styles.buttonNextText}
                                onPress={this.props.onSubmitUserData}
                            >
                                <Text style={styles.buttonText}>Submit</Text>
                            </Button>
                        </View>
                    </View>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    input: {
        borderColor: '#1B6FF0',
        color: '#1B6FF0',
        borderWidth: 5,
        margin: '2%',
    },
    label: {
        color: '#1B6FF0',
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
        margin: '5%',
    },
    buttonNext: {
        borderColor: '#1B6FF0',
        color: '#1B6FF0',
    },
    buttonBack: {
        borderColor: '#ff0000',
        color: '#ff0000',
    },
    buttonNextText: {
        color: '#1B6FF0',
    },
    buttonBackText: {
        color: '#ff0000',
    },
})

export default PAA3Form
