import React from 'react'

const NestedLoop = () => {

    const users = [
        {
            name: 'Donnie darko',
            skills: ['Cpp', 'Java', 'Python', 'Javascript'],
        },
        {
            name: 'Jack sparrow',
            skills: ['Spring Boot', 'MongoDB', 'NoSQL', 'MySQL'],
        },
        {
            name: 'Edward NYgma',
            skills: ['Html', 'Css', 'Javascript'],
        }
    ];

  return (
    <div>
        <h2>Eg of Nested Loops in JSX</h2>
        
        {users.map((user, index)=> (
            <div key={index} style={{color:"blue", border:"solid 1px yellow", width:"200px", margin:"5px", padding:"10px"}}>
                <h4>{user.name}</h4>
                <ul>
                    {user.skills.map((skill, i)=>(
                        <li key={i}>{skill}</li>
                    ))}
                </ul>
            </div>
        ))}

    </div>
  )
}

export default NestedLoop