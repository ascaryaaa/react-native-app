import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native"

const TitleBar = ({title}) => {
    return (
        <View style={style.container}>
            <TouchableOpacity>
                <Image style={style.icon} source={require('./assets/arrow-left.png')}/>
            </TouchableOpacity>
                <Text style={style.title}>{title}</Text>
            <TouchableOpacity>
                <Image style={style.icon} source={require('./assets/share-network.png')}/>
            </TouchableOpacity>
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingTop: 16,
        width: '100%',
        height: 100,
        backgroundColor: 'white'
    },
    icon: {
        height: 32,
        width: 32,
    },
})

export default TitleBar;