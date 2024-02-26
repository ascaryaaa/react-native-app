import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native"

const Content = ({title}) => {
    return (
        <View style={style.container}>
            <TouchableOpacity>
                <Image style={style.Image} source={require('./assets/react.jpg')}/>
            </TouchableOpacity>
                <Text style={style.title}>{title}</Text>
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center",
        width: '100%',
    },
    Image: {
        width: 400,
        height: 200,
    },
    title: {
        width: "100%",
        fontSize: 18,
        padding: 15,
        textAlign: "justify"
    }
})

export default Content;