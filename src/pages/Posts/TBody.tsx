import { Link } from "react-router-dom";

interface TableProps {
  id: number;
  route: string;
  name: string;
  email: string;
}

export function TBody({ id, route, name, email }: TableProps) {
  return (
    <>
      <tr>
        <th scope="row">{id}</th>
        <td>{name}</td>
        <td>{email}</td>
        <th>
          <Link to={`${route}`}>Ver Perfil</Link>
        </th>
      </tr>
    </>
  );
}
