import {useState} from 'react';


export function Comp1()
{
    const [word, setWord] = useState('');
    const [ct, setCt] = useState(0);
    var count = 0;

    const handleChange = (event)=>
        {
            setWord(event.target.value);
            var x = event.target.value
            x = x.split(' ');
            count = x.length-1;
            setCt(count);
        }

    return(
        <div>
            <textarea placeholder='Type here' onChange={handleChange} />
            <p>Word count:{ct}</p>
            <p>You are typing: {word}</p>
        </div>
    )
}