import { API_URL } from "../app/constants";
import styles from "../styles/person-info.module.css";

export async function getPerson(id: string) {
  const response = await fetch(`${API_URL}/person/${id}`);
  console.log(`${API_URL}/person/${id}`);
  return response.json();
}

export default async function PersonInfo({ id }: { id: string }) {
  const person = await getPerson(id);
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <img
          src={person.squareImage}
          className={styles.poster}
          alt={person.name}
        />
        <div className={styles.info}>
          <h1 className={styles.title}>{person.name}</h1>
          <h3>Networth: {(person.netWorth / 1000).toFixed(0)} Billion</h3>
          <h3>Country: {person.country}</h3>
          <h3>Industry: {person.industries.join(" & ")}</h3>
          <p>{person.about}</p>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.info}>
          <h1>Finncial Assets</h1>
          <div className={styles.sub_info}>
            {person.financialAssets.map((asset) => (
              <div className={styles.sub_info_item}>
                <h3>Ticker: {asset.ticker}</h3>
                <h3>Shares: {asset.numberOfShares.toLocaleString("ko-KR")}</h3>
                {asset.exerciseOptionPrice ? (
                  <h3>Excersise Price: {asset.exerciseOptionPrice}</h3>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
