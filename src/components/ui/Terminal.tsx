import { useEffect, useState } from "react";
// import { cn } from "../../lib/utils";

export function Terminal() {
  const [text, setText] = useState("");
  const fullCode = `
// Matchmaking Queue Logic
const joinQueue = (player: User) => {
  const match = await redis.pop('queue');

  if (match) {
    // Create Game Room
    const roomId = uuid();
    await createGame(roomId, [player, match]);
    
    // Notify Clients
    socket.to(player.id).emit('match_found', roomId);
    socket.to(match.id).emit('match_found', roomId);
  } else {
    // Add to Queue
    await redis.push('queue', player);
  }
}`;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullCode.slice(0, i));
      i++;
      if (i > fullCode.length) {
        clearInterval(interval);
      }
    }, 30); // Typing speed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full bg-midnight-900 rounded-lg border border-midnight-border overflow-hidden opacity-90 font-mono text-xs md:text-sm">
      {/* Terminal Header */}
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-midnight-border bg-midnight-800">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        <span className="ml-2 text-midnight-border text-[10px]">backend/matchmaking.ts</span>
      </div>

      {/* Code Content */}
      <div className="p-4 text-accent-gray leading-relaxed whitespace-pre font-mono">
        <SyntaxHighlight text={text} />
        <span className="animate-pulse inline-block w-2 h-4 bg-accent-blue align-middle ml-1" />
      </div>
    </div>
  );
}

// Simple highlighter helper
const SyntaxHighlight = ({ text }: { text: string }) => {
  // This is a naive implementation, but fast. 
  // We manually colorize keywords in the string render.
  return (
    <span dangerouslySetInnerHTML={{
      __html: text
        .replace(/(const|await|if|else|return)/g, '<span class="text-accent-purple">$1</span>')
        .replace(/(function|joinQueue|createGame)/g, '<span class="text-accent-blue">$1</span>')
        .replace(/('.*?')/g, '<span class="text-accent-green">$1</span>')
        .replace(/(\/\/.*)/g, '<span class="text-gray-500">$1</span>')
    }} />
  );
};