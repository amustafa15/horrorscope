import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    datePickerSafeViewContainer: {
        // backgroundColor: 'orange',
        height: '100%'
        // justifyContent: 'space-between',
        // paddingLeft: 25,
        // paddingRight: 25, 
        // paddingTop: '67%',
        // height: '105%'
    },
    datePicker: {
        height: 250,
    },
    datePickerViewContainer: {
        // justifyContent: 'center',
        // alignItems: 'center',
        paddingLeft: 25,
        paddingRight: 25, 
        marginBottom: 25,
        // backgroundColor: 'red',
        paddingTop: '80%',
        // height: '105%'
    },
    saveBtnContainer: {
        height: 100,
        // backgroundColor: 'green',
        flexDirection: 'column', // inner items will be added vertically
        flexGrow: 1,            // all the available vertical space will be occupied by it
        justifyContent: 'space-between' // will create the gutter between body and footer
    },
    saveBtn: {
        alignItems: 'center',
        // verticalAlign: 'bottom',
        // justifyContent: 'space-between',
        paddingVertical: 16,
        paddingHorizontal: 25,
        // shadowOpacity: 0.5,
        // borderColor: 'rgba(30,144,255, 0.4)',
        // borderWidth: 4,
        // borderColor: 'silver',
        borderRadius: 25,
        elevation: 3,
        backgroundColor: 'powderblue',
        // width: "50%"
        // marginTop: 25,
        marginLeft: "15%",
        marginRight: "15%"
    },
    saveBtnText: {
        fontSize: 18,
        lineHeight: 20, 
        // fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black'
    }
})

export default styles