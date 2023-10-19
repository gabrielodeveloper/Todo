import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#333333',
    borderRadius: 8,
    padding: 12,
    marginTop: 21,

    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    flex: 1,
    textAlign: 'center',
    color: '#F2F2F2',
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    lineHeight: 20
  },
  titleDone: {
    flex: 1,
    textAlign: 'center',
    color: '#F2F2F2',
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    lineHeight: 20,
    textDecorationLine: 'line-through'
  }
})