// import React, { useState, useEffect } from "react";
// import { Text, View, Button, TextInput } from "react-native";
// // import { TextInput } from "react-native-paper";
// // let count = 10
// const Devs = () => {
//     const [max, setmax] = useState(null);
//     const [max2, setmax2] = useState(null);
//     const [count, setCount] = useState();

//     const clickHandler = () => {
//         if (max > max2 ){
//             setCount(max)
//         }
//         else {
//             setCount(max2)
//         }
//         console.log(count);

//     }

//     const changeHandler = event => {
//         console.log('event', event);
//         setmax(+event);
//     }
//     const changeHandler1 = event => {
//         console.log('event', event);
//         setmax2(+event);
//     }

//     console.log('outside type', typeof (max));
//     console.log('outside type', typeof (max2));


//     return (
//         <View>
//             <TextInput keyboardType="phone-pad" value={max} onChangeText={changeHandler} />
//             <TextInput value={max2} onChangeText={changeHandler1} />
//             <Text>Enter Your First Number {max}</Text>
//             <Text>Enter Your Second Number {max2}</Text>
//             <Text>Max Number Is {count}</Text>

//             <Button title="increment" onPress={clickHandler} />
//             {/* <Button title="decremnt" onPress={()=> setCount(Count -1)} /> */}
//         </View>
//     )
// }
// export default Devs;

// import React from "react";
// import { Text,View,Button } from "react-native";
// let count = 0;
// const f =()=>{
//     // count = count +1;
//     return(
//        console.log(count+1)
//        count++
//     )
    
// }

// const Devs =()=>{
//     return(
//         <View>
//             <Text>{count}</Text>
//             <Button title="click" onPress={f()
            
            
            
            
//             } />
//         </View>
//     )
// }
// export default Devs;

import React from "react";
import { Text, View, Button, TextInput } from "react-native";
import ProgressBar from 'react-native-progress/Bar'
const Devs =()=>{
   return( <View>
<ProgressBar progress={0.3} width={200} />
    </View>)
}
export default Devs