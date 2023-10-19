import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A'
  },
  header: {
    backgroundColor: '#0D0D0D',
    width: '100%',
    height: 173,

    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -30,
  },
  input: {
    flex: 1,
    padding: 16,
    backgroundColor: '#333333',
    borderRadius: 6,
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    color: '#FFF'
  },
  buttonAdd: {
    padding: 18,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,

    backgroundColor: '#1E6F9F',
    marginLeft: 4
  },
  content: {
    paddingHorizontal: 24,
    paddingBottom: 32
  },

  countTask: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    borderTopColor: '#808080',
    borderTopWidth: 1,

    marginTop: 32,
  },
  countTaskCreated: {
    flexDirection: 'row',
    marginTop: 20,
  },
  textTaskCreated: {
    color: '#4EA8DE',
    fontSize: 14,
    fontFamily: 'Inter_700Bold',
    marginRight: 8,
  },
  numberTask: {
    width: 25,
    height: 20,
    backgroundColor: '#333333',
    alignItems: 'center',
    borderRadius: 999,
  },
  textNumberTask: {
    color: '#FFF'
  },
  textTaskConcluded:{
    color: '#8284FA',
    fontSize: 14,
    fontFamily: 'Inter_700Bold',
    marginRight: 8,
  },

  listCardTask: {
    paddingBottom: 24
  }
});