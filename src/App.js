
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './component/Blog/Blog';
import Home from './component/Home/Home';
import QuizChart from './component/QuizChart/QuizChart';
import QuizTest from './component/QuizTest/QuizTest';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path: '/',
          loader:async()=>{
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element:<Home></Home>
        },
        {
          path:'/quizTest/:quizTestId',
          loader:async({params})=>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizTestId}`);
          },
          element:<QuizTest></QuizTest>
        },
        
        {
          path:'/quizChart',
          loader:async()=>{
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element:<QuizChart></QuizChart>
        },

        {
          path:'/blog',element:<Blog></Blog>
        }
      ]
  
    },
    
    {
      path:'*',
      element:<h1 style={{color:'red'}}>sorry user, This page are not found</h1>
    }
    
  ])
  return (
    <div className="App">
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
