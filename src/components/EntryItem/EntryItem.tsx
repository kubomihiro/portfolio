import React from "react";
import Link from "next/link";
import styles from "./EntryItem.module.css";

 type Props = {
    id :string;
    title?: string;
    description?: string;
    eyecatch?: {
      url: string;
      height?: number;
      width?: number; 
 };
 };

 export const EntryItem = (props: Props) => {
  return (
    <article className={styles.entryItem}>
      <h2 className={styles.entryItemTitle}>
        <Link href={`/entry/${props.id}`}>{props.title}</Link>
      </h2>
      {props.description && (
        <p className={styles.description}>{props.description}</p>
      )}
      {props.eyecatch && (
        <figure className={styles.image}>
          <img src={props.eyecatch.url} alt="" />
        </figure>
      )}
    </article>
  );
};