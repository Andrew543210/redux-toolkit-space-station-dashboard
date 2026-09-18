import { useSelector, useDispatch } from 'react-redux';
import { alertsActions } from '../store/alertsSlice';

const AlertsList = () => {
  const dispatch = useDispatch();
  const { alerts } = useSelector((state) => state.alerts);

  return (
    <div className="card alerts-card">
      <div className="card-header">
        <h2>System Alerts & Logs</h2>
        <button
          className="btn-danger-sm"
          onClick={() => dispatch(alertsActions.clearAlerts())}
        >
          Clear Log
        </button>
      </div>

      <div className="logs-container">
        {alerts.length === 0 ? (
          <p className="no-logs">No active alerts recorded.</p>
        ) : (
          alerts.map((alert) => (
            <div key={alert.id} className={`log-item log-${alert.type}`}>
              <span className="log-time">[{alert.timestamp}]</span>
              <span className="log-msg">{alert.message}</span>
              <button
                className="log-remove"
                onClick={() => dispatch(alertsActions.removeAlert(alert.id))}
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AlertsList;
