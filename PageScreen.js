import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from './Header';
import Content from './Content';
import HorizontalContent from './HorizontalContent';

const PageScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <StatusBar style="auto" />
        <Header title="This is Page"/>
        <HorizontalContent/>
        <Content title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et dolor sit amet turpis aliquam luctus. Vestibulum est massa, vulputate at purus id, commodo congue purus. Proin pulvinar bibendum ipsum. Nam ac metus a libero tempor malesuada id sed arcu. Mauris erat dui, egestas ac diam a, molestie consectetur dui. Nam vel euismod lacus, quis sodales nisi. Maecenas vulputate, enim vitae aliquet scelerisque, nisi sapien vulputate sapien, eget dictum arcu arcu in justo. Pellentesque ullamcorper sapien dui, in volutpat justo sollicitudin sed. Etiam ultrices leo in ligula fermentum, eget dignissim justo tincidunt. Etiam vitae pulvinar mi, eu auctor dolor."/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PageScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
});
