import React, { useState, useEffect } from 'react';

const App = () => {
    const [timeLeft, setTimeLeft] = useState(3600); // Set countdown to 1 hour (3600 seconds)
    const [subjects, setSubjects] = useState([
        { name: 'Turkish', completed: false },
        { name: 'Math', completed: false },
        { name: 'History', completed: false },
        { name: 'Geography', completed: false },
        { name: 'Citizenship', completed: false }
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : prev));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const toggleCompletion = (index) => {
        const updatedSubjects = [...subjects];
        updatedSubjects[index].completed = !updatedSubjects[index].completed;
        setSubjects(updatedSubjects);
    };

    const renderCountdown = () => {
        const hours = Math.floor(timeLeft / 3600);
        const minutes = Math.floor((timeLeft % 3600) / 60);
        const seconds = timeLeft % 60;
        return <div>Time Left: {hours}:{minutes < 10 ? '0' : ''}{minutes}:{seconds < 10 ? '0' : ''}{seconds}</div>;
    };

    return (
        <div>
            <header>
                <h1>Exam Countdown</h1>
                {renderCountdown()}
            </header>
            <div style={{ display: 'flex' }}>
                <div style={{ flex: 1 }}>
                    <h2>Course Completion Rates</h2>
                    {subjects.map((subject, index) => (
                        <div key={index} style={{ margin: '10px', padding: '10px', border: '1px solid black' }}>
                            <span>{subject.name}: {subject.completed ? 'Completed' : 'Not Completed'}</span>
                            <button onClick={() => toggleCompletion(index)}>{subject.completed ? 'Undo' : 'Complete'}</button>
                        </div>
                    ))}
                </div>
                <div style={{ flex: 2 }}>
                    <h2>Subjects</h2>
                    <details>
                        <summary>Turkish</summary>
                        <button>Edit</button>
                        <button>Delete</button>
                    </details>
                    <details>
                        <summary>Math</summary>
                        <button>Edit</button>
                        <button>Delete</button>
                    </details>
                    <details>
                        <summary>History</summary>
                        <button>Edit</button>
                        <button>Delete</button>
                    </details>
                    <details>
                        <summary>Geography</summary>
                        <button>Edit</button>
                        <button>Delete</button>
                    </details>
                    <details>
                        <summary>Citizenship</summary>
                        <button>Edit</button>
                        <button>Delete</button>
                    </details>
                </div>
            </div>
        </div>
    );
};

export default App;
