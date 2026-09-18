import { useSelector, useDispatch } from 'react-redux';
import { stationActions } from '../store/stationSlice';
import { alertsActions } from '../store/alertsSlice';
import dayjs from 'dayjs';

const StationStatus = () => {
  const dispatch = useDispatch();
  const { oxygen, energy, shields, alertLevel } = useSelector(
    (state) => state.station
  );

  const updateAlertLevelIfNeeded = (nextOxygen, nextEnergy, nextShields) => {
    let newLevel = 'GREEN';
    if (nextOxygen < 30 || nextEnergy < 30 || nextShields < 30) {
      newLevel = 'RED';
    } else if (nextOxygen < 60 || nextEnergy < 60 || nextShields < 60) {
      newLevel = 'YELLOW';
    }

    if (newLevel !== alertLevel) {
      dispatch(stationActions.setAlertLevel(newLevel));
    }
  };

  const handleOxygenChange = (amount) => {
    const nextOxygen = Math.max(0, Math.min(100, oxygen + amount));
    dispatch(stationActions.changeOxygen(amount));
    updateAlertLevelIfNeeded(nextOxygen, energy, shields);

    if (nextOxygen < 30) {
      dispatch(
        alertsActions.addAlert({
          id: crypto.randomUUID(),
          message: `WARNING: Critical oxygen level (${nextOxygen}%)!`,
          type: 'danger',
          timestamp: dayjs().format('HH:mm:ss'),
        })
      );
    }
  };

  const handleEnergyChange = (amount) => {
    const nextEnergy = Math.max(0, Math.min(100, energy + amount));
    dispatch(stationActions.changeEnergy(amount));
    updateAlertLevelIfNeeded(oxygen, nextEnergy, shields);

    if (nextEnergy < 30) {
      dispatch(
        alertsActions.addAlert({
          id: crypto.randomUUID(),
          message: `WARNING: Low power reserve (${nextEnergy}%)!`,
          type: 'warning',
          timestamp: dayjs().format('HH:mm:ss'),
        })
      );
    }
  };

  const handleShieldsChange = (amount) => {
    const nextShields = Math.max(0, Math.min(100, shields + amount));
    dispatch(stationActions.changeShields(amount));
    updateAlertLevelIfNeeded(oxygen, energy, nextShields);
  };

  return (
    <div className="card">
      <h2>Station Status — [{alertLevel}]</h2>

      <ul className="stats-list">
        <li>Oxygen: {oxygen}%</li>
        <li>Energy: {energy}%</li>
        <li>Shields: {shields}%</li>
      </ul>

      <div className="btn-group">
        <button onClick={() => handleOxygenChange(10)}>+10 Oxygen</button>
        <button onClick={() => handleOxygenChange(-20)}>-20 Oxygen</button>
        <button onClick={() => handleEnergyChange(-15)}>-15 Energy</button>
        <button onClick={() => handleEnergyChange(15)}>+15 Energy</button>
        <button onClick={() => handleShieldsChange(10)}>+10 Shields</button>
        <button onClick={() => handleShieldsChange(-10)}>-10 Shields</button>
      </div>

      <div className="btn-group" style={{ marginTop: '12px' }}>
        <button onClick={() => dispatch(stationActions.setAlertLevel('GREEN'))}>
          Set GREEN
        </button>
        <button
          onClick={() => dispatch(stationActions.setAlertLevel('YELLOW'))}
        >
          Set YELLOW
        </button>
        <button onClick={() => dispatch(stationActions.setAlertLevel('RED'))}>
          Set RED
        </button>
      </div>
    </div>
  );
};

export default StationStatus;
