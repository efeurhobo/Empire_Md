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
        Debug.error('Error starting the server:', error);
        process.exit(1); // Exit the process to let Render restart it
    }
}
start();
