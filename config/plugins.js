module.exports = ({ env }) => ({
    email: {
        provider: 'nodemailer',
        providerOptions: {
            host: env('SMTP_HOST', 'smtp.example.com'),
            port: env('SMTP_PORT', 465),
            auth: {
                user: env('SMTP_USERNAME'),
                pass: env('SMTP_PASSWORD'),
            },
        },
        settings: {
            defaultFrom: 'pidetuvape@gmail.com',
            defaultReplyTo: 'pidetuvape@gmail.com',
        },
    },
});