import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from "react-native"

const HorizontalContent = ({title}) => {
    return (
        <SafeAreaView>
            <ScrollView horizontal={true}>
                <View style={style.container}>
                    <TouchableOpacity style={style.box}>
                        <Image style={style.Image} source={require('./assets/laravel.jpg')}/>
                        <Text style={style.title}>Laravel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.box}>
                        <Image style={style.Image} source={require('./assets/vue.png')}/>
                        <Text style={style.title}>Vue.js</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.box}>
                        <Image style={style.Image} source={require('./assets/react.png')}/>
                        <Text style={style.title}>React</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.box}>
                        <Image style={style.Image} source={require('./assets/angular.png')}/>
                        <Text style={style.title}>angular</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.box}>
                        <Image style={style.Image} source={require('./assets/springboot.png')}/>
                        <Text style={style.title}>Spring Boot</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const style = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        width: '100%',
    },
    Image: {
        width: 130,
        height: 120,
    },
    title: {
        width: "100%",
        fontSize: 18,
        textAlign: "center"
    },
    box:{
        padding: 2,
    }
})

export default HorizontalContent;