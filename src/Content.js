import ItemList from  './ItemList';
const Content =({ items,handleCheck,handleDelete }) =>{

    return (
        <main>
            {items.length ? (
                <ItemList
                     items={items}
                     handleCheck={handleCheck}
                     handleDelete={handleDelete}/>
            ): (
                <p style={{marginTop: '2rem'}}>Your list is empty</p>
            )}
        </main>
    )
            }
    

    //const [name, setName] = useState('hgf');
    //const [count, setCount] = useState(0);

   /* const handleChange = () =>
  {
    const names = ['abc', 'jdhf', 'tuy'];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  }
  const handleClick=() => {
    setCount(count + 1)
    setCount(count + 1)
    console.log(count)
  }
  const handleClick2 = (e) =>
  {
    console.log(count)
  }


  
  


    return (
        <main>
            <p>
                Hello {name}!
            </p>
            <button onClick={handleChange}> Change name</button>
            <button onClick={handleClick}> Click it</button>
            <button onClick={handleClick2}> Click it</button>
            
        </main>

    );
}*/
export default Content