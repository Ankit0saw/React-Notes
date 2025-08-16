import React from 'react'
import ReuseComponent from './ReuseComponent';

const LoopsWithMap = () => {

const userName = ['Williams', 'Jonathan', 'Peter', 'James'];

const userData =[
    {
        name:'James',
        age:'32',
        email:'james@test.com',
        id:4
    },
    {
        name:'Peter',
        age:'25',
        email:'peter@test.com',
        id:3
    }
]

  return (
    <div>
        <h2>Loops Using Map Function inside JSX</h2>
        <table border="1">
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Age</td>
                </tr>
            </thead>

            <tbody>
                {
                    userData.map((user)=>(
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.age}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        <br />

        {userName.map((name, index)=>(
            <ReuseComponent key={index} name={name} />
        ))}
    </div>
  )
}

export default LoopsWithMap