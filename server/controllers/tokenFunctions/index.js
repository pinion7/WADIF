const { sign } = require('jsonwebtoken');
const { tokens } = require('../../models');

module.exports = {
  generateAccessToken: (data) => {
    return sign(data, process.env.ACCESS_SECRET, { expiresIn: '5h' });
  },

  generateRefreshToken: (data) => {
    return sign(data, process.env.REFRESH_SECRET, { expiresIn: '30d' });
  },

  sendAccessToken: (res, accessToken) => {
    res.cookie('accessToken', accessToken, {
      httpOnly: true,
    });
  },

  sendRefreshToken: async (res, refreshToken, data) => {
    const [result, created] = await tokens.findOrCreate({
      where: { user_id: data.id },
      defaults: { refreshToken },
    });
    result.update({ refreshToken });
    res.status(200).json({ data, message: '성공' });
  },
};
