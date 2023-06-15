import React, {useState} from "react";
import { Text, SafeAreaView, FlatList, Dimensions } from "react-native";
import HomePageIcon from "./HomePageIcon";
import ZodiacDetails from "../Zodiac Details/[id]";
import SignupButton from "../Signup Button/SignupButton"

const Homescreen = ({navigation}) => {


    const {width, height} = Dimensions.get('window')
    const actualIconHeight = 150
    const actualIconWidth = 140

    const [zodiacImageSource, setZodiacImage] = useState([]);

    useState(() => {
        let items = ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces']
        setZodiacImage(items)
    }, [])

    return (
        <SafeAreaView 
            style={{
                flex: 1, 
                justifyContent: 'center', 
                backgroundColor: 'pink',
                width: width, 
                height: actualIconHeight * (width / actualIconWidth),
                paddingTop: 3
            }}>

            <FlatList 
                data={zodiacImageSource}
                renderItem={({item}) => 
                    <HomePageIcon 
                        zodiacSign={item} 
                        handleNavigate={() => navigation.navigate('ZodiacDetails', {
                            paramKey: item
                        })}
                    />
                }
                keyExtractor={(item, index) => index.toString()}
                numColumns={3}
                justifyContent="center"
            />

            <SignupButton 
                handleNavigate={() => navigation.navigate('DatePickerView')}
            />
        </SafeAreaView>
    )
}

export default Homescreen