export function Comp1(){
    return(
        <>
            <div> 
                <p><b>time limit per test:</b> 1 second<br></br>
                <b>memory limit per test:</b> 256 megabytes<br></br>
                <b>input:</b> standard input<br></br>
                <b>output:</b> standard output</p>
            </div>

            <p>Vanya and his friends are walking along the fence of height h and they do not want the guard to notice them. In order to achieve this the height of each of the friends should not exceed h. If the height of some person is greater than h he can bend down and then he surely won't be noticed by the guard. The height of the i-th person is equal to ai.<br></br>
            Consider the width of the person walking as usual to be equal to 1, while the width of the bent person is equal to 2. Friends want to talk to each other while walking, so they would like to walk in a single row. What is the minimum width of the road, such that friends can walk in a row and remain unattended by the guard?<br></br>
            <b>Input:</b><br></br>
            The first line of the input contains two integers n and h (1 ≤ n ≤ 1000, 1 ≤ h ≤ 1000) — the number of friends and the height of the fence, respectively.<br></br>
            The second line contains n integers ai (1 ≤ ai ≤ 2h), the i-th of them is equal to the height of the i-th person.<br></br>
            <b>Output:</b><br></br>
            Print a single integer — the minimum possible valid width of the road.<br></br>
            <br></br>
            <img alt="" src={require("../../CompeImg/comp1ex.jpg")}></img><br></br>
            <br></br>
            <b>Note:</b> In the first sample, only person number 3 must bend down, so the required width is equal to 1 + 1 + 2 = 4.<br></br>
            In the second sample, all friends are short enough and no one has to bend, so the width 1 + 1 + 1 + 1 + 1 + 1 = 6 is enough.<br></br>
            In the third sample, all the persons have to bend, except the last one. The required minimum width of the road is equal to 2 + 2 + 2 + 2 + 2 + 1 = 11.</p>

            <h5>Solution:</h5>

            <img alt="" src={require("../../CompeImg/comp1solution.jpg")}></img><br></br><br></br>

            <h5>Bibliografi:</h5>
            <a href="https://codeforces.com/contest/677/problem/A" target={"_blank"} rel="noreferrer">https://codeforces.com/contest/677/problem/A</a>
        </>
    )
}

export function Comp2(){
    return(
        <>
            <p><b>time limit per test:</b> 1 second<br></br>
            <b>memory limit per test:</b> 256 megabytes<br></br>
            <b>input:</b> standard input<br></br>
            <b>output:</b> standard output<br></br>

            Anton likes to play chess, and so does his friend Danik.<br></br>
            Once they have played n games in a row. For each game it's known who was the winner — Anton or Danik. None of the games ended with a tie.<br></br>
            Now Anton wonders, who won more games, he or Danik? Help him determine this.<br></br><br></br>
            <b>Input:</b><br></br>
            The first line of the input contains a single integer n (1 ≤ n ≤ 100 000) — the number of games played.<br></br>
            The second line contains a string s, consisting of n uppercase English letters 'A' and 'D' — the outcome of each of the games. The i-th character of the string is equal to 'A' if the Anton won the i-th game and 'D' if Danik won the i-th game.<br></br><br></br>
            <b>Output:</b><br></br>
            If Anton won more games than Danik, print "Anton" (without quotes) in the only line of the output.<br></br>
            If Danik won more games than Anton, print "Danik" (without quotes) in the only line of the output.<br></br>
            If Anton and Danik won the same number of games, print "Friendship" (without quotes).</p><br></br><br></br>
            <img alt="" src={require("../../CompeImg/comp2ex.jpg")}></img><br></br><br></br>
            <p><b>Note:</b><br></br>
            In the first sample, Anton won 6 games, while Danik — only 1. Hence, the answer is "Anton".<br></br>
            In the second sample, Anton won 3 games and Danik won 4 games, so the answer is "Danik".<br></br>
            In the third sample, both Anton and Danik won 3 games and the answer is "Friendship".</p>
            <h4>Solution:</h4>
            <a href="https://github.com/PosadaD/icpc/blob/5ba17c96d9dff7093c68bedb93ab30df58497b97/Anton%20and%20Danik/Anton_Danik.cpp" target="_blank" rel="noreferrer">Get the code</a>
            <img alt="" src={require("../../CompeImg/comp2solution.jpg")}></img><br></br>
            <h5>Biliografi:</h5>
            <a href="https://codeforces.com/contest/734/problem/A" target={"_blank"} rel="noreferrer">https://codeforces.com/contest/734/problem/A</a>
        </>
    )
}


