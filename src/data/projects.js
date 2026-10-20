// Projects, shown in this order. To add one, copy an entry and fill it in.
//
// featured: set to false to hide a project behind the "More projects" button (default: shown).
// title, description, tags, repoUrl: required.
// link:   optional primary link shown before "View on GitHub", e.g. { label: 'Project page', url: '...' }.
// role:   optional line for team or supervised projects, e.g. who built what.
// images: any number, shown in a carousel in this order. Paths are relative to public/,
//         e.g. { src: 'images/go2/robot.jpg', alt: 'Describe what the image shows' }.
//         Videos (.mp4/.webm) work too; add poster: 'images/...jpg' for the frame shown before playback.
// mediaAspect: optional frame shape for the carousel, e.g. '1 / 1' for phone screenshots (default '16 / 10').
export const projects = [
  {
    id: 'go2-openclaw',
    title: 'Unitree Go2 — OpenClaw',
    description:
      'A Unitree Go2 quadruped that takes plain-language instructions over Telegram. An LLM-based dispatcher maps each request to a skill from a modular library of Python skills over the Unitree SDK (DDS), so the robot only runs validated, safety-constrained actions and the model never touches a motor.',
    role: 'Solo project, supervised by Prof. David Sarne.',
    tags: ['Python', 'ROS2', 'LLM', 'Unitree SDK (DDS)', 'OpenClaw', 'YOLOv8'],
    images: [
      {
        src: 'images/go2/go2-demo.mp4',
        poster: 'images/go2/go2-demo-poster.jpg',
        alt: 'The Go2 searches the lab for a bottle of water. A Telegram chat reports each step of the search and whether it found the bottle.',
      },
      {
        src: 'images/go2/architecture.png',
        alt: 'Architecture diagram: a natural-language command from Telegram passes through the OpenClaw gateway to the LLM dispatcher, whose tool profile allows only exec. The dispatcher calls skills such as walk, sit, stretch and detect_object, which drive the Unitree Go2 over SDK2 and DDS, and the result returns to Telegram.',
      },
      { src: 'images/go2/theRobot.png', alt: 'The Unitree Go2 robot standing on the floor of an indoor workspace.' },
    ],
    link: { label: 'Project page', url: 'https://tamirashwal.github.io/Go2/' },
    repoUrl: 'https://github.com/TamirAshwal/Go2',
  },
  {
    id: 'chesswhisper',
    title: 'ChessWhisper — AI chess platform',
    description:
      'Online chess for Android, backed by an authoritative Node.js game server and a custom C++ engine (negamax, alpha-beta, quiescence search, ML-based evaluator) that drives a live evaluation bar, per-move quality feedback and play against the engine. The server provides REST and WebSocket APIs, game clocks, Elo ratings, matchmaking and JWT auth with rotating refresh tokens.',
    tags: ['C++', 'Java (Android)', 'Node.js', 'Express', 'PostgreSQL', 'Docker'],
    // Phone screenshots: a square frame keeps them large enough to read.
    mediaAspect: '1 / 1',
    images: [
      {
        src: 'images/chesswhisper/hero.gif',
        alt: 'An online game in the ChessWhisper Android app, with both players’ clocks counting down as moves are played.',
      },
      {
        src: 'images/chesswhisper/eval-mode.gif',
        alt: 'Eval mode: an evaluation bar beside the board shifts as each move is played.',
      },
      {
        src: 'images/chesswhisper/home.png',
        alt: 'The home screen, showing the player’s rating, games played, recent games, the Classic, Eval bar and Feedback modes, and a Play button.',
      },
      {
        src: 'images/chesswhisper/legal-moves.gif',
        alt: 'Tapping a bishop highlights only the squares it can legally move to.',
      },
    ],
    repoUrl: 'https://github.com/Uziel1305/ChessWhisper-Project',
  },
]
