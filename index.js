const bot = require(__dirname + '/lib/smd')
const { VERSION } = require(__dirname + '/config')

const start = async () => {
    Debug.info(`Empire_Md ${VERSION}`)
  try {
    await bot.init()
    bot.logger.info('⏳ Database syncing!')
    await bot.DATABASE.sync()
    await bot.connect()
  } catch (error) {
    Debug.error(error);
    start();
  }
}
start();
