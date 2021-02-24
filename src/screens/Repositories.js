import React from "react";
import RepoCard from "../components/RepoCard";
import { RepoList } from "../constants";

export default function Repositories() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
      {Object.keys(RepoList).map((key, i) => (
        <RepoCard repo={RepoList[i]} />
      ))}
    </div>
  );
}
