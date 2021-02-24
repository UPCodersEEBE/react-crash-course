import React from "react";

export default function RepoCard({ repo }) {
  return (
    <div className="repo-card">
      <div className="title">{repo.name}</div>
      <div>{repo.description}</div>
      <div>{repo.created_at}</div>
      <div>{repo.updated_at}</div>
      <a href={repo.html_url} target="_blank">
        Link
      </a>
    </div>
  );
}
