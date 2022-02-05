import { Manager } from "module/Dashboard/Domain/entity/Manager";
import { useState } from "react";
import { ToggleButton } from "shared";
import Modal from "shared/Modal/Modal";
import useModal from "shared/Modal/useModal";
import useUpdateAccountStatus from "../../hooks/useUpdateAccountStatus";
import TagAccountStatus from "../TagAccountStatus/TagAccountStatus";

interface IProps {
  managers: Manager[];
  onChangeAccountStatus(manager: Manager): void;
}
export default function ManagerTable(props: IProps) {
  const { mutate, isLoading } = useUpdateAccountStatus();
  const { isVisible, toggle } = useModal();
  const [managerSelected, setManagerSelected] = useState<Manager>(
    {} as Manager
  );
  const { managers, onChangeAccountStatus } = props;

  const onToggle = (): void => {
    toggle();
  };

  const onConfirm = () => {
    mutate({
      isEnabled: !managerSelected.isEnabled,
      id: managerSelected.id,
    });

    onChangeAccountStatus(managerSelected);

    toggle();
  };
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Nombre y apellidos</th>
            <th>Email</th>
            <th>Estado de cuenta</th>
            <th>Fecha de creación</th>
            <th>Activar cuenta</th>
          </tr>
        </thead>
        <tbody>
          {managers.map((manager) => (
            <tr
              data-testid={`manager-${manager.id}`}
              className="manager-row"
              key={manager.id}
            >
              <td>
                {manager.name} {manager.lastname}
              </td>
              <td>{manager.account.email}</td>
              <td>
                <TagAccountStatus isEnable={manager.isEnabled} />
              </td>
              <td>{manager.createdAt}</td>
              <td>
                <ToggleButton
                  isActive={manager.isEnabled}
                  onChange={() => {
                    onToggle();
                    setManagerSelected(manager);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isVisible && (
        <Modal
          eventName={managerSelected.isEnabled ? "Desactivar" : "Activar"}
          isLoading={isLoading}
          onConfirm={onConfirm}
          onCancel={toggle}
        />
      )}
    </>
  );
}
