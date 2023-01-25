let i = 0;
const animation = ["|", "/", "-", "\\"];

setInterval(() => {
  process.stdout.write("\r" + animation[i++]);
  if (i === animation.length) i = 0;
}, 100);
