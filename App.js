import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, FlatList, TouchableOpacity, SectionList} from 'react-native';

// Exercise 1
// const styles = StyleSheet.create({
//       opacityStyle: {
//         borderWidth: 1,
//       },
//       textStyle: {
//         fontSize: 15,
//         margin: 10,
//         textAlign: 'left',
//       }
// });
//
// const datasource = [
//     {key: 'a'},
//   {key: 'b'},
//   {key: 'c'}
// ]
//
// const renderItem = ({item}) => {
//   return (
//       <TouchableOpacity style={styles.opacityStyle}>
//         <Text style={styles.textStyle}>{item.key}</Text>
//       </TouchableOpacity>
//   );
// };
//
// const Exercise1 = () => {
//   return (
//       <View style={{marginTop: 30}}>
//         <FlatList
//             data={datasource}
//             renderItem={renderItem}
//         />
//       </View>
//   );
// };
//
// export default Exercise1;


// Exercise 2
const styles = StyleSheet.create({
    opacityStyle: {
        borderWidth: 1,
    },
    textStyle: {
        fontSize: 15,
        margin: 10,
        textAlign: 'left',
    },
    headerText: {
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    }
});

const datasource = [
    {data:[
            {key: 'a'},
            {key: 'e'},
            {key: 'i'},
            {key: 'o'},
            {key: 'u'},
        ],
        title:"Vowels", bgcolor: "skyblue"},
    {data:[
            {key: 'b'},
            {key: 'c'},
            {key: 'd'},
            {key: 'f'},
            {key: 'g'},
            {key: 'h'},
        ],
        title:"Consonants", bgcolor: "khaki"}
];


const renderItem = ({item}) => {
  return (
      <TouchableOpacity style={styles.opacityStyle}>
        <Text style={styles.textStyle}>{item.key}</Text>
      </TouchableOpacity>
  );
};

const Exercise2 = () => {
  return (
      <View style={{marginTop: 30}}>
          <SectionList
              contentContainerStyle={{padding: 10}}
              sections={datasource}
              renderItem={renderItem}
              renderSectionHeader={({section:{title, bgcolor}})=>(
                  <Text style={[styles.headerText, {backgroundColor: bgcolor}]}>{title}</Text>
              )}/>
      </View>
  );
};

export default Exercise2;