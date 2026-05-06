import "./App.css";

function App() {

  const subscriptions = [
    { name: "Netflix", cost: 500, renewal: "2026-05-02" },
    { name: "Spotify", cost: 120, renewal: "2026-05-01" },
    { name: "Amazon Prime", cost: 300, renewal: "2026-05-10" }
  ];

  const total = subscriptions.reduce((sum, s) => sum + s.cost, 0);

  const today = new Date();

  return (
    <div className="container">

      <h1>My Subscriptions</h1>

      <h2>Total Monthly Cost: ₹{total}</h2>

      <div className="cards">
        {subscriptions.map((sub, i) => (
          <div key={i} className="card">
            <h3>{sub.name}</h3>
            <p>Cost: ₹{sub.cost}</p>
            <p>Renewal: {sub.renewal}</p>
          </div>
        ))}
      </div>

      <h2>Renewing Soon</h2>
      {subscriptions.map((sub, i) => {
        const renewalDate = new Date(sub.renewal);
        const diff = (renewalDate - today) / (1000 * 60 * 60 * 24);

        if (diff <= 3 && diff >= 0) {
          return (
            <p key={i} className="alert">
              {sub.name} is renewing soon!
            </p>
          );
        }
        return null;
      })}

    </div>
  );
}

export default App;