import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div className='Blog-body'>
            <div className='blog'>
                <h1 className='text'>Question And Answer</h1>
                <div>
                    <h3 className='color'>
                        1. How react works?
                    </h3>
                    <p>
                        ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props.
                    </p>
                </div>
                <div>
                    <h3 className='color'>2. Difference between Props and state</h3>
                    <p>
                        Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.
                    </p>
                </div>
                <div>
                    <h3 className='color'>3. Why do we use useEffect?</h3>
                    <p>The motivation behind the introduction of useEffect Hook is to eliminate the side-effects of using class-based components. For example, tasks like updating the DOM, fetching data from API end-points, setting up subscriptions or timers, etc can be lead to unwarranted side-effects</p>
                </div>
            </div>
        </div >
    );
};

export default Blog;