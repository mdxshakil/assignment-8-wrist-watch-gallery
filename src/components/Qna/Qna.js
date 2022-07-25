import React from 'react';
import "./Qna.css";

const Qna = () => {
    return (
        <div>
            <h1 className='qna-section'>Questions and Answers</h1>
            <div className='qna-container'>
                <h2>How React Works?</h2>
                <p>React is one of the most popular javascript framework now a day. In other words react is a javascript library for creating interactive user interfaces. React maintains a tree structure. React stores virtual DOM tree in memory. By doing this react can compare with the actual Dom and the virtual Dom and make changes according to the comparison. A webpage is divided in multiple parts and each part is known as component. React also consists of state management which allows devs to pass data from one component to another compnent.</p>
                <h2>Difference between props and state.</h2>
                <p>Props is used to pass data from one component to another While state is a local data storage and those data can not be passed to another element.Means it can not bes accessed or modified outside the component. Props are immutable and can not be modified. But state is mutable and can be modified. Props are read-only but state is both read and write able.</p>
            </div>
        </div>
    );
};

export default Qna;