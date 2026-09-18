import { useSelector, useDispatch } from 'react-redux';
import { modulesActions } from '../store/modulesSlice';
import { alertsActions } from '../store/alertsSlice';
import dayjs from 'dayjs';

const ModulesList = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.modules);

  const handleTogglePower = (item) => {
    dispatch(modulesActions.toggleModulePower(item.id));

    const newStatus = !item.isPowered;
    const time = dayjs().format('HH:mm:ss');

    dispatch(
      alertsActions.addAlert({
        id: crypto.randomUUID(),
        message: `Module "${item.name}" was ${newStatus ? 'POWERED ON' : 'POWERED OFF'}`,
        type: newStatus ? 'info' : 'warning',
        timestamp: time,
      })
    );
  };

  return (
    <div className="card">
      <h2>Station Modules</h2>
      <ul className="modules-list">
        {items.map((item) => (
          <li
            key={item.id}
            className={`module-item ${item.isPowered ? 'powered' : 'offline'}`}
          >
            <div>
              <strong>{item.name}</strong> — {item.powerConsumption} kW
              <span
                className={`status-tag ${item.isPowered ? 'green' : 'red'}`}
              >
                [{item.isPowered ? 'POWERED' : 'OFFLINE'}]
              </span>
            </div>

            <button onClick={() => handleTogglePower(item)}>
              {item.isPowered ? 'Power Off' : 'Power On'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModulesList;
