// Styles.js

import { StyleSheet, Platform } from 'react-native';


const GlobalStyles = StyleSheet.create({
  rootContainer: {
    backgroundColor: '#191F21',
    flex: 1,
},
  webContainer: {
    maxWidth: 400,
    height: '100%',
    //height: 510,
    overflow: 'hidden',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    
  },
  mobileContainer: {
      flex: 1,
  },
  gradient: {
      flex: 1,
      colors: ['#293236', '#293236', '#293236'],
  },
});

const FirstScreenStyles = StyleSheet.create({
  webContainer: {
    maxWidth: 400,
    height: '100%',
    overflow: 'hidden',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 50,
  },
    container: {
        bottom: '20%',
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        elevation: 10,
    },
    contentContainer: {
        bottom: '5%',
        backgroundColor: '#293236',
        borderRadius: 25,
        width: '100%',
        justifyContent: 'top',
        textAlign: 'left',
        alignSelf: 'center',
    },
    image: {
        position: 'relative',
        //bottom: '0%',
        width:Platform.OS === 'web' ? 400 : '100%',
        height: Platform.OS === 'web' ? '30%' : '30%',
        resizeMode: 'stretch',
        alignSelf: 'center',
    },
    h1: {
        position: 'relative',
        bottom: '22%',
        marginLeft: '7.5%',
        fontSize: 22,
        textAlign: 'left',
        color: '#fff',
        fontWeight: Platform.OS === 'web' ? '500' : '600',
        paddingTop: '25%',       
    },
    h2: {
        position: 'relative',
        bottom: '18%',
        marginHorizontal: Platform.OS === 'web' ? '0%' : '5%',
        paddingHorizontal: Platform.OS === 'web' ? '0%' : '0%',
        marginLeft: '7.5%',
        fontSize: 19,
        justifyContent: 'center',
        textAlign: 'left',
        fontWeight: Platform.OS === 'web' ? '300' : '400',
        color: '#fff',
        lineHeight: Platform.OS === 'web' ? 28 : 30,
        width: Platform.OS === 'web' ? '100%' : undefined,
    },
    h3: {
        position: 'relative',
        bottom: '2.5%',
        marginLeft: '7.5%',
        fontSize: 16,
        justifyContent: 'center',
        textAlign: 'left',
        color: '#fff',
        fontWeight: Platform.OS === 'web' ? '400' : '600',
        bottom: Platform.OS === 'web' ? '11%' : '1%',
        paddingTop: Platform.OS === 'web' ? '7%' : '0%',
        paddingBottom: '2%',
    },
    input: {
        borderWidth: 1,
        height: 45,
        alignSelf: 'center',
        position: 'relative',
        marginHorizontal: '5%',
        borderWidth: 2,
        width: '85%',
        borderRadius: 5,
        borderColor: 'gray',
        backgroundColor: '#293236',
        color: 'white',
        paddingLeft: 10,
        fontSize: 18,
        textTransform: 'capitalize',
        bottom: Platform.OS === 'web' ? '10%' : '0%', 
    },
    inputFocused: {
        borderColor: '#01E4F3',
    },
    button: {
        position: 'absolute',
        bottom: Platform.OS === 'web' ? '5%' : '5%',        
        marginTop: 10,
        alignSelf: 'center',
        backgroundColor: '#01E4F3',
        width: '85%',
        height: 45,
        borderRadius: 50,
        justifyContent: 'center',
        color: '#293236',
    },
    buttonIOS: {
        marginTop: 45,
    },
    buttonDisabled: {
        backgroundColor: '#1c6c80',
    },
    buttonText: {
        color: Platform.OS === 'web' ? '#293236' :  '#293236',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '600',
    },
    loadingOverlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        top: 170,
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#293236',
    },

});

const NewSecondScreenStyles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        padding: 1
    },
    scrollView: {
        flexGrow: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    h2: {
      position: 'relative',
      paddingHorizontal: Platform.OS === 'web' ? '28%' : '4%',
      marginLeft: Platform.OS === 'web' ? '2.5%' : undefined,
      paddingVertical:Platform.OS === 'web' ? '2%' : '5%',
      fontSize: 19,
      textAlign: 'left',
      fontWeight: Platform.OS === 'web' ? '200' :'400',
      color: '#fff',
      lineHeight: Platform.OS === 'web' ? 25 : 27,

    },
    contentContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        paddingBottom: 100,
        width: '100%',
        marginLeft: Platform.OS === 'web' ? '15%' : '10%',
    },
    item: {
        height: Platform.OS === 'web' ? 135 : 145,
        width: Platform.OS === 'web' ? 145 : 155,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        margin: 11,
        backgroundColor: '#2a3a40',
        borderColor: 'white',
        borderRadius: 10,
    },
    selectedItem: {
        height: Platform.OS === 'web' ? 135 : 145,
        width: Platform.OS === 'web' ? 145 : 155,
        borderWidth: 1.5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        margin: 11,
        backgroundColor: '#01E4F318',
        borderColor: '#01E4F3',
        borderRadius: 10,
    },
    selectedItemText: {
        color: '#01E4F3',
    },
    itemText: {
        position: 'relative',
        color: 'white',
        top: 12,
        fontSize: 17,
        textAlign: 'center',
        fontWeight: Platform.OS === 'web' ? '400' : '700',
    },
    itemContent: {
        alignItems: 'center',
    },
    icon: {
        width: 42,
        height: 42,
        bottom: 5,
    },
    bottomContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
        height: 90,
        backgroundColor: '#293236',
    },
    button: {
        position: 'absolute',
        bottom: Platform.OS === 'web' ? '48%' : '50%',        
        marginTop: Platform.OS === 'web' ? 23 : 10,
        alignSelf: 'center',
        width: '85%',
        height: 45,
        borderRadius: 50,
        justifyContent: 'center',
    },
    buttonFocused: {
        backgroundColor: '#01E4F3',
    },
    buttonDisabled: {
        backgroundColor: '#1c6c80',
    },
    buttonText: {
        color: '#293236',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '600',
    },
});

