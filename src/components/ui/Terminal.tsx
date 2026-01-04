import { useEffect, useState } from "react";

export function Terminal() {
  const [text, setText] = useState("");
  const fullCode = `
// Matchmaking Logic
const joinQueue = async (user) => {
  const match = await redis.pop('queue');

  if (match) {
    const roomId = uuid();
    await createGame(roomId, [user, match]);
    
    socket.to(user).emit('match', roomId);
    socket.to(match).emit('match', roomId);
  } else {
    await redis.push('queue', user);
  }
}`;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullCode.slice(0, i));
      i++;
      if (i > fullCode.length) clearInterval(interval);
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    // Added h-full to ensure it fills the parent container
    <div className="w-full h-full bg-[#0D1117] rounded-lg border border-midnight-border shadow-2xl overflow-hidden font-mono text-xs flex flex-col">
      {/* Window Controls */}
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-midnight-border bg-[#161b22]">
        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
        <span className="ml-2 text-gray-500 text-[10px]">backend/queue.ts</span>
      </div>

      {/* Code Area */}
      <div className="p-4 text-gray-300 leading-relaxed whitespace-pre flex-grow overflow-auto">
        <span dangerouslySetInnerHTML={{
             __html: text
             .replace(/(const|await|if|else)/g, '<span class="text-[#ff7b72]">$1</span>')
             .replace(/(joinQueue|createGame|pop|push|emit)/g, '<span class="text-[#d2a8ff]">$1</span>')
             .replace(/('.*?')/g, '<span class="text-[#a5d6ff]">$1</span>')
             .replace(/(\/\/.*)/g, '<span class="text-[#8b949e]">$1</span>')
        }} />
        <span className="animate-pulse inline-block w-2 h-4 bg-accent-blue align-middle ml-1" />
      </div>
    </div>
  );
}