import { useSelector, useDispatch } from 'react-redux';
import { modulesActions } from '../store/modulesSlice';

const ModulesList = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.modules);

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

            <button
              onClick={() =>
                dispatch(modulesActions.toggleModulePower(item.id))
              }
            >
              {item.isPowered ? 'Power Off' : 'Power On'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModulesList;