export function Comp3(){
    return(
        <>
            <p><b>time limit per test:</b> 1 second<br></br>
            <b>memory limit per test:</b> 256 megabytes<br></br>
            <b>input:</b> standard input<br></br>
            <b>output:</b> standard output<br></br>
            
            Bear Limak wants to become the largest of bears, or at least to become larger than his brother Bob.<br></br>
            Right now, Limak and Bob weigh a and b respectively. It's guaranteed that Limak's weight is smaller than or equal to his brother's weight.<br></br>
            Limak eats a lot and his weight is tripled after every year, while Bob's weight is doubled after every year.<br></br>
            After how many full years will Limak become strictly larger (strictly heavier) than Bob?<br></br>
            <b>Input</b><br></br>
            The only line of the input contains two integers a and b (1 ≤ a ≤ b ≤ 10) — the weight of Limak and the weight of Bob respectively.<br></br>
            <b>Output</b><br></br>
            Print one integer, denoting the integer number of years after which Limak will become strictly larger than Bob.</p>

            <h4>Solution:</h4>
            <a  href="https://github.com/PosadaD/icpc/blob/main/Bear%20and%20Big%20Brother/bearAndBigBrother.cpp" target="_blank" rel="noreferrer"> Get the code</a>
            <img alt="" src={require("../../CompeImg/comp3solution.jpg")}></img><br></br>
            <h5>Biliografi:</h5>
            <a href="https://codeforces.com/contest/791/problem/A" target={"_blank"} rel="noreferrer">https://codeforces.com/contest/791/problem/A</a> 
        </>
    )
}

export function Comp4(){
    return(
        <>
            <p><b>time limit per test:</b> 2 seconds<br></br>
            <b>memory limit per test:</b> 256 megabytes<br></br>
            <b>input:</b><br></br>
            standard input
            <b>output</b><br></br>
            standard output<br></br>
            One day three best friends Petya, Vasya and Tonya decided to form a team and take part in programming contests. Participants are usually offered several problems during programming contests. Long before the start the friends decided that they will implement a problem if at least two of them are sure about the solution. Otherwise, the friends won't write the problem's solution.<br></br>
            This contest offers n problems to the participants. For each problem we know, which friend is sure about the solution. Help the friends find the number of problems for which they will write a solution.<br></br>
            <b>Input</b><br></br>
            The first input line contains a single integer n (1 ≤ n ≤ 1000) — the number of problems in the contest. Then n lines contain three integers each, each integer is either 0 or 1. If the first number in the line equals 1, then Petya is sure about the problem's solution, otherwise he isn't sure. The second number shows Vasya's view on the solution, the third number shows Tonya's view. The numbers on the lines are separated by spaces.<br></br>
            <b>Output</b><br></br>
            Print a single integer — the number of problems the friends will implement on the contest.</p>
            <h4>Solution:</h4>
            <a  href="https://github.com/PosadaD/icpc/blob/main/Team/Team.cpp" target="_blank" rel="noreferrer">Get the code</a>
            <img alt="" src={require("../../CompeImg/comp4solution.jpg")}></img><br></br>
            <h5>Biliografi:</h5>
            <a href="https://codeforces.com/contest/231/problem/A" target={"_blank"} rel="noreferrer">https://codeforces.com/contest/231/problem/A</a>
        </>
    )
}

export function Comp5(){
    return(
        <>
            <p><b>time limit per test:</b> 2 seconds<br></br>
            <b>memory limit per test:</b> 256 megabytes<br></br>
            <b>input</b><br></br>
            standard input
            <b>output</b><br></br>
            standard output<br></br>
            You've got a 5 × 5 matrix, consisting of 24 zeroes and a single number one. Let's index the matrix rows by numbers from 1 to 5 from top to bottom, let's index the matrix columns by numbers from 1 to 5 from left to right. In one move, you are allowed to apply one of the two following transformations to the matrix:<br></br>
                1. Swap two neighboring matrix rows, that is, rows with indexes i and i + 1 for some integer i (1 ≤ i  5). <br></br>
                2. Swap two neighboring matrix columns, that is, columns with indexes j and j + 1 for some integer j (1 ≤ j  5).<br></br> 
            You think that a matrix looks beautiful, if the single number one of the matrix is located in its middle (in the cell that is on the intersection of the third row and the third column). Count the minimum number of moves needed to make the matrix beautiful.<br></br>
            <b>Input</b><br></br>
            The input consists of five lines, each line contains five integers: the j-th integer in the i-th line of the input represents the element of the matrix that is located on the intersection of the i-th row and the j-th column. It is guaranteed that the matrix consists of 24 zeroes and a single number one.<br></br>
            <b>Output</b><br></br>
            Print a single integer — the minimum number of moves needed to make the matrix beautiful.</p>

            <h4>Solution:</h4>
            <a  href="https://github.com/PosadaD/icpc/tree/main/Beautiful%20Matrix"  target="_blank" rel="noreferrer">Get the code</a>
            <img alt="" src={require("../../CompeImg/comp5solution.jpg")}></img><br></br>
            <h5>Biliografi:</h5>
            <a href="https://codeforces.com/contest/263/problem/A" target={"_blank"} rel="noreferrer">https://codeforces.com/contest/263/problem/A</a>
        </>
    )
}