"use client";

import Link from "next/link";
import styles from "../styles/person.module.css";
import { useRouter } from "next/navigation";
interface IPersonProps {
  id: string;
  name: string;
  squareImage: string;
  netWorth?: number;
  industries?: string[];
}

export default function Person({
  id,
  name,
  squareImage,
  netWorth,
  industries,
}: IPersonProps) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/person/${id}`);
  };
  return (
    <div className={styles.person}>
      <img src={squareImage} alt={name} onClick={onClick} />
      <Link prefetch href={`/person/${id}`}>
        {name}
      </Link>
      <span className="">
        {(netWorth / 1000).toFixed(0)} Billion / {industries.join(" & ")}
      </span>
    </div>
  );
}
