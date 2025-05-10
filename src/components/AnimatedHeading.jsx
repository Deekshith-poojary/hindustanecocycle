export default function AnimatedHeading({text=""}) {
  
    return (
      <h1 className="md:text-8xl m-2 text-4xl font-bold text-center text-white">
        {text.split('').map((char, idx) => (
          <span
            key={idx}
            className={`inline-block animate-letter text-white`}
            style={{ animationDelay: `${idx * 1}s` }}
          >
            {char}
          </span>
        ))}
      </h1>
    );
  }
  