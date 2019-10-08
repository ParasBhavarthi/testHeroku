"use strict";
// TODO: Refactor to a json and move to resources folder
const invalidUsername =
  [
    // A
    "about",
    "access",
    "account",
    "accounts",
    "add",
    "address",
    "adm",
    "admin",
    "administration",
    "adult",
    "advertising",
    "affiliate",
    "affiliates",
    "ajax",
    "analytics",
    "android",
    "anon",
    "anonymous",
    "api",
    "app",
    "apps",
    "archive",
    "atom",
    "auth",
    "authentication",
    "avatar",

    //B
    "backup",
    "banner",
    "banners",
    "bin",
    "billing",
    "blog",
    "blogs",
    "board",
    "bot",
    "bots",
    "business",

    //C
    "chat",
    "cache",
    "cadastro",
    "calendar",
    "campaign",
    "careers",
    "cgi",
    "client",
    "cliente",
    "code",
    "comercial",
    "compare",
    "config",
    "connect",
    "contact",
    "contest",
    "create",
    "code",
    "compras",
    "css",

    //D
    "dashboard",
    "data",
    "db",
    "design",
    "delete",
    "demo",
    "design",
    "designer",
    "dev",
    "devel",
    "dir",
    "directory",
    "doc",
    "docs",
    "domain",
    "download",
    "downloads",

    //E
    "edit",
    "editor",
    "email",
    "ecommerce",
    //F
    "forum",
    "forums",
    "faq",
    "favorite",
    "feed",
    "feedback",
    "flog",
    "follow",
    "file",
    "files",
    "free",
    "ftp",
    //G
    "gadget",
    "gadgets",
    "games",
    "guest",
    "group",
    "groups",

    //H
    "help",
    "home",
    "homepage",
    "host",
    "hosting",
    "hostname",
    "html",
    "http",
    "httpd",
    "https",
    "hpg",
    //I
    "info",
    "information",
    "image",
    "img",
    "images",
    "imap",
    "index",
    "invite",
    "intranet",
    "indice",
    "ipad",
    "iphone",
    "irc",
    //J
    "java",
    "javascript",
    "job",
    "jobs",
    "js",
    //K
    "knowledgebase",
    //L
    "log",
    "login",
    "logs",
    "logout",
    "list",
    "lists",
    //M
    "mail",
    "mail1",
    "mail2",
    "mail3",
    "mail4",
    "mail5",
    "mailer",
    "mailing",
    "mx",
    "manager",
    "marketing",
    "master",
    "me",
    "media",
    "message",
    "microblog",
    "microblogs",
    "mine",
    "mp3",
    "msg",
    "msn",
    "mysql",
    "messenger",
    "mob",
    "mobile",
    "movie",
    "movies",
    "music",
    "musicas",
    "my",
    //N
    "name",
    "named",
    "net",
    "network",
    "new",
    "news",
    "newsletter",
    "nick",
    "nickname",
    "notes",
    "noticias",
    "ns",
    "ns1",
    "ns2",
    "ns3",
    "ns4",
    //O
    "old",
    "online",
    "operator",
    "order",
    "orders",
    //P
    "page",
    "pager",
    "pages",
    "panel",
    "password",
    "perl",
    "pic",
    "pics",
    "photo",
    "photos",
    "photoalbum",
    "php",
    "plugin",
    "plugins",
    "pop",
    "pop3",
    "post",
    "postmaster",
    "postfix",
    "posts",
    "profile",
    "project",
    "projects",
    "promo",
    "pub",
    "public",
    "python",
    //R
    "random",
    "register",
    "registration",
    "root",
    "ruby",
    "rss",
    //S
    "sale",
    "sales",
    "sample",
    "samples",
    "script",
    "scripts",
    "secure",
    "send",
    "service",
    "shop",
    "sql",
    "signup",
    "signin",
    "search",
    "security",
    "settings",
    "setting",
    "setup",
    "site",
    "sites",
    "sitemap",
    "smtp",
    "soporte",
    "ssh",
    "stage",
    "staging",
    "start",
    "subscribe",
    "subdomain",
    "suporte",
    "support",
    "stat",
    "static",
    "stats",
    "status",
    "store",
    "stores",
    "system",
    //T
    "tablet",
    "tablets",
    "tech",
    "telnet",
    "test",
    "test1",
    "test2",
    "test3",
    "teste",
    "tests",
    "theme",
    "themes",
    "tmp",
    "todo",
    "task",
    "tasks",
    "tools",
    "tv",
    "talk",
    //U
    "update",
    "upload",
    "url",
    "user",
    "username",
    "usuario",
    "usage",
    //V
    "vendas",
    "video",
    "videos",
    "visitor",
    //W
    "win",
    "ww",
    "www",
    "www1",
    "www2",
    "www3",
    "www4",
    "www5",
    "www6",
    "www7",
    "wwww",
    "wws",
    "wwws",
    "web",
    "webmail",
    "website",
    "websites",
    "webmaster",
    "workshop",
    //X
    "xxx",
    "xpg",
    //Y
    "you",
    "yourname",
    "yourusername",
    "yoursite",
    "yourdomain"
  ];

export {invalidUsername}