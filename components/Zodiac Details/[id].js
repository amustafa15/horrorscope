import React, {useState, useEffect} from "react";
import { ActivityIndicator, ScrollView, View, Button } from "react-native";
import axios from "axios";

import zodiacJSON from "../../constants/ZodiacJSON"
import styles from "./zodiac-details.styles";

import Characteristics from "./characteristics/Characteristics";
import ZodiacHeader from "./headers/ZodiacHeader";

const ZodiacDetails = ({navigation, route}) => {

    const zodiac = route.params.paramKey
    const zodiacTitle = zodiac.charAt(0).toUpperCase() + zodiac.substring(1)
    const title = zodiacTitle + ' Characteristics'

    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const [ready, setReady] = useState(false)
    const [horoscopeData, setHoroscopeData] = useState('')

    useEffect(() => {
        navigation.setOptions({
            title
        });
    }, [navigation])

    // consolidate?
    useEffect(() => {
        navigation.setOptions({
            headerBackVisible: false,
            headerLeft: () => (
                <Button 
                    onPress={() => navigation.popToTop()}
                    title="Back"
                    color="#007AFF"
                />
            )
        })
    })

    const fetchHoroscope = async () => {
        try {
            const options = {
                method: "GET",
                url: `https://horoscope34.p.rapidapi.com/api/horoscope/today`,
                headers: {
                    'X-RapidAPI-Key': '98c2784820msh1aef1af91e59944p169722jsn9feeceae1f3e',
                    'X-RapidAPI-Host': 'horoscope34.p.rapidapi.com'
                }
            }
            const response = await axios.request(options);
            return response.data.payload[zodiacTitle]
        } catch (error) {
            console.log("in fetchHoroscope catch error with an error of: ", error)
        }
    }

    useEffect(() => {
        console.log("zodiac: ", zodiac.toLowerCase())
        fetchHoroscope()
        .then((res) => {
            setData(zodiacJSON[0][zodiac.toLowerCase()])
            setHoroscopeData(res)
            setLoading(false)
            setReady(true)
        })
    }, [])
    
    return (
        <View style={styles.detailPageView}>
            {isLoading == false && 
                ready && (
                    data.length >= 1 ? <ActivityIndicator color="#00ff00" size="large" animating={true} /> :
                        
                        <ScrollView style={{margin: 10, marginBottom: 10}}>
                            <ZodiacHeader zodiacData={data} zodiac={zodiac}/>
                            <Characteristics zodiacData={data} horoscopeData={horoscopeData}/>
                        </ScrollView>
                )
                
            }
        </View>
    )
}

export default ZodiacDetails;