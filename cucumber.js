module.exports = {
    default: {
        formatOptions: {
            snippetInterface: 'async-await'
        },
        paths: ['features/*.feature'],
        requireModule: ['@babel/register'],
        require: ['features/step_definitions/*.js', 'features/support/*.js'],
        format: [
            'progress-bar',
            ['html', 'reports/cucumber-report.html']
        ],
        parallel: 1
    }
};