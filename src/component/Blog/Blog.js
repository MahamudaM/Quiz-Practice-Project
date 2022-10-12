import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div className='blog-container'>
           <div className="singleQuetion">
            <h3>what is the purpose of react router</h3>
            <p>React Router keeps your UI in sync with the URL. It has a simple API with powerful features
                 like lazy code loading, dynamic route matching, and location
 transition handling built right in. Make the URL your first thought, not an after-thought.</p>
           </div>

           <div className="singleQuetion">
            <h3>how does context api works in react</h3>
            <p>React.createContext() is all you need. It returns a consumer and a provider. Provider
         is a component that as it's names suggests provides the state to its children. It will 
         hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state </p>
            </div>

            <div className="singleQuetion">
            <h3>useref hook in react</h3>
            <p> useRef is one of the standard hooks provided by React. It will return an object that you can use during the whole lifecycle of the component.The main use case for the useRef hook is to access a DOM child directly. I’ll show exactly how to do that in another section.Although accessing the DOM is the main use case, it doesn’t mean it’s the only one! useRef can also be very useful to hold a mutable value across different renders of your component. useRef is a hook, and as such can only be used in functional components! To use refs in class components, you have createRef instead</p>
            </div>


        </div>
    );
};

export default Blog;