import type { Winner } from '@/features/leaderboard/schemas/winner.schema.ts';
import SimpleBar from 'simplebar-react';
import gold from '@/assets/svgs/trophy-gold.svg';
import silver from '@/assets/svgs/trophy-silver.svg';
import bronze from '@/assets/svgs/trophy-bronze.svg';

type leaderboardListProps = {
  className?: string;
  winners: Winner[];
};
const LeaderboardList = ({ className = '', winners }: leaderboardListProps) => {
  return (
    <SimpleBar
      className={`border-sand-beige h-full border-t-2 border-b-2 ${className}`}
    >
      <ol className="my-2 flex flex-col gap-0.5">
        {winners.length == 0 ? (
          <li className="text-center">No winners yet!</li>
        ) : (
          winners.map((winner, index) => (
            <li
              key={index + winner.name}
              className="grid w-full grid-cols-[12px_1fr_24px] items-center gap-2"
            >
              <span>{index + 1}.</span>
              <span className="text-lg">{winner.name}</span>
              {index == 0 ? (
                <img src={gold} />
              ) : index == 1 ? (
                <img src={silver} />
              ) : index == 2 ? (
                <img src={bronze} />
              ) : (
                <div />
              )}
            </li>
          ))
        )}
      </ol>
    </SimpleBar>
  );
};

export { LeaderboardList };
