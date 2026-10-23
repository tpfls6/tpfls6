module.exports = new Proxy({}, { get: (_, url) => "@font-face { font-family: " + (url.includes("IBM") ? "MockMono" : "MockInter") + "; src: local(Arial); font-weight: 100 900; }" });
