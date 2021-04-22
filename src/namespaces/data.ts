export interface Doc {}

export interface Lib {
  color: string
  repo: string
  image: string
  name: string
  github: string
  npm: string
  docs: string
  versions: { [k: string]: Doc | null }
}

export type Type =
  | "class"
  | "interface"
  | "typedef"
  | "prop"
  | "method"
  | "event"

export const types: Type[] = [
  "class",
  "interface",
  "typedef",
  "prop",
  "method",
  "event",
]

export const libs: Lib[] = [
  {
    color: "#096beb",
    repo: "discord.js",
    image: "https://discord.js.org/static/logo-square.png",
    name: "Discord JS",
    github: "https://github.com/discordjs/discord.js",
    npm: "https://www.npmjs.com/package/discord.js",
    docs: "https://discord.js.org/#/docs/main/stable/general/welcome",
    versions: {
      stable: null,
      master: null,
    },
  },
  {
    color: "#707b8a",
    repo: "discord.js-commando",
    image: "https://discord.js.org/static/logo-square.png",
    name: "Discord JS Commando",
    github: "https://github.com/discordjs/Commando",
    npm: "https://www.npmjs.com/package/discord.js-commando",
    docs: "https://discord.js.org/#/docs/commando/master/general/welcome",
    versions: {
      commando: null,
    },
  },
  {
    color: "#707b8a",
    repo: "discord-rpc",
    image: "https://discord.js.org/static/logo-square.png",
    name: "Discord RPC",
    github: "https://github.com/discordjs/RPC",
    npm: "https://www.npmjs.com/package/discord-rpc",
    docs: "https://discord.js.org/#/docs/rpc/master/general/welcome",
    versions: {
      rpc: null,
    },
  },
  {
    color: "#87202F",
    repo: "discord-akairo",
    image: "https://avatars3.githubusercontent.com/u/48862924?s=400&v=4",
    name: "Discord Akairo",
    github: "https://github.com/discord-akairo/discord-akairo",
    npm: "https://www.npmjs.com/package/discord-akairo",
    docs:
      "https://discord-akairo.github.io/#/docs/main/master/class/AkairoClient",
    versions: {
      akairo: null,
      "akairo-master": null,
    },
  },
]
