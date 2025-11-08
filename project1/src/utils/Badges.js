export const storyBadge = (score) => {

  if (score >= 0 && score <= 100) return "🟥🏅";
  if (score > 100 && score <= 400) return "🟨🏅";
  if (score > 400 && score <= 700) return "🟩🏅";
  if (score > 700 && score <= 1000) return "🟦🏅";
  if (score > 1000) return "🟪🏅";
  return "";
};

export const storyTypeBadge=(type)=>{
if(type==="topstories") return "🟥";
if(type==="askstories") return "🟨";
if(type==="newstories") return "🟩";
if(type==="jobstories") return "🟦";
if(type==="showstories") return "🟪";
if(type==="beststories") return "⬜";
}

export const karmaBadge=(karma)=>{
  if (karma >= 45000 && karma <= 70000) return "🟥";
  if (karma > 70000 && karma <= 100000) return "🟨";
  if (karma > 100000 && karma <= 150000) return "🟩";
  if (karma > 150000 && karma <= 200000) return "🟦";
  if (karma > 200000) return "🟪🏅";
  return "";
}

