module.exports = {
    name: 'rateLimit',
    once: false,
    async execute(client, info) {
        console.log('[Rate_Limit] infomation: ' + info);
    }
}