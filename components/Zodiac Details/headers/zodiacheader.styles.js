import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        flex: 1
    },
    imageContainer: {
        flex: 1, 
        margin: 10
    },
    detailsContainer: {
        flex: 2, 
        alignItems: 'center', 
        justifyContent: 'center'
    }
})

export default styles