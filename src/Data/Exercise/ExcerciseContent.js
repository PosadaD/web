export function Ex1React(){
    return(
        <div className="conatainerEx">

            <p>Hey
            Today we're going to see one of the hooks that has React.</p>

            <h2>What is useState?</h2>

            <p>The useState is a hook that allows us to set variables's state in a functional component. So, we us it to set the initial state we going to use.<br></br>

            The sintax of this hook is “const [name var, set_name var] = useState(initial value of the state);”<br></br>

            to understand this better we’ll going to see it with a basic example. Let’s make a counter, this counter will start a 0 an it’ll has two buttons, one of them to increase the set  count and the last one to decrease. </p>


            <h4>Exercise:</h4>

            <p><b>Note: </b>to start this exercise it is assumed that you have no olnly the skills to create an new react app but also have the basic knowledge of html, JSX and css(if you want to style it).</p>

            <ul>
                <li>To start let’s create a react app</li>
                <img src={require("../../ExImg/ex1step1.jpg")} alt=""></img>

                <li>In the DOM we going to create the bottoms and the counter.</li>
                <img src={require("../../ExImg/ex1step2.jpg")} alt=""></img>

                <li>Some things that we have to know to start using the usestate hook is that this hook always need to be call out of not only conditionals but also functions or loops , if you don’t do it the browser will return you the next code error “Line 8:31: React Hook "useState" is called conditionally. React Hooks must be called in the exact same order in every component render react-hooks/rules-of-hooks”.</li>
                <img src={require("../../ExImg/ex1step3.jpg")} alt=""></img>

                    <li>understanding the syntax of this hook we could name this const as we want, in this example is going to be like this “const [count, setcount] = useState(0)”, as well as the initial state in this instance   stars in “0” you could try with any number you want to star.</li>
                <img src={require("../../ExImg/ex1step4.jpg")} alt=""></img>

                    <li>To make this work we need to replace the actual state we created in to the <span/>.
                So now the state is working but we also need to make the bottoms work, to do that we have to use an “Event” the event we would use is “onClick={}” in that Event we have to use a function that tell to the actual state plus or less 1 point.<br></br>
                So the the event with the parameter will be the next <code>function plusCounter(){`{setcount(count + 1)}`}</code> and  <code>function lessCounte(){`{setcount(count - 1)}`}</code></li>
                <img src={require("../../ExImg/ex1step5.jpg")} alt=""></img>
                <img src={require("../../ExImg/ex1step5.1.jpg")} alt=""></img>
                <img src={require("../../ExImg/ex1step5.2.jpg")} alt=""></img>

            </ul>

            <p>Note: there are 2 ways to complete the set event which would change the state value, the first way is the one that we already used that change the value directly from the state like “setcount(new_value)”.
            The second way is use a callback function that is used to set the old value or the previous value an change it, so whatever the callback function returns that will be the new value of state.</p>

            <img src={require("../../ExImg/ex1finalNote.jpg")} alt=""></img>
        </div>
    )
}


export function Ex2React(){

    return(
        <>
            <p>This days i’ve been try to learn more about the react hooks, so i found some exercises that can help me understand this topic better. In order to get the best benefit here are those exerciseses but in a complex way.</p>

            <p><b>Note: All this exercises are from useState hook.</b></p>

            <h3 style={{marginTop:"100px"}}>Counter of items in a online shop</h3>

            <p style={{width:"50%"}}>This exercise is based on the real need to determine the number of products in a shopping cart, since it is quite common for buyers to select more than one item and its quantity.</p>

            <img src={require("../../ExImg/execommusesate.png")} alt=""></img>

            <h3 style={{marginTop:"100px"}}>Change of pokemon array</h3>

            <p style={{width:"50%"}}>In this example we will use a video game as a reference to represent the lives of the characters, and thus, determine how much remaining life each one has after an attack and be able to determine a winner.</p>

            <img src={require("../../ExImg/exgameusestate.png")} alt=""></img>

            <p>Link code:</p>
            <a href="https://github.com/PosadaD/pokemon.git" style={{color:"white"}} target={"_blank"} rel="noreferrer">https://github.com/PosadaD/pokemon.git</a>


            <h3 style={{marginTop:"100px"}}>Meme generator</h3> 

            <p style={{width:"50%"}}>In this example we seek to use the state to change the display of those that are being chosen at random from an array internally and it becomes a graphical representation.</p>

            <img src={require("../../ExImg/exmemeusestate.png")} alt=""></img>

            <p>Link code:</p>
            <a href="https://github.com/PosadaD/memeGenerator.git" style={{color:"white"}} target={"_blank"} rel="noreferrer">https://github.com/PosadaD/memeGenerator.git</a>
        </>
    )
}