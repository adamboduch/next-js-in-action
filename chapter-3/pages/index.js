import React from 'react';

export default function Home() {
  return (
    <main>
      <section>
        <h1>Expendisure</h1>
      </section>
      <section>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/expense">New Expense</a>
            </li>
            <li>
              <a href="/reports">Reports</a>
            </li>
            <li>
              <a href="/history">History</a>
            </li>
          </ul>
        </nav>
      </section>
      <section>
        <h2>Spending Summary</h2>
        <div>
          Days Remaining: <strong>6</strong>
        </div>
        <div>
          <progress max="100" value="45" />
        </div>
        <div>
          Budget Remaining: <strong>$709</strong>
        </div>
        <div>
          <progress max="100" value="82" />
        </div>
        <h3>Top Merchants</h3>
        <ul>
          <li>
            Morsels (<strong>$211</strong>)
          </li>
          <li>
            Purest Food (<strong>$91</strong>)
          </li>
          <li>
            Apparel Hive (<strong>$304</strong>)
          </li>
        </ul>
        <h3>Top Locations</h3>
        <ul>
          <li>Downtown</li>
          <li>North York</li>
        </ul>
      </section>
    </main>
  );
}
