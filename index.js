const bot = require(__dirname + '/lib/smd')
const { VERSION } = require(__dirname + '/config')
const express = require('express'); // If you're using Express
const app = express(); // Create an Express app

// Use the PORT environment variable provided by Render
const PORT = process.env.PORT || 8000; 

const start = async () => {
    Debug.info(`Empire_Md ${VERSION}`)
    try {
        await bot.init();
        bot.logger.info('⏳ Database syncing!');
        await bot.DATABASE.sync();
        await bot.connect();
        
        // Set up a simple route (for health check or testing)
        app.get('/', (req, res) => {
            res.send('Empire_Md is running!');
        });

        // Start the Express server on the specified PORT
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        Debug.error(error);
        start();
    }
}
start();
