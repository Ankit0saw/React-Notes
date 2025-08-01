import React from 'react'
import User from './User';
import College from './College';
import Wrapper from './Wrapper';

const Props = () => {
    // let name="donnie";
    // let age=25;
    // let text="is going to destination";

    let userObject = {
        name:"donnie",
        age:23,
        text:"going somewhere"
    }

    let userObject2 = {
        name:"darko",
        age:20,
        text:"trevelling to remote area"
    }

    let Colleges = ["JNU","DU","BHU"];

  return (
    <div>
        <h1>Props in react</h1>
        <College names={Colleges} />

        {/* {<User name={name} age={age} text={text} />} */}
        <User props={userObject} />
        <User props={userObject2} />

        <Wrapper rang="green">
          <h1>text inside wrapper tag</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptas error fugit nisi quibusdam voluptatibus quis quidem eius nam laudantium a nemo labore obcaecati magnam quasi esse, ipsa architecto unde.
          Perferendis beatae, culpa a eum consequatur error voluptatibus aliquam qui eaque expedita, dolores porro! Necessitatibus fugit ratione voluptatum nesciunt magni at mollitia error eligendi culpa? Asperiores quod sunt aut aliquid.</p>
        </Wrapper>

    </div>
  )
}

export default Props