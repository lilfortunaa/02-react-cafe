import css from "./VoteOptions.module.css";

interface Props {
  onVote: (option: "good" | "neutral" | "bad") => void;
  onReset: () => void;
  canReset: boolean;
}

export default function VoteOptions({ onVote, onReset, canReset }: Props) {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={() => onVote("good")}>
        Good
      </button>
      <button className={css.button} onClick={() => onVote("neutral")}>
        Neutral
      </button>
      <button className={css.button} onClick={() => onVote("bad")}>
        Bad
      </button>

      {canReset && (
        <button className={`${css.button} ${css.reset}`} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
}
