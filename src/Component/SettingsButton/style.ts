import {StyleSheet} from "react-native";

export const style = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: '#f5f5f5',
    borderBottomColor: '#f5f5f5',
  },
  containerInner: {
    paddingHorizontal: 12,
    paddingVertical: 16,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 16,
  },
  icon: {
    width: 14,
    height: 14,
  }
});
