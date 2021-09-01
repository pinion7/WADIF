const { sign, verify } = require('jsonwebtoken');

module.exports = {
  generateAccessToken: (data) => {
    return sign(data, process.env.ACCESS_SECRET, { expiresIn: '15d' });
  },

  generateRefreshToken: (data) => {
    return sign(data, process.env.REFRESH_SECRET, { expiresIn: '30d' });
  },

  sendAccessToken: (res, accessToken) => {
    res.json({ data: { accessToken }, message: 'ok' });
  },

  resendAccessToken: (res, accessToken, data) => {
    res.json({ data: { accessToken, userInfo: data }, message: 'ok' });
  },

  sendRefreshToken: (res, refreshToken) => {
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
    });
  },

  isAuthorized: (req) => {
    const authorization = req.headers['authorization'];
    if (!authorization) {
      return null;
    }
    const token = authorization.split(' ')[1];
    try {
      return verify(token, process.env.ACCESS_SECRET);
    } catch (err) {
      return null;
    }
  },
  checkToken: (refreshToken) => {
    try {
      return verify(refreshToken, process.env.REFRESH_SCRET);
    } catch (e) {
      return null;
    }
  },
};
