const OnlineStatusComponent = () => {
  return (
    <div className="offline-container">
      <center className="offline-content mt-8">
        <h1 className="offline-title">Oops! You're Offline</h1>
        <p className="offline-message">
          It looks like you're not connected to the internet.
          <br />
          Please check your connection and try again.
        </p>
        <div className="offline-icon">
          <span role="img" aria-label="no internet">
            🔌
          </span>
        </div>
      </center>
    </div>
  );
};

export default OnlineStatusComponent;
