const {google} = require('googleapis');
const oauth2 = google.oauth2('v2');
const {secret} = require('../google_secret.json');

const oauth2Client = new google.auth.OAuth2(
    secret.client_id,
    secret.client_secret,
    secret.redirect_uris
);

const scopes = [
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/userinfo.profile'
];
  
const url = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: scopes
});

class GoogleController{

    authenticate = (ctx) => {
        ctx.redirect(url);
    }

    verifyAuth = async(ctx) => {
        var code = ctx.request.query.code;
        if (code) {

            const {tokens} = await oauth2Client.getToken(code);
            oauth2Client.setCredentials(tokens);

            const user = await oauth2.userinfo.get({auth: oauth2Client});

            ctx.body = user.data;
        }
        
    }
}

module.exports = new GoogleController;