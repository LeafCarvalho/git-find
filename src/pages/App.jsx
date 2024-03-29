import { useState } from "react";
import '../reset.css';
import Header from "../components/Header";
import Input from "../components/Input";
import api from '../services/api';
import Button from "../components/Button";
import Repositorio from "../components/Repositorios";
import { useOnKeyPress } from "../components/Button/onkeypress";

export default function App() {
  const [currentName, setCurrentName] = useState('');
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const getRepositories = async () => {
    const fullName = `${currentName}${currentRepo ? `/${currentRepo}` : ''}`;
    const { data } = await api.get(`repos/${fullName}`).catch((error) => {
      alert("O repositório não foi localizado!");
    });

    if (data.id) {
      const exists = repos.find((repo) => repo.id === data.id);
      if (!exists) {
        setRepos((prev) => [...prev, data]);
        setCurrentName('');
        setCurrentRepo('');
        return;
      }
      alert("O repositório já foi localizado!");
    }
  };

  useOnKeyPress(getRepositories, 'Enter');

  const removeRepositories = (id) => {
    setRepos(repos.filter((repo) => repo.id !== id));
  };

  return (
    <>
      <Header />
      <Input
        nameValue={currentName}
        repoValue={currentRepo}
        onNameChange={(e) => setCurrentName(e.target.value)}
        onRepoChange={(e) => setCurrentRepo(e.target.value)}
      />
      <Button onClick={getRepositories} />
      {repos.map((repo) => (
        <Repositorio key={repo.id} repo={repo} remover={removeRepositories} />
      ))}
    </>
  );
}
