// include dependencies
const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
var cors = require("cors");

const app = express();
app.use(cors());

// proxy middleware options
const options = {
  target: "https://app.ripio.com/api/v3/", // target host with the same base path
  changeOrigin: true, // needed for virtual hosted sites
  onProxyReq: (proxyReq, req, res) => {
    proxyReq.path += "?country=AR";
  },
};

// create the proxy
const proxy = createProxyMiddleware(options);

// mount `proxy` in web server
app.use("/rates", proxy);
app.use("/currencies", proxy);
app.listen(3001);
