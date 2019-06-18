import { createStackNavigator} from "react-navigation";
import TodoScreen from './../screens/Todo'
import TodoDetailScreen from './../screens/TodoDetail'

export default createStackNavigator({
  TodoList: {
    screen: TodoScreen
  },
  TodoDetail: {
    screen: TodoDetailScreen
  }
})