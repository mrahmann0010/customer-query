function StatusBar() {
  return (
    <div className="col-span-1">
      <div>
        <h3>Task Status</h3>
        <p>Select a ticket to add to Task Status</p>
      </div>
      <div>
        <h3>Resolved Status</h3>
        <p>Select a Task to add to Resolve Status</p>
      </div>
    </div>
  );
}

export default StatusBar;
