import React, { useRef, useEffect } from "react";
import { View, Button } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import RBSheet from "react-native-raw-bottom-sheet";
import MapViews from "../components/MapViews";
import FilledBottom from "./FilledBottom";

const Location = () => {
  const refRBSheet = useRef();

  useEffect(() => {
    
    refRBSheet.current.open()
  },[])

  return (
    <>
      <MapViews />
      <View>
        <Button title="OPEN BOTTOM SHEET" onPress={() => refRBSheet.current.open()} />
<GestureHandlerRootView>
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={true}
          height={275}
          customStyles={{
            wrapper: {
              backgroundColor: "transparent"
            },
            draggableIcon: {
              backgroundColor: "#000"
            },
            
          }}

        >
        <FilledBottom />
        </RBSheet> 
        </GestureHandlerRootView>
      </View>
    </>
  );
}
export default Location