import { useState } from "react";
import css from "./App.module.css";
import CafeInfo from "../CafeInfo/CafeInfo";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
import Notify from "../Notification/Notification";

export default function App() {
  const [votes, setVotes] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const VoteClick = (option: keyof typeof votes) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [option]: prevVotes[option] + 1,
    }));
  };

  const HandleReset = () => {
    setVotes({ good: 0, neutral: 0, bad: 0 });
  };
  const totalVotes = votes.good + votes.neutral + votes.bad;
  const positiveRate =
    totalVotes === 0 ? 0 : Number(((votes.good / totalVotes) * 100).toFixed(1));
  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions
        onVote={VoteClick}
        onReset={HandleReset}
        canReset={totalVotes > 0}
      />
      {totalVotes > 0 ? (
        <VoteStats
          votes={votes}
          totalVotes={totalVotes}
          positiveRate={positiveRate}
        />
      ) : (
        <Notify />
      )}
    </div>
  );
}
