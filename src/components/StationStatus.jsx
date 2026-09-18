import { useSelector, useDispatch } from 'react-redux';
import { stationActions } from '../store/stationSlice';

const StationStatus = () => {
  const dispatch = useDispatch();
  const { oxygen, energy, shields, alertLevel } = useSelector(
    (state) => state.station
  );

  return (
    <div className="card">
      <h2>Station Status — [{alertLevel}]</h2>

      <ul className="stats-list">
        <li>Oxygen: {oxygen}%</li>
        <li>Energy: {energy}%</li>
        <li>Shields: {shields}%</li>
      </ul>

      <div className="btn-group">
        <button onClick={() => dispatch(stationActions.changeOxygen(10))}>
          +10 Oxygen
        </button>
        <button onClick={() => dispatch(stationActions.changeOxygen(-10))}>
          -10 Oxygen
        </button>
        <button onClick={() => dispatch(stationActions.changeEnergy(-15))}>
          -15 Energy
        </button>
        <button onClick={() => dispatch(stationActions.changeShields(10))}>
          +10 Shields
        </button>
      </div>
    </div>
  );
};

export default StationStatus;
