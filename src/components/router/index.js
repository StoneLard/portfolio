import Home from "../pages/home/Home";
import Todos from "../pages/todolist/Todos";
import EnLearn from "../pages/enlearn/EnLearn";
import TicTacToe from "../pages/tictactoe/TicTacToe";

export const appRoutes = [
    {id: 1, path: '/', element: <Home/>},
    {id: 2, path: '/todos', element: <Todos/>},
    {id: 3, path: '/enlearn', element: <EnLearn/>},
    {id: 4, path: '/tictactoe', element: <TicTacToe/>},

]
