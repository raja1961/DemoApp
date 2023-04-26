



import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View,ScrollView } from 'react-native';
const PalinDrome = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    // const [SecondData,setSecondData]=useState([])
    
    const fetctApi = async () => {
        try{
            const response= await fetch('https://jsonplaceholder.typicode.com/posts');
            const json = await response.json();
            // console.log('json============',json.slice(0,1));
            setData(json.slice(0,2))
        }
        
        catch(error) {
            console.log(error);

        }
        finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetctApi()
    }, [])
    return (
        < View >
        {(isLoading)?<ActivityIndicator /> : (
        <FlatList
        data={data}
      
        // keyExtractor={item => item.id}    
        renderItem={({item})=>(
            // console.log(item)
            // console.log(item.title)
            <Text>  {item.id} {item.title} {item.body} </Text>
        )
        }
        />
        )}
</View>
    )

}
export default PalinDrome;