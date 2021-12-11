import { Manager } from "module/Dashboard/Domain/entity/Manager";
import { useEffect, useState } from "react";
import { Spinner } from "shared";
import Header from "../components/Header/Header";
import ManagerOptions from "../components/Options/ManagerOptions";
import Table from "../components/Table/ManagerTable";
import useGetManagers from "../hooks/useGetManagers";

export default function ManagerPage() {
  const { data, isLoading, refetch, isFetching } = useGetManagers();
  const [managers, setManagers] = useState<Manager[]>([]);
  useEffect(() => {
    if (data !== undefined) {
      setManagers(data);
    }
  }, [data]);
  const changeStatusAccount = (managerTarget: Manager) => {
    setManagers((currManagers) => {
      return currManagers.map((m) => {
        if (m.id === managerTarget.id) {
          return {
            ...m,
            isEnabled: !m.isEnabled,
          };
        }
        return m;
      });
    });
  };

  return (
    <div>
      <Header
        title="Responsables de centros de vacunación"
        description="Lista de los responsables del centro de vacunación"
      />

      <ManagerOptions isFetching={isFetching} onRefresh={() => refetch()} />
      {(isLoading || isFetching) && <Spinner />}
      {!isLoading && !isFetching && (data as Manager[]).length > 0 && (
        <Table
          onChangeAccountStatus={changeStatusAccount}
          managers={managers}
        />
      )}
      {!isLoading && managers.length < 1 && (
        <div className="empty-managers-container flex f-row jc-center ai-center">
          <p>No hay responsables de centro de vacunación</p>
        </div>
      )}

    </div>
  );
}
