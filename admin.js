require('dotenv').config()
const admin = require('firebase-admin');



const type = "service_account"
const project_id = "tiered-bad-bank"
const private_key_id = process.env.FIREBASE_ADMIN_KEY_ID
const private_key = process.env.FIREBASE_ADMIN_KEY
const client_email = "firebase-adminsdk-b90zs@tiered-bad-bank.iam.gserviceaccount.com"
const client_id = "106016125547918917843"
const auth_uri = "https://accounts.google.com/o/oauth2/auth"
const token_uri = "https://oauth2.googleapis.com/token"
const auth_provider_x509_cert_url = "https://www.googleapis.com/oauth2/v1/certs"
const client_x509_cert_url = "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-b90zs%40tiered-bad-bank.iam.gserviceaccount.com"

admin.initializeApp({
    credential: admin.credential.cert({
        type,
        project_id,
        private_key_id,
        private_key:
          private_key.replace(/\\n/g,'\n'),
        client_email,
        client_id,
        auth_uri,
        token_uri,
        auth_provider_x509_cert_url,
        client_x509_cert_url
    }),
  });
  
  // export that admin
  module.exports = admin;