const ThirdScreenStyles = StyleSheet.create({
  body: {
      flex: 1,
      alignSelf: 'center',
  },
  h2: {
      fontSize: 20,
      color: '#fff',
      fontWeight: Platform.OS === 'web' ? '200' : '400',
      marginVertical: 10,
      marginLeft: Platform.OS === 'web' ? '10%' : '7%',
      textAlign: 'left',
      paddingVertical: 10,
  },
  inputValue: {
      textTransform: 'capitalize'
  },
  scrollView: {
      width: 400,
      flex: 1,
      paddingBottom: 10,
  },
  item: {
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'center',
      width: Platform.OS === 'web' ? '80%' : '85%',
      height: 90,
      borderWidth: 1,
      borderColor: 'white',
      padding: '5%',
      paddingBottom: 40,
      margin: 8,
      backgroundColor: '#2a3a40',
      borderRadius: 15,
      elevation: 2,
  },
  itemText: {
      color: 'white',
      fontSize: 22,
      fontWeight: Platform.OS === 'web' ? '400' : '600',
      textAlign: 'left',
      textTransform: 'capitalize',
      flex: 1,
      flexWrap: 'wrap',
  },
  selectedItem: {
      borderColor: '#01E4F3',
      backgroundColor: '#2c535e',
      borderWidth: 1.5,
  },
  arrowContainer: {
      backgroundColor: '#3f4e53',
      borderRadius: 50,
      padding: 0,
      marginLeft: 'auto',
      width: 28,
      height: 28,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
  },
  selectedArrowContainer: {
      backgroundColor: '#6b868e',
      borderRadius: 50,
      padding: 0,
      marginLeft: 'auto',
      width: 28,
      height: 28,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
  },
  selectedArrowColor: {
      color: '#fff',
  },
});

const FourthScreenStyles = StyleSheet.create({
  container: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: '5%',
  },
  videoContainer: {
    width: '100%',
    alignItems: 'center',
    zIndex: 0
  },
  videoTextContainer: {
      flex: 1,
  },
  videoInfoContainer: {
      paddingTop: '10%',
      flexDirection: 'row',
      alignItems: 'center',
      bottom: '1%',
  },
  channelIcon: {
      width: Platform.OS === 'web' ? 50 : 60,
      height: Platform.OS === 'web' ? 50 : 60,
      borderRadius: Platform.OS === 'web' ? 25 : 30,
      marginRight: '3%',
      marginLeft: '7%',
  },
  channelTitle: {
      fontSize: 14,
      fontWeight: Platform.OS === 'web' ? '200' : '400',
      color: 'white',
  },
  videoTitle: {
      color: 'white',
      marginBottom: '2%',
      fontSize: 18,
      fontWeight: Platform.OS === 'web' ? '400' : '600',
  },
  videoDetails: {
      fontSize: 14,
      color: 'white',
  },
  separator: {
    marginTop: '10%',
      borderWidth: 1,
      width: 400,
      borderColor: '#fff',
      marginBottom: '0%',
      bottom: Platform.OS === 'web' ? '10%' : '0%',
  },
  instructionsContainer: {
      bottom: Platform.OS === 'web' ? '10%' : '0%',
      paddingTop: '15%',
      padding: '5%',
      width: '100%',
      backgroundColor: '#293236',
      marginLeft: '7%',
  },
  instructionsTitle: {
      fontSize: 20,
      fontWeight: '400',
      color: '#fff',
      marginBottom: 15,
      right: '5%',
  },
  instructions: {
      fontSize: 16,
      fontWeight: '400',
      color: '#fff',
      marginBottom: 5,
      paddingBottom: 5,
      textAlign: 'left',
      lineHeight: 25,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#293236',
    height: 50,
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'fff',
},
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    paddingBottom: '2%'
  },
  imageContainer: {
      backgroundColor: '#293236',
      height: '100%'
  },
  muscleTab: {
      backgroundColor: '#293236',
  },
  //------MUSCLE TAB-------------
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#eee',
    height: 50,
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#293236',
    height: '100%',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#01E4F3',
    backgroundColor: '#2c535e'
  },
  tabText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#fff',
  },
  activeTabText: {
      color: '#01E4F3',
  },
  imageContainer: {
      backgroundColor: '#293236',
      height: '100%',
      paddingHorizontal: Platform.OS === 'web' ? '3%' : '0%',
  },
  targetedAreaText: {
    color: '#fff',
    paddingHorizontal: '7.5%',
    fontSize: 20,
    fontWeight: '300'
  },
  muscleText: {
    color: '#01E4F3',
    textTransform: 'uppercase',
    fontWeight: '600'
  }
});

export { GlobalStyles ,FirstScreenStyles, NewSecondScreenStyles, ThirdScreenStyles, FourthScreenStyles };