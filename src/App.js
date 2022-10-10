
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './component/Blog/Blog';
import Home from './component/Home/Home';
import QuizChart from './component/QuizChart/QuizChart';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path: '/',element:<Home></Home>
        },
        {
          path:'/quizChart',element:<QuizChart></QuizChart>
        },
        {
          path:'/blog',element:<Blog></Blog>
        }
      ]
  
    }
  ])
  return (
    <div className="App">
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
