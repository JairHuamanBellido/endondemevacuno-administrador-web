import { Manager } from "module/Dashboard/Domain/entity/Manager";
import { ToggleButton } from "shared";
import TagAccountStatus from "../TagAccountStatus/TagAccountStatus";

interface IProps {
  managers: Manager[];
  onChangeAccountStatus(manager: Manager): void;
}
export default function ManagerTable(props: IProps) {
  const { managers, onChangeAccountStatus } = props;
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre y apellidos</th>
          <th>Email</th>
          <th>Estado de cuenta</th>
          <th>Fecha de creación</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {managers.map((manager) => (
          <tr className="manager-row" key={manager.id}>
            <td>
              {manager.name} {manager.lastname}
            </td>
            <td>{manager.email}</td>
            <td>
              <TagAccountStatus isEnable={manager.isEnabled} />
            </td>
            <td>{manager.createdAt}</td>
            <td>
              <ToggleButton
                isActive={manager.isEnabled}
                onChange={() => onChangeAccountStatus(manager)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
