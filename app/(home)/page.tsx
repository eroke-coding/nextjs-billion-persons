import Link from "next/link";
import styles from "../../styles/home.module.css";
import { API_URL } from "../constants";
import Person from "../../components/person";
export const metadata = {
  title: "Home",
};

async function getPersons() {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const persons = await getPersons();
  return (
    <div className={styles.container}>
      {persons.map((movie) => (
        <Person key={movie.id} {...movie} />
      ))}
    </div>
  );
}
