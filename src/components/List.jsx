const List = ({datos,search}) => {

    return ( 
        <ul>
          {datos.filter((datos) => {
            return search.toLowerCase() === "" ? datos : datos.name.toLowerCase().includes(search.toLowerCase())
          }).map(({ id, name, email }) =>
            <li
                key={id}
            >
                {name} --- {email}
            </li>)}
      </ul>
      
     );
}
 
export default List;


