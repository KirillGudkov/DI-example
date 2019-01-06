import {StyleSheet} from "react-native";

export const style = StyleSheet.create({
  notification: {
    width: '95%',
    shadowColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    top: 22,
    zIndex: 2,
    elevation: 2,
    shadowOpacity: 0.2,
    shadowRadius: 10,
    borderRadius: 12,
    position: 'absolute',
    alignSelf: 'center'
  },
  text: {
    fontSize: 16,
  },
  knob: {
    width: 50,
    height: 4,
    backgroundColor: '#ffffff',
    opacity: 0.3,
    borderRadius: 4,
    marginBottom: 6
  },
  absolute: {
    position: "absolute",
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
  content: {
    width: '98%',
    flex: 1,
    margin: 14,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: -4
  },
});
