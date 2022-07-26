export default function whoIsWin(mas){
    const winner = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [0,4,8]
    ]
    let temp = false

    winner.map(el=>{
        const [a,b,c] = el;
        if (mas[a]===mas[b] && mas[c]===mas[b] && mas[a]===mas[c] && mas[b]!=null && mas[c]!=null ) temp=true;
    })

    return temp;
}

